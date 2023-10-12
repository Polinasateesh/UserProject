import {
    Card,
    Grid,
    CircularProgress,
    InputAdornment,
    TextField,
} from '@mui/material'


import Button from '@material-ui/core/Button';

import React, { useEffect, useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { Box, styled } from '@mui/system'
import { ValidatorForm } from 'react-material-ui-form-validator'

import img from './assets/pngwing.com.png'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import EmailIcon from '@mui/icons-material/Email'
import LockIcon from '@mui/icons-material/Lock'
import moment from 'moment'
import axios from 'axios'

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))

const JustifyBox = styled(FlexBox)(() => ({
    justifyContent: 'center',
}))

const ContentBox = styled(Box)(() => ({
    height: '100%',
    padding: '32px',
    position: 'relative',
    background: 'rgba(0, 0, 0, 0.01)',
}))

const IMG = styled('img')(() => ({
    width: '100%',
    height: '90%'
}))

const JWTRoot = styled(JustifyBox)(() => ({
    background: '#1A2038',
    minHeight: '100% !important',
  
    '& .card': {
        maxWidth: 800,
        borderRadius: 12,
        margin: '7rem',

    },
}))

const defaultValues = {
    email: '',
    password: '',
    lastLoginDate:null,
    showPassword: false,
   
}
const Login = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const [userInfo, setUserInfo] = useState(defaultValues)

    useEffect(()=>{
        const jwtToken=window.localStorage.getItem('jwtToken')
        if(jwtToken){
            navigate("/ContactForm")
        }

    },[])
    
    const handleChange = (event) => {
        const date = moment().format('DD-MM-YYYY')
        setUserInfo({...userInfo,[event.target.name]:event.target.value ,lastLoginDate:date})
        
    }
    const handleClickShowPassword = () => {
        setUserInfo({ ...userInfo, showPassword: !userInfo.showPassword })
    }
   

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const response = await axios.post('http://localhost:5000/login',userInfo)
        if (response.data && response.data.message &&response.data.jwtToken) {

            window.localStorage.setItem('jwtToken',response.data.jwtToken)
            window.location.reload();

            // Showing success toast 
            toast.success(response.data.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 600,
                onClose: () => {
                    setTimeout(() => {
                        setLoading(false);
                        setUserInfo(defaultValues);
                        navigate('/ContactForm');
                    }, 1000);
                }
            });
        } else {
            // Showing error toast
            toast.error(response.error, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 600,
                onClose: () => {
                    setLoading(false);
                }
            });
        }
    }
   
    return (
        <>
           <ToastContainer />
        <JWTRoot>
                <Card className="card">
                    <Grid container>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <JustifyBox p={4} >
                                <IMG
                                    src={img}
                                    alt="logo"
                                />
                            </JustifyBox>
                        </Grid>
                        <Grid item lg={7} md={7} sm={7} xs={12}>
                            <ContentBox>
                                <ValidatorForm onSubmit={handleFormSubmit}>
                                    <TextField
                                        autoComplete="new-password"
                                        sx={{ mb: 3, width: '100%' }}
                                        variant="outlined"
                                        size="small"
                                        label="Email"
                                        onChange={handleChange}
                                        type="email"
                                        name="email"
                                        required
                                        value={userInfo.email}
                                        validators={['required', 'isEmail']}
                                        errormessages={[
                                            'this field is required',
                                            'email is not valid',
                                        ]}
                                        InputProps={{
                                            startAdornment: (
                                                <EmailIcon
                                                    style={{
                                                        color: 'gray',
                                                        marginLeft: '-10px',
                                                        position: 'relative',
                                                        padding: '2px',
                                                    }}
                                                />
                                            ),
                                        }}
                                    />
                                    <TextField
                                        autoComplete="new-password"
                                        sx={{ mb: '12px', width: '100%' }}
                                        label="Password"
                                        id="Password"
                                        variant="outlined"
                                        size="small"
                                        onChange={handleChange}
                                        required
                                        name="password"
                                        type={
                                            userInfo.showPassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        value={userInfo.password}
                                        validators={['required']}
                                        errormessages={[
                                            'this field is required',
                                        ]}
                                        InputProps={{
                                            startAdornment: (
                                                <LockIcon
                                                    style={{
                                                        color: 'gray',
                                                        marginLeft: '-10px',
                                                        position: 'relative',
                                                        padding: '2px',
                                                    }}
                                                />
                                            ),
                                            endAdornment: (
                                                <InputAdornment
                                                    position="end"
                                                    style={{
                                                        position: 'absolute',
                                                        right: 0,
                                                    }}
                                                >
                                                    {' '}
                                                    <IconButton
                                                        onClick={
                                                            handleClickShowPassword
                                                        }
                                                       
                                                    >
                                                        {' '}
                                                        {userInfo.showPassword ? (
                                                            <Visibility />
                                                        ) : (
                                                            <VisibilityOff />
                                                        )}
                                                    </IconButton>{' '}
                                                </InputAdornment>
                                            ),
                                        }}

                                    />{' '}


                                    <Box py={'10px'} />

                                    <Button
                                        variant='contained'
                                        color='primary'
                                        type='submit'
                                        disabled={loading}

                                        style={{ marginLeft: '15px' }}
                                    >
                                        {loading ? <CircularProgress size={24} /> : 'Login'}
                                    </Button>

                                </ValidatorForm>
                            </ContentBox>
                        </Grid>
                    </Grid>
                </Card>
        </JWTRoot>
        </>
        
    )
}

export default Login
