import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../../connections/axios/axios";

function Modal({ setModelOn, setChoice }) {
  const Navigate=useNavigate()


const Handlesubmit=async(e)=>{
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization : `Bearer ${localStorage.getItem('authToken')}`
    },
  };

console.log(  name,address,city,state,email,phone,company,extra);
 if(!(name&&address&&city&&state&&email&&phone&&company))
 {

  seterrmssg('entervalid info')
 }
else if(phone.length<10){
  seterrmssg('phone number should be 10 digits')
}
else
{

  const user=JSON.parse(localStorage.getItem('user'))._id
console.log(user);
//   let response=await instance(
//     {
//       url:'/seatbooking',
//       method:'post',
// data:{
//   name,address,city,state,email,phone,company,extra,user
// },
// headers: {
//   "content-type": "application/json",
//   token:`Bearer ${localStorage.getItem('authToken')}`
// },
//     }
//   )
let response=await instance.post('/seatbooking',{ name,address,city,state,email,phone,company,extra,user},config) 
console.log(response);
console.log('wsloghnseiugrb');
if(response.data.user===401)
{

localStorage.removeItem('user')
Navigate('/')
}
else{

  console.log('ersedog');
  setChoice(true);
  setModelOn(false);

}


}

}

  // const handleOKClick = () => {
  //   setChoice(true);
  //   setModelOn(false);
  // };
  const handleCancelClick = () => {
    setChoice(false);
    setModelOn(false);
  };

const [address,setaddress]=useState('')
const [name,setname]=useState('')

const [state,setstate]=useState('')
const [city,setcity]=useState('')
const [email,setemail]=useState('')

const [phone,setphone]=useState('')
const [company,setcompany]=useState('')
const [extra,setextra]=useState()
const [errmsg,seterrmssg]=useState()



useEffect(()=>
{
  seterrmssg('')
},[ name,address,city,state,email,phone,company,extra])

  return (
    <div className="mt-10   bg-zinc-200 opacity-80 fixed inset-0 z-50   ">
      <div className="flex h-screen justify-center items-center ">
        <form onSubmit={Handlesubmit} class="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="text-red-500  content-center">{errmsg}</div>

          <div class="mb-4 flex">
            <div>
              <label
                class="block text-white text-sm font-bold mb-2"
                for="username"
              >
                Name
              </label>

              <input onChange={(e)=>{setname(e.target.value)}}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="pl-2">
              <label
                class="block text-white text-sm font-bold mb-2"
                for="username"
              >
                Address
              </label>
              <input onChange={(e)=>setaddress(e.target.value)}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Address"
              />
            </div>
          </div>
          <div class="mb-4 flex">
            <div>
              <label
                class="block text-white text-sm font-bold mb-2"
                for="username"
              >
                City
              </label>

              <input onChange={(e)=>{setcity(e.target.value)}}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="City"
              />
            </div>
            <div className="pl-2">
              <label
                class="block text-white text-sm font-bold mb-2"
                for="username"
              >
                state
              </label>
              <input onChange={(e)=>{setstate(e.target.value)}}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="state"
              />
            </div>
          </div>
          <div class="mb-4 flex">
            <div>
              <label
                class="block text-white text-sm font-bold mb-2"
                for="username"
              >
                Email
              </label>

              <input onChange={(e=>
              {
                setemail(e.target.value)
              })}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="pl-2">
              <label
                class="block text-white text-sm font-bold mb-2"
                for="username"
              >
                phone No
              </label>
              <input onChange={(e)=>
              {
                setphone(e.target.value)
              }}
                className="outline-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="number"
                placeholder="  phone No"
              />
            </div>
          </div>
          <div class="mb-4 flex">
            <div>
              <label
                class="block text-white text-sm font-bold mb-2"
                for="username"
              >
                company name
              </label>

              <input onChange={(e)=>
              {
                setcompany(e.target.value)
              }}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="company name"
              />
            </div>
         
          </div>

          <div class="mb-6">
            <label
              class="block text-white text-sm font-bold mb-2"
              for="username"
            >
        
description
            </label>
            <input onChange={(e)=>setextra(e.target.value)}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="  
              description                                                                                                                                                                                                                                                                                                                                                                                                              "
            />
          </div>

          <div class="flex items-center justify-between">
            <button onClick={Handlesubmit}
          
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              book seat
            </button>
            <button
              onClick={handleCancelClick}
              className="bg-red-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
