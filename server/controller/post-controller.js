import Post from "../schema/post-schema.js";

export const createPost = async (request, response) => {
    try {
        const post = await new Post(request.body);
        post.save();
        response.status(200).json('Blog saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getAllPosts = async (request, response) => {
    
    let category = request.query.category;
    let posts;
    try {
         if (category) 
            posts = await Post.find({ categories: category });
        else 
            posts = await Post.find({});

            
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getPost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error)
    }
}


export const updatePost = async (request, response) => {
    try {
        
        const post = request.body.post;
        const user = request.body.user;
       
        if(post.authorId === user._id){
           
            await Post.findByIdAndUpdate( request.params.id, { $set: post })
    
            response.status(200).json('blog updated successfully');

        }else{
            response.status(403).json('You are not authorized to edit this post')
        }
      
    } catch (error) {
        response.status(500).json(error);
    }
}

export const deletePost = async (request, response) => {
    try {
        
        const post = await Post.findById(request.params.id);
        
        await post.delete()

        response.status(200).json('post deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}