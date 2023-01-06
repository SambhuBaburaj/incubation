const { SlotRequest } = require("../model/userData");
const mongoose=require('../model/userData')
const jwt =require('jsonwebtoken')
const { ObjectId } = require("mongodb");
const Slot = (req, res) => {
  try
  {

const AuthHeader=req.headers.authorization

if(!AuthHeader)
{
  console.log('first fail');
  res.status(401),json('notauthnticated')
}
else{
  const token=AuthHeader.split(" ")[1]
  jwt.verify(token,'jwtsecret',(err,data)=>
  {
    if(err)
    {
      console.log('second fail');
      // console.log(err);
  res.status(200).json({user:401})
    
    }
    else{
      console.log('its here');
      console.log(data);
      const requestData = new SlotRequest(
        {
            userid:req.body.user,
          name: req.body.name,
          address: req.body.address,
          city: req.body.city,
          state: req.body.state,
          email: req.body.email,
          phone: req.body.phone,
          company: req.body.company,
          extra: req.body.extra,
          status: "pending",
          seat: 0,
        },
        (s, e) => {
          console.log(s);
        }
      );
      requestData.save();
    
      res.json({
        status: "form Successfully Submited",
      });
    }
  })
  
}}
  catch(err)
  {
    console.log(err);
  }
};
const userRequest =async  (req, res) => {

const slotdata=await mongoose.SlotRequest.findOne({userid:req.query.userid})
const userdata=await mongoose.user_data.findOne({_id:req.query.userid})

res.json({
    slot:slotdata,
    user:userdata
})
};

const withdrawal=async (req,res)=>
{
try
{
  console.log(ObjectId(req.query.userid));
  
  await mongoose.SlotRequest.deleteOne({userid:ObjectId(req.query.userid)},(e,s)=>
  {
    console.log(s);
  }) .clone()
res.status(200).json(true)

}
catch(err)
{
    console.log(err);
}
}
module.exports = { Slot, userRequest,withdrawal };
