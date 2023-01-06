import React from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom';

function AdminRoute() {
const admin=localStorage.getItem('admin');

  return admin?<Outlet/>:<Navigate to='/admin/login'/>
  
}

export default AdminRoute