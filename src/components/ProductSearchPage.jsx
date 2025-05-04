import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm'
import ErrorMessage from './ErrorMessage'

const ProductSearch = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchProducts = async (search = '') => {
    setLoading(true)
    try {
      const response = await axios.get(`/products${search ? `?search=${search}` : ''}`)
      setProducts(response.data)
      setError(null)
    } catch (err) {
      setError('Failed to fetch products')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Explore Our Products</h1>
      
      <div className="max-w-xl mx-auto mb-8">
        <SearchForm search={search} setSearch={setSearch} onSearch={fetchProducts} />
      </div>

      <ErrorMessage message={error} />

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No products found.</p>
      ) : (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
{products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md transition duration-200 flex flex-col items-center p-4"
              >
              <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full max-w-[250px] h-[200px] object-cover rounded-md"
                  />
              </div>
              <div className="text-center mt-4 w-full">
    <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
    <p className="text-blue-600 text-base font-medium mt-1">${product.price.toFixed(2)}</p>
    <p className="text-gray-500 text-sm mt-1">{product.brand}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductSearch
