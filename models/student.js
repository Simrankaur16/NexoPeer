
const mongoose = require("mongoose");

const student = new mongoose.Schema({

    studentId: {
        type: String,
        required: true,
        unique: true

    },
    name: {
        type: String,
        required: true
        
    }, 
    email: {
        type: String, 
        require: true, 
        unique: true,
    }, 
    password: {
        type: String,
        require: true
    },
    address: {
        typeo: String
    }

},
{
   timestamps: true
}
);

module.exports =  mongoose.model("student", student);