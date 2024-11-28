// backend\config\db.js
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://amulnsut:b5bqmTeWPxAAKDcN@cluster0.smu6tfj.mongodb.net/amul';
        await mongoose.connect(mongoURI);
        console.log("DB connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1);
    }
}