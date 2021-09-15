const mongoose = require('mongoose')
const {Schema} = mongoose;
const Note = require('./note.model.js');

const UserSchema = new Schema({
  firstname : {
    type : String,
    required : "Please enter the firstname"
  },
  lastname : {
    type : String,
    required: "please provide the lastname"
  },
  username : {
    type : String,
    required : "Please enter the username",
    unique : "Username should be unique"
  },
  password : {
    type : String,
    required : "Please enter the password"
  },
  notes : [{ 
    type:Schema.Types.ObjectId,
    ref : Note
    }]
}, 
  {timestamps : true 
})

const User = mongoose.model("User" , UserSchema)
module.exports = User