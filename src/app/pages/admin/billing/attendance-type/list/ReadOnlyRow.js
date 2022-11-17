/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from "react";

export default function ReadOnlyRow({ attendancetype }) {
  return (
    <tr>
      <td>
        <a href="/clientdetails" className="text-gray-800 text-hover-primary mb-1">{attendancetype.name}</a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {attendancetype.gender}
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {attendancetype.address}
        </a>
      </td>
      <td>
      <span className='badge badge-light-success'>{attendancetype.status}</span>
      </td>
    </tr>
  )


}