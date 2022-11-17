/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

function New() {
  return (
    <div>
      <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
        <div className='card-body'>
          <h1 className='mb-5'>Merchant Information (New)</h1>
          <div className='row'>

            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Name</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Name'
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
          </div>


          <div className='row'>
            <h3 className='mt-5 mb-5 text-primary display-7'>Address</h3>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Address</label>
              <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                  <input
                    type='text'
                    name='user_name'
                    className='form-control form-control-solid mb-3 mb-lg-0'
                    placeholder='Street 1'
                  ></input>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                  <input
                    type='text'
                    name='user_name'
                    className='form-control form-control-solid mb-3 mb-lg-0'
                    placeholder='Street 2'
                  ></input>
                </div>
              </div>
            </div>

            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
              <div className='row'>
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                  <input
                    type='text'
                    name='user_name'
                    className='form-control form-control-solid mb-3 mb-lg-0'
                    placeholder='City'
                  ></input>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                  <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                    <option value=''>Select State</option>
                  </select>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                  <input
                    type='text'
                    name='user_name'
                    className='form-control form-control-solid mb-3 mb-lg-0'
                    placeholder='Zip Code'
                  ></input>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                  <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                    <option value=''>Select Country</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-2'>
              <label className=' fw-bold fs-6 mb-2'>Phone 1</label>
              <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                  <input
                    type='text'
                    name='user_name'
                    className='form-control form-control-solid mb-3 mb-lg-0'
                    placeholder=''
                  ></input>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                  <input
                    type='text'
                    name='user_name'
                    className='form-control form-control-solid mb-3 mb-lg-0'
                    placeholder='Extension'
                  ></input>
                </div>
              </div>
            </div>

            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-2'>
              <label className=' fw-bold fs-6 mb-2'>Phone 2</label>
              <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                  <input
                    type='text'
                    name='user_name'
                    className='form-control form-control-solid mb-3 mb-lg-0'
                    placeholder=''
                  ></input>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                  <input
                    type='text'
                    name='user_name'
                    className='form-control form-control-solid mb-3 mb-lg-0'
                    placeholder='Extension'
                  ></input>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-3'>Email</label>
              <input
                type='email'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Email'
              ></input>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-3'>Web Address</label>
              <input
                type='email'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Web Address'
              ></input>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-3'>Fax</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Fax'
              ></input>
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