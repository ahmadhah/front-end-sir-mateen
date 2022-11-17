/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from "react";

export default function ReadOnlyRow({ respiratorytreatment }) {
  return (
    <tr>
      <td>
        <a href="#" className="text-gray-800 text-hover-primary mb-1">{respiratorytreatment.name}</a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {respiratorytreatment.name}
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {respiratorytreatment.address}
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
          {respiratorytreatment.id}
        </a>
      </td>
    </tr>
  )


}