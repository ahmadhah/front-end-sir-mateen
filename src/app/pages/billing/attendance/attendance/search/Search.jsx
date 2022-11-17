import React from 'react'
import {Link} from 'react-router-dom'

function Search() {
  return (
    <div>
      <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                <h1 className='mb-4'>Attendance Data (Search)</h1>
                    <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Individual</label>
                            <input
                                type='search'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Individual'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>Start Date</label>
                            <input
                                type='date'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>End Date</label>
                            <input
                                type='date'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Attendance Type</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option selected>Select Attendance Type</option>
                                <option value='1'>ADT Attendance</option>
                                <option value='2'>Supported Employement</option>
                                <option value='3'>Transportation</option>
                            </select>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Service Description (Code)</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option selected>Select Description (Code)</option>
                                {/* <option value='1'>Supported Employement</option>
                                <option value='1'>Transportation</option> */}
                                
                            </select>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'> Program Site</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option selected>Select Program Site</option>
                                {/* <option value='1'>Supported Employement</option>
                                <option value='1'>Transportation</option> */}
                                
                            </select>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Service Authorization Status</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option selected>Select Service Authorization Status</option>
                                <option value='1'> Approved</option>
                                <option value='2'>Discontinues</option>
                            </select>
                        </div>
                    </div>
                    <div className='d-flex flex-stack'>
                    <div>
                        <Link to='/billing/attendance'>
                            <button className='btn btn-primary mt-4'>Cancel</button>
                        </Link>
                        </div>
                        <div>
                            <button className='btn btn-primary mt-4 me-4'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Search