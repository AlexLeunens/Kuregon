import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#1c1c1c',
        color: 'white',
        borderRadius: '8px'
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    button: {
        color: 'white',
    },
}));

const Post = (props) => {
    const classes = useStyles();
    const date = props.post.date.split('T')[0]

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>

                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                >

                    <Typography className={classes.title} variant="h3">
                        {props.post.title}
                    </Typography>

                    <Typography variant="h5">
                        {date}
                    </Typography>
                </Grid>

                <Typography className={classes.body} variant="body1">
                    {props.post.content}
                </Typography>

            </CardContent>

            <CardActions>
                <Button className={classes.button} size="small">i'm a heckin button</Button>
            </CardActions>
        </Card>

    )

}


Post.propTypes = {
    post: PropTypes.object.isRequired,
};


export default Post