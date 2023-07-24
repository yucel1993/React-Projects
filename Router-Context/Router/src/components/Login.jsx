import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login({setUser}) {

    const [email , setEmail ] = useState("")
    const [password , setPassword ] = useState("")
    let navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({email, password})
        // sessionStorage.setItem("user",JSON.stringify({email,password}))
        navigate("/")
    }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group ">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
