const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected: ${conn.connection.host}');
    } catch (error) {
        console.error('Error: ${error.message}');
        process.exit(1);
    }
}

connectDB();

const todoRoutes = require('./routes/todoRoutes');
app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the MEVN To-Do API! Base route for frontend.');  
});

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});
