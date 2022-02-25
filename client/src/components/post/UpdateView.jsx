import React, { useState, useEffect, useContext } from 'react';
import { makeStyles, Box, FormControl, InputBase, Button, TextareaAutosize } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { getPost, updatePost, uploadFile } from '../../service/api';
import { useHistory, useParams } from 'react-router-dom';
import LoggedInUserContext from '../../context/loggedInUser';

const useStyle = makeStyles(theme => ({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    form: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    textfield: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textarea: {
        width: '100%',
        border: 'none',
        marginTop: 50,
        fontSize: 18,
        resize: 'none',
        '&:focus-visible': {
            outline: 'none'
        }
    }
}));

const initialValue = {
    title: '',
    description: '',
    picture: '',
    categories: 'All',
    createdDate: new Date()
}

const UpdateView = ({ match }) => {
    const [post, setPost] = useState(initialValue);
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
    const history = useHistory();
    const {user} = useContext(LoggedInUserContext);

    let { id } = useParams();

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(id,user);
            setPost(data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const image = await uploadFile(data);
                post.picture = image.data;
                setImage(image.data);
            }
        }
        getImage();
        
    }, [file])

    const updateBlogPost = async () => {
        await updatePost(id, post,user);
        history.push(`/details/${id}`);
    }

    const classes = useStyle();
    const url = post.picture;
    return (
        <Box className={classes.container}>
            <img src={url}  className={classes.image} />
            <FormControl className={classes.form}>
                <label htmlFor="fileInput">
                    <AddCircle className={classes.addIcon} fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputBase onChange={(e) => handleChange(e)} name='title' placeholder='Title' value={post.title} className={classes.textfield} />
                <Button onClick={() => updateBlogPost()} variant='contained' color='primary'>Update</Button>
            </FormControl>
            <TextareaAutosize onChange={(e) => handleChange(e)} name='description' minRows={5} placeholder='Tell your story...' value={post.description} className={classes.textarea} />
        </Box>
    )
}

export default UpdateView