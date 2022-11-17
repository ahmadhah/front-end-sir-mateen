/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from "react";

export default function ReadOnlyRow({ insurance }) {
  return (
    <tr>
      <td>
        <a href="/clientdetails" className="text-gray-800 text-hover-primary mb-1">{insurance.name}</a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {insurance.gender}
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {insurance.address}
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {insurance.admission}
        </a>
      </td>
      <td className="text-gray-800 text-hover-primary mb-1">
      {insurance.status}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
      <span className='badge badge-light-success'>{insurance.status}</span>
            </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {insurance.clienttype}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {insurance.clienttype}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {insurance.clienttype}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {insurance.clienttype}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {insurance.clienttype}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {insurance.clienttype}
      </td>
      <td className='text-dark fw-bolder text-hover-primary fs-6'>
        {insurance.clienttype}
      </td>
    </tr>
  )


}