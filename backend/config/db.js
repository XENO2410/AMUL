// backend\config\db.js
import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://amulnsut:b5bqmTeWPxAAKDcN@cluster0.smu6tfj.mongodb.net/amul').then(()=>console.log("DB connected"));
}