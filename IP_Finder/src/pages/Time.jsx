import React, { useContext }  from 'react'
import { IP_Context } from '../context/UserIPAddress'

export const Time = () => {

  const {ipres} = useContext(IP_Context)

  const {time} = ipres;

  return (
    
    <div className='col-sm-4 col-md-4 m-auto cardTable'>
        <table className='table table-borderless table-dark text-center m-auto' width={25}>
        <thead>
        <tr>
          <th>Timezone</th>
          <td>{time?.timezone}</td>
        </tr>
        <tr>
          <th></th>
          <td></td>
        </tr>
        <tr>
          <th></th>
          <td></td>
        </tr>
        <tr>
          <th></th>
          <td></td>
        </tr>
        <tr>
          <th></th>
          <td></td>
        </tr>
      </thead>
        </table>
    </div>

  )
}
