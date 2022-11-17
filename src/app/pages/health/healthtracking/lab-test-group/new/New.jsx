/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

function New() {
    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>Create New Lab Test Group</h1>
                    <div className='row'>
                        <h3 className='mb-5 mt-5 text-primary display-7'>Lab Test Group Information</h3>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Lab Test Group Name</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Lab Test Group Name'
                                required
                            ></input>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Lab Test(s)</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example' required>
                                <option value=''>Select Lab Test(s)</option>
                            </select>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Description</label>
                            <textarea
                                type='text-area'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Add description here...'
                            ></textarea>
                            <div className='mt-2'>About 3000 characters left</div>
                        </div>

                    </div>
                    <div className='d-flex flex-stack'>
                        <div>
                            <Link to='/health/healthtracking'>
                                <button className='btn btn-primary mt-4'>Cancel</button>
                            </Link>
                        </div>
                        <div className=''>
                            <button className='btn btn-primary mt-4  '>Save</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default New