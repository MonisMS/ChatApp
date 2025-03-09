import express from "express"
import dotenv from "dotenv";
import authRoutes from "./routes/authroutes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
const app=express();
dotenv.config()
const PORT =process.env.PORT || 5000;
app.get("/",(req,res)=>{
    //root route http://localhost:5000/
    res.send("hellooooo");
});

app.use("/api/auth",authRoutes)


app.listen(PORT,()=>{
connectToMongoDB()
console.log(`server running on PORT${PORT}`)}
);