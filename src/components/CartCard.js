import React from 'react'
import { useCart } from '../context/CartContext'

export const CartCard = ({ product }) => {
    const format = Intl.NumberFormat('en-US')
    const { name, price, image } = product
    const {removeFromCart} = useCart()
  return (
      <div className="mx-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-normal flex-wrap">
          <div className=' mx-11 basis-1/6 p-2 rounded-t-lg'>
              <a href="/">
                      <img className="rounded-t-lg" src={image} alt={name} />
            </a>
          </div>

          <div className="p-5 basis-1/2 flex justify-around flex-wrap">
              <div className= "flex justify-around">
                    <a href="/" className='basis-1/2'>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ name }</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 basis-1/2">Kshs. { format.format(price)}</p>
              </div>
              <div>
                    <span onClick={() => removeFromCart(product)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 :bg-red-400 dark:hover:bg-red-500 dark:focus:ring-red-600">
                        Remove
                    </span>
              </div>


            </div>
        </div>
  )
}
