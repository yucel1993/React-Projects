import { Navigate, Outlet } from "react-router-dom"


function PrivatRoute({user}) {
  // const user=false
  return user.email && user.password ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivatRoute