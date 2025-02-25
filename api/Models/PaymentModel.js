import mongoose from "mongoose";


const PaymentSchema = new mongoose.Schema({
    price:{
        Type:Number,
        required:[true,"مبلغ پرداختی الزامی می باشد"]
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    status:{
        type:String,
        enum:["success","reject"]
    }

},{timestamps:true})

const Payment = mongoose.model("Payment",PaymentSchema)

export default Payment