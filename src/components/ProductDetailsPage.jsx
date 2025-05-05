import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ErrorMessage from './ErrorMessage'

const ProductDetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`https://e-commerce-project-xhtb.onrender.com/products/${id}`)
        setProduct(response.data)
        setError(null)
      } catch (err) {
        setError('Failed to fetch product details')
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <ErrorMessage message={error} />
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <p className="text-gray-500 text-lg">Product not found.</p>
      </div>
    )
  }

  return (
<div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl md:max-w-5xl mx-auto">
<button
          onClick={() => navigate('/')}
          className="mb-6 text-blue-600 hover:text-blue-800 font-medium transition"
        >
          ← Back to Search
        </button>

        <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 flex flex-col md:flex-row gap-6">
        <div className="flex justify-center items-center flex-shrink-0 w-full md:w-[50%]">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full max-w-[300px] h-auto object-contain rounded-md mx-auto"
              />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-blue-600 text-2xl font-semibold mt-2">${product.price.toFixed(2)}</p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-600"><span className="font-medium">Brand:</span> {product.brand}</p>
              <p className="text-gray-600"><span className="font-medium">Category:</span> {product.category}</p>
              <p className="text-gray-700 mt-4">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage
