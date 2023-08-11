import React, { useState } from 'react';

import { Card, DialogActions, DialogContent, DialogTitle, Dialog, Button, TextField, Grid } from '@mui/material';
import DataTable from 'react-data-table-component';

const defaultValues = {
  firstName: '',
  lastName: '',
  contact: '',
  email: '',
  message: '',
}
const App = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValues)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setValue(defaultValues)
  };
  const handleChange = (event) => {
    let inputName = event.target.name
    let inputValue = event.target.value
    setValue({ ...value, [inputName]: inputValue })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = {
      firstName: value.firstName,
      lastName: value.lastName,
      contact: value.contact,
      email: value.email,
      message: value.message

    }
    console.log('formData', formData)
    setValue(defaultValues)
    setOpen(false)

  }
  const columns = [
    {
      name: 'firstName',
      selector: row => row.firstName,
      sortable: true,

    },
    {
      name: 'lastName',
      selector: row => row.lastName,
      sortable: true,

    },
    {
      name: 'contact',
      selector: row => row.contact,
      sortable: true,

    },
    {
      name: 'email',
      selector: row => row.email,
      sortable: true,

    },
    {
      name: 'message',
      selector: row => row.message,
      sortable: true,
    },
  ];
  return (
    <>
    <div className='header'>
     <TextField
          autoFocus
          // margin="dense"
          name="lastName"
          label="search"
          type="text"
          // value={value.lastName}
          // onChange={handleChange}
          variant="outlined"
        />
        <Button variant="contained" onClick={handleClickOpen}>
          + Add Form
        </Button>
        </div>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Contact Form</DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    name="firstName"
                    label="First Name"
                    type="text"
                    value={value.firstName}
                    onChange={handleChange}
                    fullWidth
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    name="lastName"
                    label="Last Name"
                    type="text"
                    value={value.lastName}
                    onChange={handleChange}
                    fullWidth
                    required
                    variant="outlined"
                  />

                </Grid>
                <Grid item xs={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    name="contact"
                    label="Contact Number"
                    type="number"
                    required
                    value={value.contact}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                  />

                </Grid>
                <Grid item xs={6}>

                  <TextField
                    autoFocus
                    margin="dense"
                    name="email"
                    required
                    label="Email Address"
                    type="email"
                    value={value.email}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    autoFocus
                    margin="dense"
                    name="message"
                    label="Message"
                    type="text"
                    required
                    value={value.message}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button variant='contained' color='warning' onClick={handleClose}>Cancel</Button>
              <Button variant='contained' color='primary' type='submit'>Submit</Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
      <Card>
        <DataTable
          columns={columns}
          // data={stockData}
          pagination
          striped
          highlightOnHover
          pointerOnHover
          // noDataComponent="There are no records to display"
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 20, 50, 75, 100]}
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
export default App;