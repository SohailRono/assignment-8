import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        background: 'linear-gradient(45deg, #60bc63 10%, #5653ff 90%)',
        color: 'white',
        padding:10,
        margin: 10,
        borderRadius:5,
    },
    title: {
        fontSize: 14,
        
    }
});
const PostDetail = () => {
    const { postId } = useParams();
    const classes = useStyles();

    const [singlePost,setsinglePost] = useState({});
    const [comments,setComments] = useState([]);
    const [img,setImg] = useState({});

    useEffect(() => {
        //single post
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setsinglePost(data))

        //comments
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))

        //single post
        fetch(`https://jsonplaceholder.typicode.com/photos/${postId}`)
        .then(res => res.json())
        .then(data => setImg(data))

    },[postId])

    return (
        <Card >
        <CardContent className={classes.root}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            <h5>Post ID: {singlePost.id}</h5>
                <h3>Title: {singlePost.title}</h3>
            </Typography>
            <Typography variant="body2" component="p">
                <p>{singlePost.body}</p>
            </Typography>
        </CardContent>
        {/* <CardActions> */}
        {
            comments.map(comment => <Comments comment={comment} img={img}></Comments>)
        }
        {/* </CardActions> */}
    </Card>
    );
};

export default PostDetail;