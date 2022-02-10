import React, { useEffect, useState, useContext } from 'react';
import { makeStyles, Box, FormControl, InputBase, Button, TextareaAutosize } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { createPost, uploadFile } from '../../service/api';
import { useHistory, useLocation } from 'react-router-dom';
import { LoginContext } from '../../context/ContextProvider';



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
    addIcon: {
        cursor: 'pointer'
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
    username: '',
    categories: '',
    createdDate: new Date()
}

const CreateView = () => {
    const [post, setPost] = useState(initialValue);
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
    const history = useHistory();
    const location = useLocation();
    const { account, setAccount } = useContext(LoginContext);

    useEffect(() => {
        const getImage = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const image = await uploadFile(data);
                post.picture = image.data;
                setImage('');
            }
        }
        getImage();
        post.categories = location.search?.split('=')[1] || 'All'
        post.username = account;
    }, [file])

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const savePost = async () => {
        await createPost(post);
        history.push('/');
    }

    const classes = useStyle();
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    return (
        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image} />
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
                <InputBase
                    onChange={(e) => handleChange(e)}
                    name='title'
                    placeholder='Title'
                    className={classes.textfield} />
                <Button onClick={() => savePost()} variant='contained' color='primary'>Publish</Button>
            </FormControl>
            <TextareaAutosize minRows={5}
                placeholder='Tell your story...'
                className={classes.textarea}
                name='description'
                onChange={(e) => handleChange(e)}
            />
        </Box>
    )
}

export default CreateView