import app from "./app.js";
import mongoose from "mongoose";

const port = process.env.PORT || 5000
mongoose.connect(process.env.DATA_BASE).then(()=>{
    console.log("data base is connected");
})










app.listen(port,()=>{
    console.log("server is run");
})