import mongoose, { Schema } from "mongoose";

const productData = new Schema({
  // _id: Object,
  id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  detail: {
    type: String,
    require: true,
  },
  architecture: {
    type: String,
    require: true,
  },
  performance: {
    type: String,
    require: true,
  },
});
export const ProductData = mongoose.model("ProductData", productData);
