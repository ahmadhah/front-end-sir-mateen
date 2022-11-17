/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from "react";

export default function ReadOnlyRow({ medicationadministrationrecord }) {
  return (
    <tr>
      <td>
        <a href="#" className="text-gray-800 text-hover-primary mb-1">{medicationadministrationrecord.name}</a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {medicationadministrationrecord.gender}
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
          {medicationadministrationrecord.name}
        </a>
      </td>
    </tr>
  )


}