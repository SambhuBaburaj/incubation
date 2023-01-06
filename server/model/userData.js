const { compareSync } = require("bcrypt");
const mongoose=require("mongoose");
const { stringify } = require("uuid");
// user schema
const User_Schema = new mongoose.Schema({
    username: String,
    email:String,
    password:String
   
  });
  const user_data = mongoose.model("user_data", User_Schema);

const RequestSceama=new mongoose.Schema({
  userid:mongoose.ObjectId,
  name:String,
  address:String,
  city:String,
  state:String,
  email:String,
  phone:Number,
  company:String,
  extra:String,
  status:String,
  seat:Number

})
const SlotRequest=mongoose.model("SloteRequest",RequestSceama)

  module.exports = {user_data,SlotRequest}  