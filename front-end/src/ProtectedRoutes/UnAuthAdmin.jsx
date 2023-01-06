import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function UnAuthAdmin() {
    const admin =localStorage.getItem('admin')
  return admin?<Navigate to='/admin'/> : <Outlet/>;
  
}

export default UnAuthAdmin