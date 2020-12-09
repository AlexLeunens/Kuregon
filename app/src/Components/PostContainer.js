import React from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Post from './Post'
import { makeStyles } from '@material-ui/core/styles'

const callApi = async (setPosts) => {
    try {
        const result = await axios.get(`http://localhost:3008/post/all`)
        setPosts(result.data)
    } catch (e) {
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '80vw',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

const PostContainer = () => {
    const [posts, setPosts] = React.useState([])
    const classes = useStyles();

    React.useEffect(() => {
        callApi(setPosts)
    }, [])

    return (
        <Grid
            container
            className={classes.root}
            direction="column"
            justify="center"
            alignItems="center"
        >
            {posts.map(post =>
                <Post post={post} key={post.title}></Post>
            )}
        </Grid>
    )
}

export default PostContainer