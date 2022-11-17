/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

function New() {
    return (
        <div>

            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>Care Plan Template (New)</h1>
                    <div className='row'>
                        <h3 className='mb-5 mt-5 text-primary display-7'>Care Plan Template Details</h3>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Care Plan Name</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Care Plan Name'
                                required
                            ></input>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Problem(s)</label>
                            <textarea
                                type='text-area'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Add problems here...'
                            ></textarea>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Goal(s)</label>
                            <textarea
                                type='text-area'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Add goals here...'
                            ></textarea>
                        </div>


                        <div className='separator border-gray-200 mt-8'></div>
                        <h3 className='mb-5 mt-5 text-primary display-7'>Approach(es)</h3>
                        <div className='separator border-gray-200 mb-3'></div>

                        <div className='card-body'>
                            <h6 className='d-flex justify-content-start text-center p-3'>No data available in table</h6>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <div>
                                <button className='btn btn-secondary mt-4'>Add Approach</button>
                            </div>
                        </div>

                        <div className='separator border-gray-200 mt-8'></div>
                        <h3 className='mb-5 mt-5 text-primary display-7'>Attachment(s)</h3>
                        <div className='separator border-gray-200 mb-3'></div>
                        <div style={{ backgroundColor: "BlanchedAlmond" }} className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                        <p className='mt-3'>The total size of all attachments cannot exceed 10 MB</p>
                        </div>
                        <div className='d-flex flex-stack'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 me-4'>
                            <label className=' fw-bold fs-6 mb-2'>Add File</label>
                            <input
                                type='file'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Scan File</label>
                            <input
                                type='file'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
                        </div>
                        </div>
                        
                        <div className='d-flex flex-stack'>
                            <div>
                                <Link to='/health/careplan'>
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

export default New