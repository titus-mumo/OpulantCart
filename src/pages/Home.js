import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ProductCard } from '../components'

export const Home = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const getProducts = async() => {
        try {
            setIsLoading(true)
            const response = await axios.get(`https://node-api-kqht.onrender.com/api/products`)
            setProducts(response.data)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error.message)
        }
    }

    useEffect(()=> {
        getProducts()
    }, [])


  return (
      <div className='flex flex-wrap justify-start'>
          {isLoading? <p>Loading page...</p>:
              products.map((product) =>
                  <ProductCard key={product._id} product={ product} />)
          }
      </div>
  )
}
