import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

export const CartCard = ({ product }) => {
    const format = Intl.NumberFormat('en-US')
    const { name, price, image } = product
    const { removeFromCart} = useCart()
    const [quantity, setQuantity] = useState(1)
  return (
      <div className="mx-10 my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-normal flex-wrap align-middle">
          <div className=' mx-4 basis-1/6 p-1 rounded-t-lg'>
              <a href="/">
                    <img className="rounded-t-lg h-40 w-40" src={image} alt={name}/>
            </a>
          </div>

          <div className="p-2 flex justify-start flex-wrap align-middle">
              <div className= "flex justify-start align-middle h-full">
                    <a href="/" className='mx-6'>
                        <h5 className="mb-2 text-md tracking-tight text-gray-900 dark:text-white">{ name }</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-6">Kshs. { format.format(price)}</p>
                    <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value < 1? quantity:e.target.value)}></input>
              </div>
              <div className='text-black dark:text-white mx-6'> Sub-Total: {price * quantity}</div>
              <div className='mx-6'>
                    <span onClick={() => removeFromCart(product)} className="hover:cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 :bg-red-400 dark:hover:bg-red-500 dark:focus:ring-red-600">
                        Remove
                    </span>
              </div>
              
            </div>
        </div>
  )
}
