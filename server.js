const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

dotenv.config();

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

app.get('/', (req, res) => {
    res.send('Welcome to the MEVN Stack Application!');  
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Backend server is up and running!');
});