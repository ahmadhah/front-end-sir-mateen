/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from "react";

export default function ReadOnlyRow({ contact,setshowContactNew}) {

  return (
    <tr onClick={()=>{setshowContactNew(true)
     sessionStorage.setItem('name',contact.name)
    }}   style={{ cursor: "pointer" }}> 
      <td > 
       {contact.name}
      </td>
      <td>
        <a
          
          className="text-gray-800 text-hover-primary mb-1"
        >
          {contact.gender}
        </a>
      </td>
      <td>
        <a
      
          className="text-gray-800 text-hover-primary mb-1"
        >
          {contact.address}
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {contact.admission}
        </a>
      </td>
      <td className="text-gray-800 text-hover-primary mb-1">
      {contact.status}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
      <span className='badge badge-light-success'>{contact.status}</span>
            </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {contact.clienttype}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {contact.clienttype}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {contact.clienttype}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {contact.clienttype}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {contact.clienttype}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {contact.clienttype}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {contact.clienttype}
      </td>
    </tr>
    
  )


}