import React from 'react'

export const Alert = ( {message} ) => {
  return (
    <div className="bg-red-600 border-red-400 text-red-700
    px-4 py-3 rounded relative mb-2 text-center">
        <span
        className='sm:inline block sm:mt-0 text-left sm:text-center'
        >
        {message}
        </span>
    </div>
  )
}
