/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from "react";

export default function ReadOnlyRow({ }) {
  return (
    <tr>
      <td>
        <div className='mt-3'>
          <input
            type='text'
            name='user_name'
            className='form-control form-control-solid mb-3 mb-lg-0'
            placeholder=''
          ></input>
        </div>
      </td>
      <td>
        <div className='mt-3'>
          <input
            type='text'
            name='user_name'
            className='form-control form-control-solid mb-3 mb-lg-0'
            placeholder=''
          ></input>
        </div>
      </td>
      <td>
        <div className='mt-3'>
          <input
            type='text'
            name='user_name'
            className='form-control form-control-solid mb-3 mb-lg-0'
            placeholder=''
          ></input>
        </div>
      </td>

      <td>
        <div className='form-check form-check-sm form-check-custom form-check-solid'>
          <input
            className='form-check-input widget-13-check'
            type='checkbox'
            defaultValue={1}
          />
        </div>
      </td>
    </tr>
  )
}