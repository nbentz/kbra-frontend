import React from 'react'

export const LabeledTextArea = ({label, value, setValue, rows=3}) => {
  return (
    <>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <textarea
            type="text"
            rows={rows}
            className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-gray-800 rounded-md"
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    </>
  )
}
