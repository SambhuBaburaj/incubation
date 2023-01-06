import "../../Assets/Stylesheet/User/Login.css";
import { Link,useNavigate } from "react-router-dom";
import React,{useState} from "react"

import instance from "../../connections/axios/axios";
export const Register=(props)=>
{
    const [name,setName]=useState('')

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate();
    const [errmsg,seterr]=useState('')
    const handleSubmit=async (e)=>
    {
     console.log('geroiuhg');
        e.preventDefault();
        if(password.length<6)
        {
            seterr('password length atleast 6 ')
        }
        else
{     let response=await instance({
        method:'post',
        url:'/signin',
        data:{email,name,password

        }
     })
// console.log(response);
console.log(response.data.register);
if(response.data.register)
{

    let path = '/'; 
    navigate(path);
}
else{
    console.log('failed');
    seterr('email already exist')
}
}
    }


    return(
        <div className="App">
        <div className="auth-form-container">
            <h1 className="text-4xl">Register</h1>
        <form onSubmit={handleSubmit} className='RegisterForm' action="">
            <div className="text-red-500">{errmsg}</div>
        <label>FullName</label>
          <input className="text-black" value={name} onChange={(e)=>setName(e.target.value)} type='Name' placeholder="enter your Name" id="Name" name="Name"/>
          
          <label>email</label>
          <input className="text-black" value={email} onChange={(e)=>{setEmail(e.target.value)
        seterr(' ')  }} type='email' placeholder="enter your email" id="email" name="email"/>
          <label>Password</label>
          <input className="text-black" value={password}  onChange={(e)=>{setPassword(e.target.value) 
            seterr(' ')}} type='Password' placeholder="enter your password" id="password" name="password"/>
        <button className="text-center bg-red-400 hover:bg-blue-900  font-bold py-2 px-4 rounded items-center">Register</button>
        </form>
        <Link to='/'> <button className='linkButton' >Alredy have an Account ?login</button></Link>
       
        </div>
        </div>
    )
}