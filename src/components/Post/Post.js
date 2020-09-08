import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        padding:10,
        margin:10,
    },
    title: {
        fontSize: 16,
    },
    link: {
        textDecoration:'none',
    }
});

const Post = (props) => {
    const {title,body,id} = props.post;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <h3>Title: {title}</h3>
                </Typography>
                <Typography variant="body2" component="p">
                    <p>{body}</p>
                </Typography>
            </CardContent>
            <CardActions>
            <Link className={classes.link} to={`/post/${id}`}>
                <Button variant="contained" color="secondary">Details...</Button>
            </Link>
            </CardActions>
        </Card>
    );
};

export default Post;