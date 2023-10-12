const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql')
const jwt = require('jsonwebtoken');
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
    process.exit(1)
  } else {
    console.log('Connected to database');
    app.listen(port, () => {
      console.log(`The App is Running at ${port}`);
    });

  }
});

//custom middleware for Authentication

const authenticateToken = (request, response, next) => {
  let jwtToken;
  const authHeader = request.headers.authorization;
  if (authHeader !== undefined) {
    jwtToken = authHeader.split(" ")[1];

  }
  if (jwtToken === undefined) {
    response.status(401).json({ error: "Invalid JWT Token" });
  } else {
    jwt.verify(jwtToken, 'sateesh', async (error, payload) => {
      if (error) {
        response.status(401).json({ error: "Invalid JWT Token1" });
      } else {
        next();
      }
    });
  }
};

// API to retrieve users from the database
app.get('/details', authenticateToken, (request, response) => {
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

app.post('/login', (request, response) => {
  try {

    const { email, password, lastLoginDate } = request.body

    const payload = { email: email }
    const jwtToken = jwt.sign(payload, 'sateesh')

    const loginQuery = `INSERT into login(email,password,lastLoginDate) VALUES(?,?,?)`
    DB.query(loginQuery, [email, password, lastLoginDate], (error, result) => {
      if (error) {
        response.status(500).json({ error: 'Login Failed' })
      } else {
        response.json({ message: 'Login Success', jwtToken: jwtToken })
      }
    })

  } catch (error) {
    response.status(500).json({ error: 'Internal Server Error' })

  }

})

// API to create a new user in the database
app.post('/insert', authenticateToken,  (request, response) => {
  try {
    const { firstName, lastName, contact, message, orderCount, createdDate } = request.body;

  
    const postQuery = `INSERT INTO user (firstName, lastName, orderCount, contact, message, createdDate) VALUES (?, ?, ?, ?, ?, ?)`;

    const values = [firstName, lastName, orderCount, contact, message, createdDate];
    DB.query(postQuery, values, (err, results) => {
     
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
app.delete('/delete', authenticateToken, (request, response) => {
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
app.put('/update', authenticateToken, (request, response) => {
  try {
    const { id, firstName, lastName, message, contact, orderCount,image} = request.body;
    const updateQuery = `
      UPDATE user
      SET
        firstName = '${firstName}',
        lastName = '${lastName}',
        contact = '${contact}',
        message = '${message}',
        orderCount = '${orderCount}'
     
      WHERE
        id = ${id}
    `;
    DB.query(updateQuery, (error, result) => {
      if (error) {
        response.status(500).json({ error: 'Failed to update user' });
      } else {
        response.json({ message: 'User updated successfully' });
      }
    });
  } catch (error) {
    response.status(500).json({ error: 'Internal server error' });
  }
});








