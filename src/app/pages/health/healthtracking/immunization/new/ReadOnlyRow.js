/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from "react";

export default function ReadOnlyRow({ immunization }) {
  return (
    <tr>
      <td>
        <a href="#" className="text-gray-800 text-hover-primary mb-1">{immunization.name}</a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {immunization.gender}
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          { }
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {immunization.name}
        </a>
      </td>
    </tr>
  )


}