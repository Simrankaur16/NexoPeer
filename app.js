const express = require("express");
const app = express();
const cors = require("cors");


require("./connection/conn.js")
const student = require("./routes/studAuth")



app.use(cors());
app.use(express.json());

app.use("/nexo", student);

app.get("/", (req, res)=>{
    res.send("hello from backend side")
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})