import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import {
    Card,
    TextField,
    IconButton,
    Icon,
    Tooltip,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import './App.css';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const ActionView = ({ row, getUserDetails }) => {
    const navigate = useNavigate();
    var data = {}
    if (row != null) {
        data = row
    }
    const handleDeleteData = async (data) => {
        try {

            const jwtToken=window.localStorage.getItem('jwtToken')
           
            const config = {
                headers:{
                    'Authorization': `Bearer ${jwtToken}`,
                  },
              };
            const response = await axios.delete('http://localhost:5000/delete',{ ...config, data: { id: data.id } });

            if (response.data && response.data.message) {
                toast.success(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 500,
                })

                getUserDetails();
            } else {
                console.log('Error deleting data:', response.error);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
    const handleEditData = (data) => {
        navigate('/ContactForm', { state: { data: data } })
    }
    return (
        <div className='action-colomn'>
            <IconButton onClick={() => handleEditData(data)} size="small">
                <Tooltip title="Edit">
                    <EditIcon color='primary' />
                </Tooltip>
            </IconButton>

            <IconButton onClick={() => handleDeleteData(data)} size="small">
                <Tooltip title="Delete">
                    <DeleteIcon color='warning' />
                </Tooltip>
            </IconButton>
        </div>

    )
}
const ContactDetails = () => {
    const [data, setData] = useState([])
   
    const navigate=useNavigate()

    useEffect(()=>{
        const jwtToken=window.localStorage.getItem('jwtToken')
        if(jwtToken===null){
            navigate("/")
        }
    },[])

    useEffect(() => {
        getUserDetails()
    }, [])


    const getUserDetails = async () => {
        const jwtToken=window.localStorage.getItem('jwtToken')
            const config = {
                headers:{
                    'Authorization': `Bearer ${jwtToken}`,
                  },
              };
        const response = await axios.get('http://localhost:5000/details',config)
        var modifiedSno = response.data.map((o, i) => ({
            ...o,
            sno: i + 1,
        }))

        setData(modifiedSno)
    }


   

 
    const columns = [
        {
            name: 'SNo',
            selector: (row) => row.sno,
            sortable: true,
            width: '75px'
        },
        {
            name: 'First Name',
            selector: row => row.firstName,
            sortable: true,

        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
            sortable: true,

        },
       
        {
            name: 'Contact',
            selector: row => row.contact,
            sortable: true,

        },
        {
            name: 'Order Count',
            selector: row => row.orderCount,
            sortable: true,

        },
        
        {
            name: 'Message',
            selector: row => (
                <Tooltip title={row.message}>
                    {row.message.length > 25 ? `${row.message.slice(0, 20)}...` : row.message}
                </Tooltip>
            ),
            sortable: true,
        },

       
        {
            name: 'Created Date',
            selector: row => <Tooltip title={row.createdDate}>{row.createdDate}</Tooltip>,
            sortable: true,

        },
       
        {
            name: 'Action',
            selector: (row) => <ActionView row={row} getUserDetails={getUserDetails} />,

            width: '100px',
        },
    ];
    return (
        <>
            <ToastContainer />
            <Card className='card-container'>
                <div className='card-header'>
                    <p className='card-heading'>Customer Details</p>

                </div>

                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    striped
                    highlightOnHover
                    pointerOnHover
                    //   noDataComponent="There are no records to display"
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 10, 20, 50, 75, 100]}
                    customStyles={customStyles}
                />
               
            </Card>
           
        </>
    );
}

const customStyles = {
    subHeader: {
        style: {
            backgroundColor: 'blue',
        },
    },
    head: {
        style: {
            color: 'black',
            fontSize: '11px',
            fontWeight: 500,
            minHeight: '2px',
        },
    },
    headRow: {
        style: {
            backgroundColor: '#ADC8E3',
            minHeight: '30px',
            borderBottomWidth: '1px',
            borderBottomColor: '#ffffff',
            borderBottomStyle: 'solid',
        },
    },

    rows: {
        style: {
            fontSize: '11px',
            minHeight: '30px',
        },
    },
}
export default ContactDetails;