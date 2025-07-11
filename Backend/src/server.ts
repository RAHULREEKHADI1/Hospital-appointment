import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 4002;
const mongoDB_Url = process.env.DB_URL as string;

mongoose
    .connect(mongoDB_Url)
    .then(()=>{
        console.log("DataBase connected");
        app.listen(PORT,()=>{
            console.log(`Server is running on PORT ${PORT}`);
        })
    })

    .catch((err)=>{
        console.error("MongoDB connection failed",err);
    })

    




