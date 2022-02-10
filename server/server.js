import express, { Router } from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/route.js';
import DotEnv from 'dotenv'

const app = express();
DotEnv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',router)


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>console.log(`Server running successfully on PORT ${PORT}`));

const URL = 'mongodb://user:codersailesh@blogweb-shard-00-00.sptqb.mongodb.net:27017,blogweb-shard-00-01.sptqb.mongodb.net:27017,blogweb-shard-00-02.sptqb.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-honu9g-shard-0&authSource=admin&retryWrites=true&w=majority';

Connection(process.env.MONGODB_URI || URL);