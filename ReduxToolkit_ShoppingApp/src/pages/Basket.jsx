import React, { useEffect,useState } from 'react'
import {BsCartPlus} from 'react-icons/bs'
import {AiOutlineDelete} from 'react-icons/ai'
import {AiOutlineMinusCircle} from 'react-icons/ai'

export const Basket = () => {


  return (
    
    <div className="relative overflow-x-auto my-10 w-[50%] m-auto">

      {/* clear all items */}
      <div className='p-3'>
        <button className='bg-gray-300 p-1 rounded-md w-[100px] hover:bg-gray-400 hover:text-white'>Clear All</button>
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-l-lg text-center">
              Product name
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Qty
            </th>
            <th scope="col" className="px-6 py-3 rounded-r-lg text-center">
              Price
            </th>
            <th scope="col" className="px-2 py-3 rounded-r-lg text-center">
              Control
            </th>
          </tr>
        </thead>

        
         

            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                    
                </th>
                <td className="px-6 py-4 text-center">
                   
                </td>
                <td className="px-6 py-4 text-center">
                    
                </td>
                <td className="px-4 py-4 flex flex-wrap justify-center items-center gap-3">
                  
                    {/* artırma */}
                    <BsCartPlus size={'25px'} className='hover:cursor-pointer hover:text-blue-500' />

                    {/* azaltma */}
                    <AiOutlineMinusCircle size={'25px'} className='hover:cursor-pointer hover:text-orange-500' />

                    {/* silme */}
                    <AiOutlineDelete size={'25px'} className='hover:cursor-pointer hover:text-red-500' />
                </td>
            </tr>

            </tbody>

            

            <tfoot>
              <tr className="font-semibold text-gray-900 dark:text-white">
                <th scope="row" className="px-6 py-3 text-base text-center">
                  Total
                </th>
                <td className="px-6 py-3 text-center"></td>
                <td className="px-6 py-3 text-center"></td>
              </tr>
            </tfoot> 
      </table>
    </div>


  )
}
