import React from 'react'

export const Contact = ({contact}) => {
  const { phone, email, address} = contact;
  
  return (
    <div className="rounded-md md:rounded-full border-gray-300 border px-4 py-2 font-medium">
      <div className="flex justify-start content-center">
        <div className="rounded-full w-8 h-8 bg-red-200 text-white flex items-center justify-center mr-4">{contact?.first_name?.split("")[0]}</div>
        <div className="md:flex md:items-center md:justify-center md:gap-4">
          <div className="text-bold">{contact?.first_name} {contact?.last_name}</div>
          {phone && (<div>{phone}</div>)}
          {email && (<div>{email}</div>)}
          {address && (<div>{address}</div>)}
        </div>
      </div>
    </div>
  )
}

