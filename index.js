import express from "express"
import dotenv from 'dotenv'

dotenv.config(); 
const app = express()

app.use(express.json());

const PORT  = process.env.PORT || 8080
app.get("/",(req,res)=>{
    console.log("hello world")
    res.send("hello world")
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})