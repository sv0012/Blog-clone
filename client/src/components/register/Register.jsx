import React, { useContext } from 'react';
import { Grid, Paper, Avatar, Button, Typography, Input } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useState } from 'react';
import { registerUser } from '../../service/api';
import { Link, useHistory } from 'react-router-dom';
import LoggedInUserContext from '../../context/loggedInUser';


const Register = () => {

    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const { setUser } = useContext(LoggedInUserContext);
    const history = useHistory();


    const paperStyle = { padding: 20, height: 480, width: 280, margin: "75px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnStyle = { margin: '30px 0' }
    const inputStyle = { margin: '10px 0' }
    const linkStyle = { textDecoration: 'none', color: '#3f51b5' }

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
        } else {
            setMessage('');
            const { data } = await registerUser(username, email, password);
            setUser(data);
            localStorage.setItem('userInfo', JSON.stringify(data));
            history.push('/');
        }

    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                {
                    message &&
                    <>
                        <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            {message}
                        </Alert>
                       
                    </>
                }
                <Input onChange={(e) => setUsername(e.target.value)} style={inputStyle} name='email' placeholder='Enter username' type='email' fullWidth required />

                <Input onChange={(e) => setEmail(e.target.value)} style={inputStyle} name='email' placeholder='Enter email' type='email' fullWidth required />
                <Input onChange={(e) => setPassword(e.target.value)} style={inputStyle} name='password' placeholder='Enter password' type='password' fullWidth required />
                <Input onChange={(e) => setConfirmPassword(e.target.value)} style={inputStyle} name='password' placeholder='Confirm password' type='password' fullWidth required />
                <Button onClick={handleRegister} color='primary' variant="contained" style={btnStyle} fullWidth>Sign Up</Button>

                <Typography > Already have an account ?&nbsp;
                    <Link style={linkStyle} to='/login' >
                        Sign In
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Register