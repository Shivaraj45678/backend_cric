const express = require('express');
const mongoose = require('mongoose');
const Users = require('./models/users.model');
const cors = require('cors'); 

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Running on localhost ${PORT}`);
});

app.post('/addUser', async (req, res) => {
    try {
        const users = await Users.create(req.body);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/getAllUsers', async (req, res) => {
    try {
        const users = await Users.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const connectionString = 'mongodb+srv://shivaraju:172r1a0103@backendapi.g565pbc.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=BackendApi';

mongoose.connect(connectionString, {
    serverSelectionTimeoutMS: 30000, // 30 seconds
    socketTimeoutMS: 45000, // 45 seconds
})
.then(() => console.log('Connected to MongoDB!'))
.catch((error) => {
    console.error('Connection failed:', error.message);
});
