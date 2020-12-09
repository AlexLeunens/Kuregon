import React from 'react'
import PostContainer from './PostContainer'
import Grid from '@material-ui/core/Grid'
import Social from './Social'

const Workout = () => {
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            wrap="nowrap"
        >
            <PostContainer />
            <Social />
        </Grid>
    )
}

export default Workout