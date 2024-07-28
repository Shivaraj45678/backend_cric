const express = require('express');
const mongoose = require('mongoose');
const Users =require('./models/users.model')
const app=express();
app.use(express.json());

app.listen(3001,()=>{
    console.log("running on loacalhost 3001")
})

app.post('/addUser',async(req,res)=>{
    try {
        const users =await Users.create(req.body);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.get('/getAllUsers',async(req,res)=>{
    try {
        const users = await Users.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

mongoose.connect('mongodb+srv://shivaraju:172r1a0103@backendapi.g565pbc.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=BackendApi')
    .then(() => console.log('Connected!'))
    .catch(() => {
        console.log("Connection failed");
    });