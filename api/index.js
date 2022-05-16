const express =require("express")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
dotenv.config()
const app = express();

const connect=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    }catch(err){
        throw err;
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("MongoDb disconnected")
})
mongoose.connection.on("connected",()=>{
    console.log("MongoDb connected")
})

app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(8800,()=>{
    connect()
    console.log("Backend server started!")
})
