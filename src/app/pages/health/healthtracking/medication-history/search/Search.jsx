/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

function Search() {
    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>Medication History (Search)</h1>
                    <div className='row'>
                    <div style={{ backgroundColor: "BlanchedAlmond" }} className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                        <p className='mt-3'>Please select any of the following fields - Program (Site), Individual Name, Form ID or Date.</p>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Form ID</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Form ID'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Program (Site)</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Program (Site)'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Individual</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Individual'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Entered By</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Entered By'
                            ></input>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'> Submit Date From</label>
                            <input
                                type='date'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                                required
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'> Submit Date To</label>
                            <input
                                type='date'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                                required
                            ></input>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Status</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option value=''>Select Status</option>
                                <option value=''>In Prep</option>
                                <option value=''>Approved</option>
                                <option value=''>Discontinued</option>
                            </select>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Notification Level</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option value=''>Select Notification Level</option>
                                <option value=''>Low</option>
                                <option value=''>Medium</option>
                                <option value=''>High</option>
                            </select>
                        </div>

                        <div className='d-flex flex-stack'>
                            <div>
                                <Link to='/health/healthtracking'>
                                    <button className='btn btn-primary mt-4'>Cancel</button>
                                </Link>
                            </div>
                            <div className=''>
                                <button className='btn btn-primary mt-4  '>Search</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search