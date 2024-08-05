import mongoose from "mongoose";
import { config } from "dotenv";

config() 


//const MONGO_URL = 'mongodb://localhost:27017/kudina'

export const Mongoose = mongoose.connect(process.env.MONGO_URI || MONGO_URL, {  })
.then(() => console.log('Connected to Kudina Database...'))
.catch(err => console.error('Could not connect to Kudina Database...'))
