const login=(req,res)=>
{
    if(req.body.email=='admin@gmail.com')
    {
     if(req.body.password=='a')
     {
         res.status(200).json(true)
     }
     else 
     {
        res.status(200).json(false)
     }
    }
    else{
        res.status(200).json(false)
 
    }
}

module.exports={login}