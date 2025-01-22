const mongoose = require("mongoose")

const conn = async () =>{
    try {
        await mongoose.connect("mongodb+srv://simrakaur16:dbsimran@student.3yu1v.mongodb.net/student")
        console.log("Connected to DB")
    }catch(error){
        console.log(error);
    }
}

conn()