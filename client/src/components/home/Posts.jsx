import { Grid } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LoggedInUserContext from '../../context/loggedInUser'
import { getAllPosts } from '../../service/api'
import Post from './Post'

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const {user} = useContext(LoggedInUserContext);
  
    useEffect(() => {
        const fetchData = async () => { 
            let data = await getAllPosts(search,user); // params in url
            setPosts(data);
        }
        fetchData();
    }, [search]);
    return (

        posts.map(post => (
            <Grid item lg={3} sm={4} xs={12} >
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/details/${post._id}`}>
                    <Post post={post}/>
                </Link>
            </Grid>

        ))





    )
}

export default Posts
