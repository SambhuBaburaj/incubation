
const { default: mongoose } = require('mongoose');
const mongo= require('../model/userData')
const { ObjectId } = require("mongodb");


const tableData=async (req,res)=>
{
try
{const tableData=await mongo.SlotRequest.find()
console.log(tableData);
res.status(200).json(tableData)
}
catch(err)
{

}


}


const accept=(req,res)=>
{
    try{
        
console.log(req.query);
mongo.SlotRequest.updateOne({_id:req.query.userid},{status:"accepted"},(e,s)=>
{
    console.log(s);
})
    }
    catch(err)
    {

    }
res.status(200).json(true)

}
const Reject=(req,res)=>
{
    try{
        
console.log(req.query);
mongo.SlotRequest.updateOne({_id:req.query.userid},{status:"Rejected"},(e,s)=>
{
    console.log(e);
})
res.status(200).json(true)

    }
    catch(err)
    {

    }
}


const bookslot=async(req,res)=>
{
    try
{    console.log(req.body);
   
await mongo.SlotRequest.updateOne({_id:ObjectId(req.body.name)},{seat:req.body.slotnumber},(e,s)=>
{
    console.log(s);
}).clone()

res.status(200).json(true)
}
catch(err)
{
    console.log(err);
}
}
module.exports={tableData,accept,Reject,bookslot}