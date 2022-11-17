/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

function New() {
  return (
    <div>
      <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
        <div className='card-body'>
          <h1 className='mb-5'>Type Information (New)</h1>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
            <label className=' fw-bold fs-6 mb-2'>Type</label>
              <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                <option value=''>Select Type</option>
                <option value=''>Account</option>
                <option value=''>Card</option>
                <option value=''>Depposit</option>
                <option value=''>Expense</option>
                <option value=''>Unit</option>
              </select>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Label</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Label'
                required
              ></input>
            </div>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Comments</label>
              <textarea
                type='text-area'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Add comments here...'
              ></textarea>
              <div className='mt-2'>About 3000 characters left</div>
            </div>
            <div className='d-flex justify-content-end'>
              <div>
                <button className='btn btn-secondary mt-4  '>Add More</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='d-flex flex-stack'>
        <div>
          <Link to='/admin/personalfinance'>
            <button className='btn btn-primary mt-4'>Cancel</button>
          </Link>
        </div>
        <div>
          <button className='btn btn-primary mt-4  '>Save</button>
        </div>
      </div>

    </div>
  )
}

export default New