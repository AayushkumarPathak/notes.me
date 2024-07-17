const express = require("express");
const users = require("./mongo");
const cors = require("cors");

const app = express();
app.use(express.json())
// app.use(express.urlencoded({extended :true}))
app.use(cors())

app.use(express.json());

app.use("/api/auth",require("./routes/auth"))
app.use("/api/notes",require("./routes/notes"))


app.get("/",cors(),(req,res)=>{
    res.send("Hello aayush");
})















////////////////////////////   OLD CODE //////////////////////////
// app.post("/",async(req,res)=>{

//     const{userid,password} = req.body
//     try{
//         const check = await users.findOne({userid:userid})

//         if(check){
//             res.json("exist")
//         }else{
//             res.json("notexist")
//         }

//     }catch(e){
//         // console.log(e);
//         res.json("fail")
//     }
// })

// app.post("/signup",async(req,res)=>{
//     const{userid,password} = req.body
//     const data={
//         userid:userid,
//         password:password
//     }
//     try{
//         const check = await users.findOne({userid:userid})
//         if(check){
//             res.json("exist")
//         }else{
//             res.json("notexist")
//             await users.insertMany([data])
//         }

//     }catch(e){
//         // console.log(e);
//         res.json("failed")
//     }
// })

app.listen(8000,()=>{
    console.log("Port connected http://localhost:8000");
})