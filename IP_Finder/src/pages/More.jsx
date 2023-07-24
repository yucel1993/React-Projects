import React, { useContext } from 'react'
import { IP_Context } from '../context/UserIPAddress'

export const More = () => {

  const {ipres} = useContext(IP_Context)

  const {country} = ipres;


  // let lang=[{...country?.languages}]
  let lang=[]
 

  function find(obj){
    for(const key in obj){
      console.log(`${key}:${obj[key]}`)

      lang.push(`${key}:${obj[key]}`)
    }
  }
  
  find(country?.languages);


  return (
    
    <div className=' col-sm-4 col-md-4 m-auto cardTable'>
    <table className='table table-borderless table-dark text-center m-auto' width={25}>
      <thead>
       {
        lang.map((item,i) => (
          <tr>
            <th>Languages {i+1}</th>
            <td>{item}</td>
          </tr>
        ) )
       }
      </thead>
    </table>
</div>

  )
}
