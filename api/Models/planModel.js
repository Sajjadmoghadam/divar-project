import mongoose from "mongoose";
const PlanSchema = new mongoose.Schema(
  {
    title:{
        type:String,
        required:[true,"نام بسته الزامی می باشد"],
        unique:[true,"نام بسته تکراری می باشد"]
    },
    price:{
        type:Number,
        required:[true,"قیمت بسته الزامی می باشد"]
    },
    description:{
        type:String,
        required:[true,"نام بسته الزامی می باشد"]
    }
   
  },
  { timestamps: true }
);
const Plan=mongoose.model("Plan",PlanSchema)
export default Plan