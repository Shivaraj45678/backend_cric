const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js'); 
const Book = require('./models/product.model.js');

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Running on localhost 3000");
});

app.get('/get', (req, res) => {
    res.send('Hello');
});

app.get('/api/getAllProducts',async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body); 
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/addBook',async(req,res)=>{
    try {
        const book=await Book.create(req.body)
;
res.status(200).json(book)   
 } catch (error) {
        res.status(500).json({message:error.message})
    }
})
mongoose.connect('mongodb+srv://shivaraju:172r1a0103@backendapi.g565pbc.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=BackendApi')
    .then(() => console.log('Connected!'))
    .catch(() => {
        console.log("Connection failed");
    });
