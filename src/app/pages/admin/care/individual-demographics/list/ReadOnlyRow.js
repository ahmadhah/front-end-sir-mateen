/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from "react";

export default function ReadOnlyRow({ individualdemographic }) {
  return (
    <tr>
      <td>
        <a href="#" className="text-gray-800 text-hover-primary mb-1">{individualdemographic.name}</a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {individualdemographic.gender}
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {individualdemographic.address}
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {individualdemographic.admission}
        </a>
      </td>
      <td className="text-gray-800 text-hover-primary mb-1">
      {individualdemographic.status}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
      <span className='badge badge-light-success'>{individualdemographic.status}</span>
            </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {individualdemographic.clienttype}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {individualdemographic.clienttype}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {individualdemographic.clienttype}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {individualdemographic.clienttype}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {individualdemographic.clienttype}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {individualdemographic.clienttype}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {individualdemographic.clienttype}
      </td>
    </tr>
  )


}