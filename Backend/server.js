const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const port = 5000;
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'client'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});

app.get('/getUsers', (request, response) => {
  try {
    const getQuery=`SELECT * FROM user`
    connection.query(getQuery, (err, results) => {
      if (err) {
        console.error('Error retrieving users:', err);
        response.status(500).json({ error: 'Failed to retrieve users' });
      } else {
        console.log(results);
        response.json(results);
      }
    });
  } catch (error) {
    console.error('An error occurred:', error);
    response.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/createUser', (request, response) => {
  try {
    const { firstName, lastName, email, contact, message } = request.body;
    const postQuery = `INSERT INTO user (firstName, lastName, email, contact, message) VALUES ('${firstName}','${lastName}','${email}','${contact}','${message}')`;

    connection.query(postQuery, [firstName, lastName, email, contact, message], (err, results) => {
      if (err) {
        console.error('Error creating user:', err);
        response.status(500).json({ error: 'Failed to create user' });
      } else {
        console.log(results);
        response.json({ message: 'Data created successfully' });
      }
    });
  } catch (error) {
    console.error('An error occurred:', error);
    response.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/deleteUserData', (request, response) => {
    console.log('request',request.body)
    try {
      const { id} = request.body;
      const postQuery = `DELETE FROM user WHERE id=${id}`;
  
      connection.query(postQuery, (err, results) => {
        if (err) {
          console.error('Error creating user:', err);
          response.status(500).json({ error: 'Failed to delete user' });
        } else {
          console.log(results);
          response.json({ message: 'Data deleted successfully' });
        }
      });
    } catch (error) {
      console.error('An error occurred:', error);
      response.status(500).json({ error: 'Internal server error' });
    }
  });
  app.put('/updateUser', async (request, response) => {
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
        
        connection.query(updateQuery, (error, result) => {
            if (error) {
                console.error('Error updating user:', error);
                response.status(500).json({ error: 'Failed to Update' });
            } else {
                response.json({ message: 'User Updated successfully' });
            }
        });
    } catch (error) {
        console.error('An error occurred:', error);
        response.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
  console.log(`The App is Running at ${port}`);
});
