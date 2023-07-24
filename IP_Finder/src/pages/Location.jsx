import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { IP_Context } from '../context/UserIPAddress'


export const Location = () => {

  <Outlet/>

  const {ipres} = useContext(IP_Context)

  const {city,postcode,area,country,location} = ipres;

  return (

    

    <div className='col-sm-4 col-md-4 m-auto cardTable'>
        <table className='table table-borderless table-dark text-center m-auto' width={25}>
        <thead>
        <tr>
          <th>City</th>
          <td>{city?.name}</td>
        </tr>
        <tr>
          <th>Postcode</th>
          <td>{postcode}</td>
        </tr>
        <tr>
          <th>Area</th>
          <td>{area?.name} {area?.code}</td>
        </tr>
        <tr>
          <th>Country</th>
          <td>{country?.flag?.emoji} {country?.name} {country?.code}</td>
        </tr>
        <tr>
          <th>Location</th>
          <td>{location?.latitude} - {location?.longitude}</td>
        </tr>
      </thead>
        </table>
    </div>
        
    
  )
}
