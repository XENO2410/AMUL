import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js';


//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());  {/* request from frontend to backend will be parsed through this*/}
app.use(cors());  {/* access backend from any frontend */}

// db connection 
connectDB();

//api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res)=>{
    res.send("API WORKING");
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
})

