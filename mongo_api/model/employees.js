const mongoose = require('mongoose')

const EmployeeSchema = mongoose.Schema({
  
    emp_id:{
        type: Number,
    },

    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type:String,
        required: true,
    },
    emailID:{
        type: String,
        required: true,
    },
})

const Employee = mongoose.model("employees", EmployeeSchema)
module.exports = Employee