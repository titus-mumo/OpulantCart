import {Routes, Route} from 'react-router-dom'
import { Cart, Home, ProductDetail } from "../pages";

import React from 'react'

export const AllRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/product/:id' element={<ProductDetail />} />
          </Routes>
    </div>
  )
}

