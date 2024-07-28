const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
name:{
    type:String,
    require:[true,"name is rquired"]
},
email:{
    type:String,
    require:true
},
password:{
    type:String,
    require:true
}
})

const Users=mongoose.model('users',userSchema);
module.exports=Users;