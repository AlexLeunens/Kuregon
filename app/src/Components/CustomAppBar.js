import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#1c1c1c',
        marginBottom: '2vh',
    },

    title: {
        marginRight: theme.spacing(8),
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    link: {
        flexGrow: 1,
        color: 'white',
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
            textDecoration: 'none',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const CustomAppBar = (props) => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root} >
            <Toolbar>

                <Typography className={classes.title} variant="h6" noWrap>
                    Kuregon's Cabin
                </Typography>

                {props.categories.map(category =>
                    <Link className={classes.link} to={category.link} key={category.name}>
                        <Typography className={classes.linkText} variant="h6" noWrap>
                            {category.name}
                        </Typography>
                    </Link>
                )}

                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>

            </Toolbar>
        </AppBar>
    )
}

CustomAppBar.propTypes = {
    categories: PropTypes.array.isRequired,
};

export default CustomAppBar
