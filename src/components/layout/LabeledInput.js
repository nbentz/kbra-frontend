import React from 'react'

export const LabeledInput = ({label, error, value, setValue}) => {
  return (
    <>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input
            type="text"
            className="mt-1 px-2 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-gray-800 rounded-md"
            value={value}
            onChange={e => setValue(e.target.value)}
        />
        {error && (<p className='text-red-500'>{error}</p>)}
    </>
  )
}
