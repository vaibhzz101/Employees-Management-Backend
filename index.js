const express = require('express');
const connection = require('./config/db')
require('dotenv').config();

const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth.routes');
const employeeRoutes = require('./routes/employee.routes.js')
app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send('Welcome to Employee Management. . :)')
});

app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async() => {
    try {
        await connection;
        console.log("connected to db")
        
    } catch (error) {
        console.log(error)
        console.log('not able to connect db')
    }
    console.log(`server is running on PORT ${PORT}`)
})