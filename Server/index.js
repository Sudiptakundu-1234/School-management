const express= require("express")
const app = express();


const port =process.env.PORT || 3001;

const apidata = require("./data.json")

app.get("/",(req,res)=>{
    res.send("school Managements")
})

app.get("/student",(req,res)=>{
    res.send(apidata)
})

app.listen(port,()=>{
console.log("School managements");
})