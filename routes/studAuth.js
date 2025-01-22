const router = require("express").Router();  // routes separately form the main application 
const Student = require("../models/student.js")


router.post("/register", async(req, res)=>{
    try{
        console.log("Request body: ", req.body)
        const{studentId, name, email, password} = req.body;
        

        const extStudentId= await   Student.findOne({
            studentId: studentId
        });
        if(extStudentId){
            return res.status(400)
            .json("StudentId is already exist")
        }


        const extemail = await Student.findOne({
            email:email
         });
        if(extemail) {
            return res.status(400)
            .json("Email already exist");
        }

        const newUser = new Student({studentId:studentId, name:name, email:email, password:password});
        await newUser.save();
        return res.status(200).json("User created successfully");
    }
    catch(error){
        res.status(500).json("Internal server error")
    }
})


router.post("/sign-in", async(req, res)=>{
    try {
        const {studentId, password} = req.body;

        const extUser = await Student.findOne({
            studentId
        })

        if(extUser.password !== password){
            return res.status(401).json({message: "invalid credentials"})
        }

        if(!extUser){
            res.status(400).json("User not find");
            return;
        }

        res.status(200).json({result:true, messgae:"login Successfull", studentId:extUser.studentId})
        console.log("login success")

        }
       
    
    catch(error){
        console.error("Sign-in error: ", error);
        res.json(500).json({messgae: "Internal server error"})
    }
});




module.exports = router;