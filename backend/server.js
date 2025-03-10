import express from "express"
import dotenv from "dotenv";

import authRoutes from "./routes/authroutes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
const app=express();


const PORT =process.env.PORT || 5000;
dotenv.config()

app.use(express.json());  //to parse the incoming request with JSON pyload (from req.body)

app.use("/api/auth",authRoutes)

//app.get("/",(req,res)=>{
    //root route http://localhost:5000/
   // res.send("hellooooo");
//});



app.listen(PORT,()=>{
connectToMongoDB()
console.log(`server running on PORT${PORT}`)}
);