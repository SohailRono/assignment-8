import React from 'react';
import { Card, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        textAlign: 'center',
        padding: 10,
    },
    link: {
        textDecoration: 'none',
    }
});
const Header = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <h1>Social Buddy</h1>
            <Link className={classes.link} to="/home">
                <Button variant="contained" color="secondary">Home</Button>
            </Link>
        </Card>
    );
};

export default Header;