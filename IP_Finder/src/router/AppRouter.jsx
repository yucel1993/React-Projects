import React from 'react'
import { Route, Routes,Navigate } from 'react-router-dom'
import { Location } from '../pages/Location'
import { Time } from '../pages/Time'
import { Country } from '../pages/Country'
import { More } from '../pages/More'
import { Header } from '../components/Header'
import { Searched } from '../components/Searched'
import { IP_Context } from '../context/UserIPAddress'
import { useState,useEffect } from 'react'
import axios from 'axios'

export const AppRouter = () => {

  const [userip, setuserip] = useState("101.44.220.0")
  const [ipres, setipres] = useState("")

//data çelir
  const getData=async()=>{

    try {

      const response =await axios(`https://api.getgeoapi.com/v2/ip/${userip}?api_key=6fe716c83dcc675fd1459099f2107edf17efb97c`)
      console.log(response.data)
      setipres(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    if(userip){
      getData();
    }

  }, [userip])
  

  return (
    <>
    
    <IP_Context.Provider value={{userip, setuserip,ipres}}>

    <Header/>
    
    <Routes>
        {/* <Route path='/'  element={<Home/>}/> */}
        <Route index element={<Location />}/>
        <Route path='time' element={<Time/>}/>
        <Route path='country' element={<Country/>}/>
        <Route path='more' element={<More/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      {/* </Route> */}
    </Routes>
    
    <Searched/>

    </IP_Context.Provider>


    </>
  )
}
