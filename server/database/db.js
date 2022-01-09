import mongoose from 'mongoose';

const Connection = async () => {
    try {
    const URL = 'mongodb://user:codersailesh@blogweb-shard-00-00.sptqb.mongodb.net:27017,blogweb-shard-00-01.sptqb.mongodb.net:27017,blogweb-shard-00-02.sptqb.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-honu9g-shard-0&authSource=admin&retryWrites=true&w=majority';
               
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true,useFindAndModify: false })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }

}

export default Connection;