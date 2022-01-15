const {response,request}=require('express')
const express=require('express');
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors('*'))
const routerbooks=require("./routes/book")

app.use("/book",routerbooks)
app.get("/", (request,response)=>{
    response.send("Welcome to the backend")
});
app.listen(4000,"0.0.0.0",()=>{
    console.log("Server started at port 4000")
});