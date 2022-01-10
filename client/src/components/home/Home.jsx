import { Grid } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'
import { LoginContext } from '../../context/ContextProvider'
import Banner from './Banner'
import Categories from './Categories'
import Posts from './Posts'

const Home = () => {
  const { account,setAccount } = useContext(LoginContext);

  const localStorage = window.localStorage.getItem("okta-token-storage");
  useEffect(() => {
    let email = localStorage && JSON.parse(localStorage).idToken.claims.email;
    email = email && email.split('@')[0];
    setAccount(email);
}, [])
console.log(account)
  
    return (
      <>
      <Banner />
      <Grid container style={{display: 'flex'}}>
        <Grid item lg={2} xs={12} sm={2} >
        <Categories />
        </Grid>
        <Grid container item lg={10} xs={12} sm={10} >
        <Posts />
        </Grid>
     
      
      </Grid>
  

      </>
    )
}

export default Home
