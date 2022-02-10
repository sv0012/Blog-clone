import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    categories: {
        type: String,
        required: false   
    },
    createdDate: {
        type: Date
    }
});


const Post = mongoose.model('post', PostSchema);

export default Post;