import React, { useEffect, useState } from 'react';
import { Card, Button, TextField, Grid, CircularProgress, InputAdornment } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import SendIcon from '@mui/icons-material/Send'
import CloseIcon from '@mui/icons-material/Close'
import moment from 'moment'

const defaultValues = {
    firstName: '',
    lastName: '',
    contact: '',
    orderCount: '',
    message: '',

};

const ContactForm = () => {
    const [value, setValue] = useState(defaultValues);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null)
    const navigate = useNavigate();
    const location = useLocation()
    const isEditMode = location.state && location.state.data;


    useEffect(() => {
        const jwtToken = window.localStorage.getItem('jwtToken')
        if (jwtToken === null) {
            navigate("/")
        }
    }, [])

    // setting form values based on edit mode or not
    useEffect(() => {
        if (isEditMode) {
            setValue(location.state.data);
        } else {
            setValue(defaultValues);
        }
    }, [isEditMode, location.state]);

    const handleClose = () => {
        if (isEditMode) {
            navigate('/ContactDetails')
            setValue(defaultValues)
        } else {
            setValue(defaultValues)
        }
        ;
    };
    // Handle input on change
    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        setValue({ ...value, [inputName]: inputValue });
        
    };

    // Handle form submission
    const handleSubmit = async (event) => {

        event.preventDefault();
        setIsLoading(true);
        const date = moment().format('DD-MM-YYYY')

        

        try {
            const jwtToken = window.localStorage.getItem('jwtToken')

            const config = {
                headers: {
                    'Authorization': `Bearer ${jwtToken}`,
                },
            };

           

            let response;
            if (isEditMode) {
                const newValues1 = {
                    id:location.state.data.id,
                    firstName: value.firstName,
                    lastName: value.lastName,
                    contact: value.contact,
                    orderCount: value.orderCount,
                    message: value.message,
                
                }
                response = await axios.put('http://localhost:5000/update', newValues1,config);
            } else {
                const newValues = {
               
                    firstName: value.firstName,
                    lastName: value.lastName,
                    contact: value.contact,
                    orderCount: value.orderCount,
                    message: value.message,
                    createdDate: date
        
                }
                response = await axios.post('http://localhost:5000/insert',newValues ,config );
            }
            if (response.data && response.data.message) {
                // Showing success toast 
                toast.success(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 600,
                    onClose: () => {
                        setTimeout(() => {
                            setIsLoading(false);
                            setValue(defaultValues);
                            navigate('/ContactDetails');
                        }, 1500);
                    }
                });
            } else {
                // Showing error toast
                toast.error(response.error, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 600,
                    onClose: () => {
                        setIsLoading(false);
                    }
                });
            }
        } catch (error) {
            // Showing error toast
            toast.error('An error occurred', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 500,
                onClose: () => {
                    setIsLoading(false);
                }
            });
        }
    };

    return (
        <>
            <ToastContainer />
            <Card className='card-container'>
                <p className='card-heading'>Customer Form</p>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                                type='tel'
                                required
                                size="small"
                                value={value.contact}
                                onChange={handleChange}
                                fullWidth
                                variant='outlined'
                                inputProps={{
                                    maxLength: 10,
                                }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                                }}
                            />

                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                name='orderCount'
                                label='Order Count'
                                type='number'
                                required
                                size="small"
                                value={value.orderCount}
                                onChange={handleChange}
                                fullWidth
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
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
                        <Button variant='outlined' color='warning' onClick={handleClose} startIcon={
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
