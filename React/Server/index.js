import express, {json} from 'express';
import dotenv from 'dotenv';
import { userRoute } from './Router/userRoute.js';
import { adminRoute } from './Router/adminRoute.js';
import { accountRoute } from './Router/accountRoute.js';
import mongoose from 'mongoose';
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config();

const app=express();

app.use(express.json({ limit: "10mb" })); // Increase JSON body size
app.use(express.urlencoded({ extended: true, limit: "10mb" })); // Increase form data limit

app.use(cookieParser()); // Enables reading cookies

app.use(
    cors({
        origin: "http://localhost:3030", // Allow frontend requests
        credentials: true, // Allow cookies and authentication headers
    })
);

app.use('/',userRoute);
app.use('/',adminRoute);
app.use('/',accountRoute);

mongoose.connect('mongodb://localhost:27017/DancingLeaf').then(()=>{
    console.log('mongoDB is connected successfully to Dancing Leaf');
    })
    .catch((error)=>{
        console.error('MongoDB connection failed',error);
    });
    

app.listen(process.env.PORT,function(){
     console.log(`server is listening at ${process.env.PORT}`);
     
})