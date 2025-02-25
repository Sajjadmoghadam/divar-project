import mongoose from "mongoose";
const MediaSchema = new mongoose.Schema(
  {
    media: {
      type: String,
      required: [true, "مدیا الزامی می باشد"],

    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
  { timestamps: true }
);
const Media=mongoose.model("Media",MediaSchema)
export default Media