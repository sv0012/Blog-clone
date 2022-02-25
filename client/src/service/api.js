import axios from 'axios';

const url = 'http://localhost:8000';


export const createPost = async (post,user) => {
    try {
        const config = {
            headers: {
              Authorization: `Bearer ${user.token} `,
            },
          };
        return await axios.post(`${url}/create`, post,config);
    } catch (error) {
        console.log('Error while calling createPost API ', error);
    }
}


export const getAllPosts = async (param,user) => {
    try {
        
        const config = {
            headers: {
              Authorization: `Bearer ${user.token} `,
            },
          };
        let response = await axios.get(`${url}/posts${param}`,config);
        return response.data;
    } catch (error) {
        console.log('Error while calling getPosts API ', error)
    }
}

export const getPost = async (id,user) => {
    try {
        const config = {
            headers: {
              Authorization: `Bearer ${user.token} `,
            },
          };
        let response = await axios.get(`${url}/post/${id}`,config);
        return response.data;
      
    } catch (error) {
        console.log('Error while calling getPost API ', error);
    }
}

export const updatePost = async (id, post,user) => {
    try {
        const config = {
            headers: {
              Authorization: `Bearer ${user.token} `,
            },
          };
        return await axios.post(`${url}/update/${id}`, {post,user},config);
        
    } catch(error) {
        console.log('Error while calling updatePost API ', error)
    }
}

export const deletePost = async (id,user) => {
    try {
        const config = {
            headers: {
              Authorization: `Bearer ${user.token} `,
            },
          };
        return await axios.delete(`${url}/delete/${id}`,config);
    } catch(error) {
        console.log('Error while calling deletePost API ', error)
    }
}


export const uploadFile = async (post,user) => {
    
    try {
        return await axios.post(`${url}/file/upload`, post,);
    } catch (error) {
        console.log('Error while calling uploadFile API ', error);
    }
}

export const loginUser = async (email,password) => {
    try {
        const config = {
            headers: {
              "Content-type": "application/json",
            },
          };

        return await axios.post(`${url}/login`,{
            email,password
        },config);


    } catch (error) {
        console.log('Error while calling login API ', error);
    }
}

export const registerUser = async (name,email,password) => {
    try {
        const config = {
            headers: {
              "Content-type": "application/json",
            },
          };

        return await axios.post(`${url}/register`,{
            name,email,password
        },config);

        
    } catch (error) {
        console.log('Error while calling register API ', error);
    }
}
