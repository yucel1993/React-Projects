



function ContactList({contacts,handleDelete,setInfo}) {
  return (
    <>
    <table className="w-full lg:w-6/12 p-5 opacity-80 mx-2 mt-5 text-sm text-gray-500">
  <thead className="text-lg text-white-200 uppercase bg-white">
    <tr>
      <th scope="col" className="p-1">Full Name</th>
      <th scope="col" className="p-1">Department</th>
      <th scope="col" className="p-1">Phone Number</th>
      <th scope="col" className="p-1">Action</th>

    </tr>
  </thead>
  <tbody>

    {contacts.map((item,i)=> <tr key={i} className="bg-white border-b bg-opacity-80 text-center">
      <td>{item.name} {item.lastName} </td>
      <td>{item.department}</td>
      <td>{item.number}</td>
      <td>
        <button onClick={()=>setInfo(item)} className=" text-lg text-green-700 p-3 border rounded  bg-white-200"><i class="fa-solid fa-pen-to-square"></i></button>
        <button onClick={()=>handleDelete(item.id)} className=" text-lg text-red-800 p-3 border rounded  bg-white-600"><i class="fa-solid fa-trash"></i></button>
      </td>
     
     
    </tr>)}
   
    
    
  </tbody>
</table>

    </>
  )
}

export default ContactList