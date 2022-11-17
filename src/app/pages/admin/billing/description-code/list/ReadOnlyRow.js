/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from "react";

export default function ReadOnlyRow({ descriptioncodelist }) {
  return (
    <tr>

      <td>
        <div className='form-check form-check-sm form-check-custom form-check-solid'>
          <input
            className='form-check-input widget-13-check'
            type='checkbox'
            defaultValue={1}
          />
        </div>
      </td>
      <td>
        <a href="#" className="text-gray-800 text-hover-primary mb-1">{descriptioncodelist.name}</a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          { descriptioncodelist.name}
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {descriptioncodelist.name }
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {descriptioncodelist.address}
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {descriptioncodelist.address}
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {descriptioncodelist.address}
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {descriptioncodelist.address}
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {}
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {}
        </a>
      </td>
      <td>
        <a
          href='#'
          className="text-gray-800 text-hover-primary mb-1"
        >
          {descriptioncodelist.address}
        </a>
      </td>
      <td>
      <span className='badge badge-light-success'>{descriptioncodelist.status}</span>
      </td>
    </tr>
  )
}