/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from "react";

export default function ReadOnlyRow({ contact }) {
  return (
    <tr>
      <td>
        <a href="/clientdetails" className="text-gray-800 text-hover-primary mb-1">{contact.name}</a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {contact.gender}
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {contact.address}
        </a>
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
      <span className='badge badge-light-success'>{contact.status}</span>
            </td>
    </tr>
  )


}