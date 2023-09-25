## Technologies Used

### Frontend
- React
- Material-UI
- React Table Component
- css

### Backend
- Node.js
- Express

### Database
- MySQL
- phpMyAdmin

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js and npm should be installed on your machine.
- MySQL server should be set up, or you can use a cloud-based MySQL service.

### Installation

1. Clone the repository.
2. Navigate to the project directory.

#### Backend Setup

3. Navigate to the 'backend' directory: `cd backend`
4. Install backend dependencies: `npm install`
5. Start the backend server: `npm start`

#### Frontend Setup

6. Navigate to the 'frontend' directory: `cd frontend` then `cd Web-app`
7. Install frontend dependencies: `npm install`
8. Start the frontend development server: `npm start`

## Database Configuration

1. **Database Setup:** First, ensure you have a MySQL database set up to store your project data. You can use tools like phpMyAdmin or XAMPP to manage your database.

2. **Import Database Schema:**
   - Use phpMyAdmin to import the 'user.sql' database file. This file contains the schema for our project's database. Follow these steps:
     - Open phpMyAdmin and log in.
     - Select your database (if you don't have one, create a new database).
     - Go to the "Import" tab.
     - Choose the 'user.sql' file and click "Go" to import the schema.

   (OR)

3. **Custom Database Configuration:**
   - If you prefer to use your own database configuration, follow these steps:
     - Create a MySQL database to match the schema provided in the 'user.sql' file.
     - Configure your project to connect to the newly created database by updating the appropriate configuration files. Ensure you modify the following settings with your own values:

   - defined:
   - host: 'localhost',      // Change to your database host

   - user: 'root',           // Change to your database username
   
   - password: '',           // Change to your database password
   
    - database: 'client'      // Change to your database name

### Usage

11. Open your browser and access the application at ` http://localhost:5173/`.

## Notes

- The application's frontend will be accessible at ` http://localhost:5173/`, and the backend will run on `http://localhost:5000`.
- You can customize the application by modifying the code as needed.

## Contact

If you have any questions or issues, feel free to contact Sateesh Polina at polinasateesh212@gmail.com.
