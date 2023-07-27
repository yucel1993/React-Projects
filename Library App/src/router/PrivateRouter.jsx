import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import About from '../pages/about/About'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const {user} = useAuthContext()
  return user ? <Outlet/> : <Navigate to="./login" />
    

}

export default PrivateRouter