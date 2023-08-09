import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"

export const PrivateRouter = () => {
    const {user}= useSelector((state)=> state.auth)
  return user?.mail ? <Outlet/> : <Navigate to="/login"/>
    
  
}
