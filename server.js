import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRoute from './routes/userRoutes.js';
import ProductRoute from './routes/productroutes.js';
import AdminRoute from './routes/adminroutes.js';
import ReviewRoute from './routes/reviewroutes.js';
dotenv.config()


const app= express()
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use("/",userRoute)
app.use('/',ProductRoute)
app.use('/',AdminRoute)
app.use('/',ReviewRoute)


const port=process.env.port || 8080

connectDB()
app.listen(port, ()=>{
  console.log("Server created")
})