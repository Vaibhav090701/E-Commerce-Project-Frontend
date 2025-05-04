import React from 'react'

const SearchForm = ({ search, setSearch, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(search)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-4 w-full"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full sm:flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition placeholder:text-gray-400 text-gray-800"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
      >
        Search
      </button>
    </form>
  )
}

export default SearchForm
