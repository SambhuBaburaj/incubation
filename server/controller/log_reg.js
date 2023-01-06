// const { Register } = require("../../front-end/src/components/user/Register");
const RegUser = require("../model/userData").user_data;
const bcrypt = require("bcrypt");
const jwt =require('jsonwebtoken')
const Register = async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  const CurrentUser = await RegUser.findOne({ email: req.body.email });
if(CurrentUser)
{
  res.json({register:false})

}
else

{
  //jwt token create 
  const RegisterUser = new RegUser({
    username: req.body.name,
    email: req.body.email,
    password: hashed,
  });
  RegisterUser.save();
  res.json({register:true})
}
};
const Login = async (req, res) => { 
  const CurrentUser = await RegUser.findOne({ email: req.body.email });
  if (CurrentUser) {
    const result = await bcrypt.compare(
      req.body.password,
      CurrentUser.password
    );
    if (result) {
console.log(CurrentUser);
      const accessToken =jwt.sign(CurrentUser.toJSON(),'jwtsecret',{expiresIn:'20d'})

  
      res.json({ user: CurrentUser,accessToken
      });
    } else {
      res.json({ user: false });
    }
  } else {
    res.json({ user: false });
  }

  //  const result = await bcrypt.compare(plaintextPassword, hash);
};

module.exports = { Register, Login };
