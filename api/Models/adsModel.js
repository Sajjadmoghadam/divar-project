import mongoose from "mongoose";

const AdsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "نام آگهی الزامی می باشد"],
    },
    description: {
      type: String,
      required: [true, "توضیحات آگهی الزامی می باشد"],
    },
    media: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Media",
        },
      ],
      default: [],
    },
    price: {
      type: Number,
      required: [true, "قیمت آگهی الزامی می باشد"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    address: {
      type: String,
    },
    status: {
      type: String,
      enum: ["new", "old", "similarNew"],
      required: [true, "وضعیت محصول الزامی می باشد"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isPublish: {
      type: Boolean,
      default: false,
    },
    catId: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Category",
        },
      ],
      default: [],
    },
    city: {
      type: String,
      required: [true, "شهر الزامی می باشد"],
    },
    plan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
    }
  },
  { timestamps: true }
);

const Ads = mongoose.model("Ads",AdsSchema)
export default Ads
