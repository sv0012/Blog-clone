import express, { Router } from 'express';
import { getImage, uploadImage } from '../controller/image-controller.js';
import { createPost, deletePost, getAllPosts, getPost, updatePost } from '../controller/post-controller.js';
import { loginUser, registerUser } from '../controller/user-controller.js';
import { protect } from '../middlewares/authMiddleware.js';

import upload from '../utils/upload.js';


const router = express.Router();
//posts
router.route('/create').post(protect, createPost);
router.route('/posts').get(protect, getAllPosts);
router.route('/post/:id').get(protect,getPost);
router.route('/update/:id').post(protect, updatePost);
router.route('/delete/:id').delete(protect,deletePost);

//image upload

router.route('/file/upload').post(upload.single('file'), uploadImage);
router.route('/file/:filename').get(getImage);


//authentication
router.post('/register',registerUser)
router.post('/login',loginUser)


export default router