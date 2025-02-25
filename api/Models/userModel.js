import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: [true, "شماره تلقن الزامی می باشد"],
      unique: [true, "شماره تلقن تکراری می باشد"],
    },
    nationalCode: {
      type: String,
    },
    Nationality: {
      type: String,
      enum: ["Iran", "Afghanistan", "Iraq", "Turkey", "Lebanon"],
    },
    bookMarks: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Ads",
        },
      ],
      default: [],
    },
    myAds: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Ads",
        },
      ],
      default: [],
    },
    recentlySeen: {
      type: [
        {
         ads:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ads",
         },
         time: {
            type: Date,
            default: Date.now,
            expires:  24 * 60 * 60,
          },
        },
      ],
      default: [],
    },
    myPayments: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Payment",
        },
      ],
      default: [],
    },
    role:{
      type:String,
      enum:["user","admin"],
      default:"user"
    }
  },

  { timestamps: true }
);


const User = mongoose.model("User",UserSchema)

export default User
