import mongoose, { Schema } from "mongoose";

const account = new Schema({
  name: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

export const Account = mongoose.model("Account", account);
