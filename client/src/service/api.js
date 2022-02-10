import axios from 'axios';

const url = 'http://localhost:8000';

export const createPost = async (post) => {
    try {
        return await axios.post(`${url}/create`, post);
    } catch (error) {
        console.log('Error while calling createPost API ', error);
    }
}


export const getAllPosts = async (param) => {
    try {
        let response = await axios.get(`${url}/posts${param}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getPosts API ', error)
    }
}

export const getPost = async (id) => {
    try {
        let response = await axios.get(`${url}/post/${id}`);
        return response.data;
      
    } catch (error) {
        console.log('Error while calling getPost API ', error);
    }
}

export const updatePost = async (id, post) => {
    try {
        return await axios.post(`${url}/update/${id}`, post);
        
    } catch(error) {
        console.log('Error while calling updatePost API ', error)
    }
}

export const deletePost = async (id) => {
    try {
        return await axios.delete(`${url}/delete/${id}`);
    } catch(error) {
        console.log('Error while calling deletePost API ', error)
    }
}


export const uploadFile = async (post) => {
    
    try {
        return await axios.post(`${url}/file/upload`, post);
    } catch (error) {
        console.log('Error while calling uploadFile API ', error);
    }
}




