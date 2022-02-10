import express, { Router } from 'express';
import { getImage, uploadImage } from '../controller/image-controller.js';
import { createPost, deletePost, getAllPosts, getPost, updatePost } from '../controller/post-controller.js';

import upload from '../utils/upload.js';


const router = express.Router();

router.post('/create', createPost);
router.get('/posts',getAllPosts);
router.get('/post/:id',getPost);
router.post('/update/:id', updatePost);
router.delete('/delete/:id',deletePost);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);


export default router