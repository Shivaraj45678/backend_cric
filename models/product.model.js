const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


const bookSchema = new mongoose.Schema({
  name:{
type:String,
required:true
  },
  author:{
type:String,
required:true
  }
})
 const Book= mongoose.model('Book',bookSchema);
 module.exports=Book;