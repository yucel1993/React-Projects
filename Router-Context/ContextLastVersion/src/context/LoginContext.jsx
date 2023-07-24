import { createContext, useContext, useState } from "react"

//! Login Context'i olusuturuldu
export const LoginContext = createContext()


export const LoginProvider=({children})=>{
    const [user , setUser ] = useState({email:"",password:""})
    const values={
        user,setUser
    }
    return(
        <LoginContext.Provider value={values}>
            {children}
        </LoginContext.Provider>
    )
}


export const useLoginContext=()=>{
return useContext(LoginContext)
}