import React from 'react'
import { useCart } from '../context/CartContext'
import { CartCard } from '../components'

export const Cart = () => {
  const { cartList } = useCart()
  return (
    <div className='flex flex-col justify-center '>
      {
        cartList.length > 0 ?
          cartList.map((product) => {
            return <CartCard key={ product._id} product={product} />
          }): <p>The Cart is Empty</p>
      }
          
    </div>
  )
}
