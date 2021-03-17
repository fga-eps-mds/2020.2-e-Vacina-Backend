import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  email:  String,
  password: String,
  phoneNumber: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;