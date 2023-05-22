import mongoose, { Schema } from "mongoose";
const saleOffCode = new Schema({
  code: {
    type: Number,
    require: true,
  },
  // value: {
  //   type: Number,
  //   require: true,
  // },
});

export const SaleOffCode = mongoose.model("saleOffCode", saleOffCode);
