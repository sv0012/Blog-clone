import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'


 

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

    }
})


const Header = () => {
    const classes = useStyle();

    


    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Link className={classes.link} to='/'>
                    <Typography>HOME</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header;