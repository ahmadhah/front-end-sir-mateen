/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from "react";

export default function ReadOnlyRow({ skinwound }) {
  return (
    <tr>
      <td>
        <a href="#" className="text-gray-800 text-hover-primary mb-1">{skinwound.name}</a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {skinwound.name}
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {skinwound.address}
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
          {skinwound.id}
        </a>
      </td>
    </tr>
  )


}