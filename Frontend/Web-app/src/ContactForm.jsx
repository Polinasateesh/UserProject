import React, { useState } from 'react';
import { Card, Button, TextField, Grid, CircularProgress } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate,useLocation } from 'react-router-dom';
import './App.css';
import SendIcon from '@mui/icons-material/Send'
import CloseIcon from '@mui/icons-material/Close'

const defaultValues = {
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    message: '',
};

const ContactForm = () => {
    const [value, setValue] = useState(defaultValues);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const location=useLocation()
    const isEditMode = location.state && location.state.data;
    useState(() => {
        if (isEditMode) {
            setValue(location.state.data);
        } else {
            setValue(defaultValues);
        }
    }, [isEditMode, location.state]);

    const handleClose = () => {
        setValue(defaultValues);
    };

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setValue({ ...value, [inputName]: inputValue });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            if (isEditMode) {
                const response = await axios.put('http://localhost:5000/updateUser', value);
                if (response.data && response.data.message) {
                    toast.success(response.data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 500,
                    });
                }
            } else {
                const response = await axios.post('http://localhost:5000/createUser', value);
                if (response.data && response.data.message) {
                    toast.success(response.data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 500,
                    });
                }
            }
        } catch (error) {
            console.log(error);
            toast.error('An error occurred', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 500,
            });
        }

        setIsLoading(false);
        setValue(defaultValues);
        navigate('/ContactDetails');
    };

    return (
        <>
            <Card className='card-container'>
                <p className='card-heading'>Contact Form</p>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name='firstName'
                                label='First Name'
                                type='text'
                                value={value.firstName}
                                onChange={handleChange}
                                fullWidth
                                required
                                size="small"
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name='lastName'
                                label='Last Name'
                                type='text'
                                size="small"
                                value={value.lastName}
                                onChange={handleChange}
                                fullWidth
                                required
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name='contact'
                                label='Contact Number'
                                type='number'
                                required
                                size="small"
                                value={value.contact}
                                onChange={handleChange}
                                fullWidth
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name='email'
                                required
                                label='Email Address'
                                type='email'
                                size="small"
                                value={value.email}
                                onChange={handleChange}
                                fullWidth
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name='message'
                                label='Message'
                                type='text'
                                // required
                                size="small"
                                value={value.message}
                                onChange={handleChange}
                                fullWidth
                                variant='outlined'
                                multiline
                                rows={4}
                            />
                        </Grid>
                    </Grid>
                    <div className='button-container'>
                        <Button variant='outlined' color='warning' onClick={handleClose}  startIcon={
                                    <CloseIcon style={{ fontSize: '16px' }} />
                                }>
                            Cancel
                        </Button>
                        <Button
                            variant='contained'
                            color='primary'
                            type='submit'
                            disabled={isLoading}
                            startIcon={
                                <SendIcon style={{ fontSize: '16px' }} />
                            }
                            style={{ marginLeft: '15px' }}
                        >
                            {isLoading ? <CircularProgress size={24} /> : isEditMode ? 'Update' : 'Submit'}
                        </Button>
                    </div>
                </form>
            </Card>
        </>
    );
};

export default ContactForm;
