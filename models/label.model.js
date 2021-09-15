const mongoose = require('mongoose')
const {Schema} = mongoose;

const LabelSchema = new Schema({
  labelname : {
    type : String,
    required : "please enter the labelname"
    unique  : "Label Should be unique"
  }
}, {timestamps : true
})

const Label = mongoose.model("Label" , LabelSchema)

module.exports = Label;