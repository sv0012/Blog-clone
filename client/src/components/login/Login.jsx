import React, { useContext } from 'react'
import { Grid, Paper, Avatar, Button, Typography, Input } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useState } from 'react';
import { loginUser } from '../../service/api';
import LoggedInUserContext from '../../context/loggedInUser';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {


    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const { setUser } = useContext(LoggedInUserContext);
    const history = useHistory();

    const handleLogin = async () => {
        const { data } = await loginUser(email, password);
        localStorage.setItem('userInfo', JSON.stringify(data))
        setUser(data);
        history.push('/')
    }
    const paperStyle = { padding: 20, height: 480, width: 280, margin: "75px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnStyle = { margin: '30px 0' }
    const inputStyle = { margin: '10px 0' }
    const linkStyle = { textDecoration:'none', color:'#3f51b5' }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>

                <Input onChange={(e) => setEmail(e.target.value)} style={inputStyle} name='email' placeholder='Enter email' type='email' fullWidth required />
                <Input onChange={(e) => setPassword(e.target.value)} style={inputStyle} name='password' placeholder='Enter password' type='password' fullWidth required />
                <Button onClick={handleLogin} color='primary' variant="contained" style={btnStyle} fullWidth>Sign In</Button>

                <Typography > Do you have an account ?&nbsp;
                    <Link style={linkStyle} to='/register'>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login