import React from 'react'
export default function Dropdown4() {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <select
        className='form-select'
        aria-label='Default select example'
        style={{marginLeft: '5px'}}
      >
        <option selected>Order_ID</option>
        <option value='1'>One</option>
      </select>
      <select
        className='form-select'
        aria-label='Default select example'
        style={{marginLeft: '5px'}}
      >
        <option selected>Company</option>
        <option value='1'>One</option>
      </select>
      <select
        className='form-select'
        aria-label='Default select example'
        style={{marginLeft: '5px'}}
      >
        <option selected>Country</option>
        <option value='1'>One</option>
      </select>
      <select
        className='form-select'
        aria-label='Default select example'
        style={{marginLeft: '5px'}}
      >
        <option selected>Active</option>
        <option value='1'>One</option>
      </select>
    </div>
  )
}
