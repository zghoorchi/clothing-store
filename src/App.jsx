import React from 'react'
import { Routes ,Route, Navigate } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import DetailsPage from './pages/DetailsPage'
import Checkout from './pages/Checkout'
import PageNotFound from './pages/404'



function App() {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='/products'  />} />
    <Route path='/products' element={<ProductsPage />} />
    <Route path='/products/:id' element={<DetailsPage />} />
    <Route path='/checkout' element={<Checkout />}/>
    <Route path='*' element={<PageNotFound />}/>

  </Routes>
  )
}

export default App