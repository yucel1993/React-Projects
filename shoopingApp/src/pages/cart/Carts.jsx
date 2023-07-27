import React from 'react'
import useShopContext from '../../context/shop-context'
import { PRODUCTS } from '../../item'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'

function Carts() {

  let navigate=useNavigate()
  const {addCart,cartItems,deleteCart,getTotal}     =useShopContext()
  const totalAmount=getTotal()
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div >
      {PRODUCTS.map((product,i)=>{
        if(cartItems[product.id]!==0){
          return <CartItem key={i} data={product }/>
        }
      })}
      </div>

      <div className="checkout">
        <p>
          Subtotal: {totalAmount} $
        </p>
        <button onClick={()=>navigate(-1)}>Continue Shoping</button>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default Carts