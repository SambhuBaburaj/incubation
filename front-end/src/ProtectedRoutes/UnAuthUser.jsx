import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function UnAuthUser() {
    const user =localStorage.getItem('user')
  return user?<Navigate to='/home'/>:<Outlet/>
}

export default UnAuthUser