const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const port = 5000;

// Middleware
app.use(express.json()); 
app.use(cors()); 

// Create a connection to  database
const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'client'
});

// Checking database conntection
DB.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});


// API to retrieve users from the database
app.get('/getUsers', (request, response) => {
  try {
    const getQuery = `SELECT * FROM user`;
    DB.query(getQuery, (err, results) => {
      if (err) {
       
        response.status(500).json({ error: 'Failed to retrieve users' });
      } else {
     
        response.json(results);
      }
    });
  } catch (error) {
   
    response.status(500).json({ error: 'Internal server error' });
  }
});

// API to create a new user in the database
app.post('/createUser', (request, response) => {
  try {
    const { firstName, lastName, email, contact, message } = request.body;
    const postQuery = `INSERT INTO user (firstName, lastName, email, contact, message) VALUES ('${firstName}','${lastName}','${email}','${contact}','${message}')`;

    DB.query(postQuery, [firstName, lastName, email, contact, message], (err, results) => {
      if (err) {
       
        response.status(500).json({ error: 'Failed to create user' });
      } else {
        
        response.json({ message: 'User created successfully' });
      }
    });
  } catch (error) {
    
    response.status(500).json({ error: 'Internal server error' });
  }
});

// API to delete a user from the database
app.delete('/deleteUserData', (request, response) => {
  try {
    const { id } = request.body;
    const deleteQuery = `DELETE FROM user WHERE id=${id}`;
    DB.query(deleteQuery, (err, results) => {
      if (err) {
        response.status(500).json({ error: 'Failed to delete user' });
      } else {
        response.json({ message: 'User deleted successfully' });
      }
    });
  } catch (error) {
    response.status(500).json({ error: 'Internal server error' });
  }
});

// API to update user information in the database
app.put('/updateUser', (request, response) => {
  try {
    const { id, firstName, lastName, message, contact, email } = request.body;
    const updateQuery = `
      UPDATE user
      SET
        firstName = '${firstName}',
        lastName = '${lastName}',
        contact = '${contact}',
        message = '${message}',
        email = '${email}'
      WHERE
        id = ${id}
    `;
    DB.query(updateQuery, (error, result) => {
      if (error) {
        response.status(500).json({ error: 'Failed to update user' });
      } else {
        response.json({message: 'User updated successfully'});
      }
    });
  } catch (error) {
    response.status(500).json({ error: 'Internal server error' });
  }
});
app.listen(port, () => {
        console.log(`The App is Running at ${port}`);
      });
