const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    require: [true, "Email Required!!"],
  },
  password: {
    type: String,
    require: [true, "Password Required!!"],
  },
  about: { type: String },
  profileURL: { type: String },
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema); //mongoose.models.users is used to check whether that collection(model) is already created or not
