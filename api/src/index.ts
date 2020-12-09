import * as express from "express";
import * as bodyParser from "body-parser";
import { createConnection } from "typeorm"
import { User } from "./entity/User"

import UserRepository from './repository/userRepository'
import PostRepository from "./repository/postRepository";
import { Post } from "./entity/Post";

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

    // Users
    app.get('/user/all', async (req, res) => {
        const repo = new UserRepository();
        const result = await repo.all()

        if (result) {
            res.status(200).json(result)
        }

        res.end()
    })

    // Posts
    app.get('/post/all', async (req, res) => {
        const repo = new PostRepository();
        const result = await repo.all()

        if (result) {
            res.status(200).json(result)
        }

        res.end()
    })

    app.post('/post/save', async (req, res) => {
        const title = req.body.title
        const content = req.body.content
        const date = req.body.date

        const newPost = new Post()
        newPost.title = title;
        newPost.content = content;
        newPost.date = date;

        const repo = new PostRepository();
        const result = await repo.save(newPost)

        if (result) {
            res.status(200).json(result)
        }

        res.end()
    })

    app.delete('post/delete/:id', async (req, res) => {
        const id = req.params.id
        const repo = new PostRepository();

        try {
            await repo.remove(id)
            res.status(204)
        } catch (e) {
            res.status(500)
        }

        res.end()
    })


    const port = 3008
    app.listen(port)
    console.log('Server listening on port ' + port + '...')

}).catch(error => console.log(error));


