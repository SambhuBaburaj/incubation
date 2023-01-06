import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const UserAuth=()=>
{
const user=localStorage.getItem('user')
console.log(user);
return user?<Outlet/>:<Navigate to='/'/>

}

export default UserAuth