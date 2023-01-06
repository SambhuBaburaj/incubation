import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../../connections/axios/axios';

export default function Login() {
const [email,setemail]=useState('')
const [password,setPassword]=useState('')
const [errmsg,seterrmsg]=useState('')
const Navigate=useNavigate()
const config={
    headers: {
      "content-type": "application/json",
    },
  };
useEffect(()=>
{
    seterrmsg(' ')
},[password,email])

const handlessubmit=(e)=>
{
e.preventDefault()
instance.post('/admin/login',{email,password},config).then((data)=>
{
console.log(data.data);
if(data.data)
{
    localStorage.setItem("admin",email)
    Navigate('/admin')
}
else{
    seterrmsg('invalid username/password')
}
})
}


    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
                   Sign in
                </h1>
                <form onSubmit={handlessubmit}
                 className="mt-6">
                <h4 className= 'text-center text-red-500'>{errmsg}</h4>

                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input onChange={(e)=>setemail(e.target.value)}
                            type="email"
                            className=" bg-green-50 border border-green-500 block w-full px-4 py-2 mt-2 text-purple-700 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input onChange={(e)=>setPassword(e.target.value)}
                            type="password"
                            className="bg-green-50 border border-green-500 block w-full px-4 py-2 mt-2 text-purple-700 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
             
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

              
            </div>
        </div>
    );
}