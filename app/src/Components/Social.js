import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#1c1c1c',
        color: 'white',
        borderRadius: '8px',
        minHeight: '80vh',
        minWidth: '10vw',
        marginRight: theme.spacing(2),
    },
}));

const Social = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <p> Weeeee </p>
        </Card>
    )
}

export default Social