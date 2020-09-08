import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        padding: 10,
        margin: 20,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        display: 'flex',
    },
    img: {
        padding: 10,
    }
});
const Comments = (props) => {
    const classes = useStyles();
    const { id, body, email } = props.comment;
    const { url } = props.img;
    return (
        <Card className={classes.root}>
            <div className={classes.img}>
                <Avatar alt="Remy Sharp" src={url} />
            </div>
            <div>

                <Typography variant="body2" component="p">
                    <p> {body}</p>
                    <p>Email: {email}</p>
                </Typography>
            </div>
        </Card >
    );
};

export default Comments;