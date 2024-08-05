import express from 'express'; 
// import mongoose from 'mongoose'; 
import cors from "cors"; 
import bodyParser from "body-parser";
import { config } from "dotenv";
import { errorHandler } from "./middlewares/errorHandler.js";
import { Mongoose } from './config/db.js';
import { userRoutes } from './routes/userRoutes.js';
import { customerRoutes } from './routes/customerRoutes.js';
import { settingsRoutes } from './routes/settingRoutes.js';



const app = express(); 

//increase the payload limit(e.g., 10mb)
app.use(cors()); 
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true })); 


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    next(); 
}); 

// add errorhandler here 
app.use(errorHandler);

//routes 

app.get('/',(req, res)=>{
    res.send('Welcome to Kudina Backend !!!'); 

}); 

//routing 
app.use('/user', userRoutes); 
app.use('/customers', customerRoutes); 
app.use('/settings', settingsRoutes); 

config();


app.listen(process.env.PORT || 7000, (err) => {
    if(err){
        console.log(err); 
    }
    console.log(`server listening on port ${process.env.PORT}`)
})