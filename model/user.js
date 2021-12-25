//userSchema for user registering to app
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    user_name:{
        type : String,
        required : true
    },
    email : {
        type:String,
        required:true
    },
    password : {
        type: String,
        required :true
    },
    createdAt: {
        type : Date,
        default : Date.now()
    }
});

module.exports = mongoose.model("user",userSchema); //export model with userSchema