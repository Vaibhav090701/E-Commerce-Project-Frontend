import React from 'react'

const ErrorMessage = ({ message }) => {
    if (!message) return null
    return (
      <div className="text-red-400 text-error-text p-3 rounded-md mb-6 text-center max-w-2xl mx-auto">
      {message}
    </div>
    )
  }

export default ErrorMessage
