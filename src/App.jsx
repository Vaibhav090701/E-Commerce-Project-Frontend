import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductSearchPage from './components/ProductSearchPage'
import ProductDetailsPage from './components/ProductDetailsPage'

function App() {

  return (
    <Routes>
    <Route path="/" element={<ProductSearchPage />} />
    <Route path="/product/:id" element={<ProductDetailsPage />} />
  </Routes>
      )
}

export default App
