import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'
import LoggedInUserContext from '../context/loggedInUser';


 

const useStyle = makeStyles({
    component: {
        background: '#FFFFFF',
        color: 'black'
    },
    container: {
        justifyContent: 'center',
        '&  >*': {
            padding: 20,
            color: 'black',
            textDecoration: 'none'
        }
    },
    link: {
        textDecoration:'none',
        color:'inherit'

    },
    btn: {
        fontSize: 16

    }
})


const Header = () => {
    const classes = useStyle();
    const history = useHistory();
    const {setUser} = useContext(LoggedInUserContext);


    const handleLogout = () => {
        localStorage.removeItem("userInfo");
        setUser();
        history.push('/');
    }
    


    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Link className={classes.link} to='/'>
                    <Typography>HOME</Typography>
                </Link>
                <Button className={classes.btn}onClick={handleLogout} >LOGOUT</Button>

            </Toolbar>
        </AppBar>
    )
}

export default Header;