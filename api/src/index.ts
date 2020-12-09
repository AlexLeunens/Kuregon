import * as express from "express";
import * as bodyParser from "body-parser";
import { createConnection } from "typeorm"
import { User } from "./entity/User"

import UserRepository from './repository/userRepository'

createConnection().then(async connection => {

    const app = express()
    app.use(bodyParser.json())

    app.use(function (_req, res, next) {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        )
        next()
    })

    app.get('/user/all', async (req, res) => {
        const repo = new UserRepository();
        const result = await repo.all()

        if (result) {
            res.status(200).json(result)
        }

        res.end()
    })


    const port = 3000
    app.listen(port)
    console.log('Server listening on port ' + port + '...')

}).catch(error => console.log(error));


