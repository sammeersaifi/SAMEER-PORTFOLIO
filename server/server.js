import express from "express";
import color from 'colors';
import connectDb from "./db.js";
import User from "./user.js";
import cors from 'cors'
import dotenv from 'dotenv'

const app = express();
dotenv.config();
connectDb();

app.use(cors());
app.use(express.json());

app.post('/contact', async(req,res)=>{
    let user =  new User(req.body);
    let result = await user.save();
    res.send(result);
    console.log(result)
});

const PORT  = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`.bgWhite);
})


