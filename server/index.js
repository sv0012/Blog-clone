import express, { Router } from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/route.js';

const app = express();


app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',router)

const PORT = 8000;
app.listen(PORT,()=>console.log(`Server running successfully on PORT ${PORT}`));

Connection();