const mongoose = require('mongoose')
const {Schema} = mongoose;

const NoteSchema = new Schema({
  title : {
    type : String,
    required : "please enter the title"
  },
  description : {
    type : String,
    required : "Please enter the description"
  },
  isPinned  : {
    type : Boolean
  },
  label : {
    type  : String
  },
 notecolor : {
   type : String
 }
},
 {
   timestamps : true
 })

const Note = mongoose.model('Note' , NoteSchema)


module.exports = Note;