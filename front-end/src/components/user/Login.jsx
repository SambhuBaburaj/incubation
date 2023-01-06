import "../../Assets/Stylesheet/User/Login.css";
import React, { useState,useEffect,useRef } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import instance from "../../connections/axios/axios";




export const Login = (props) => {

const userRef=useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [errmsg,seterrmssg]=useState('')
const Navigate = useNavigate();
useEffect(()=>
{
  seterrmssg('')
},[email,password])

  const handleSubmit = async (e) => {
    e.preventDefault();
 

    let response=await instance({
      url:'/login',
      method:'post',
data:{email,password}
    })
  

console.log(response);
if(response.data.user)
{

  console.log(response);
  localStorage.setItem('authToken',response.data.accessToken)
  // seterrmssg('incorrect email/password')
  // console.log(localStorage.getItem('authToken'));
localStorage.setItem("user",JSON.stringify(response.data.user));

Navigate('/home')


}
else{

  console.log('failed',response.data.user);
seterrmssg('invalid username/password')
}
  };

  return (
    <div className="App">
    <div className=" auth-form-container">
      <h1 className="text-4xl">Login</h1>
      <form onSubmit={handleSubmit} className="LoginForm" action="">
        <br />
<p className="text-red-500  rounded-xl">{errmsg}</p>
        <label>email</label>
        <input className="text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="enter your email"
          id="email"
          name="email"
          required
        />
        <label>Password</label>
        <input className="text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="Password"
          placeholder="enter your password"
          id="password"
          name="password"
        />
        <button className="text-center bg-red-400 hover:bg-blue-900 text-white-800 font-bold py-2 px-4 rounded items-center" type="submit">Login</button>
      </form>
      <NavLink to="/signin">
      <button
        className="linkButton no-underline"
     
      >
        Don't have an Account?Register Here
      </button> 
    </NavLink>
 
    </div>
    </div>
  );
};
