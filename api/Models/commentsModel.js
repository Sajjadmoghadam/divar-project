import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema({
    description:{
        type:String,
        required:[true,"متن پیام الزامی می باشد"]
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    adsId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Ads"
    }
},{timestamps:true})

const Comments = mongoose.model("Comments",CommentSchema)
export default Comments