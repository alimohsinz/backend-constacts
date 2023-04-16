import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: [true, "Please add the names"] },
  email: { type: String, required: [true, "Please add the email"] },
  phone: Number,
  createdAt: { type: Date, default: Date.now },
});

const contactModel = mongoose.model("contacts", userSchema);

export default contactModel;
