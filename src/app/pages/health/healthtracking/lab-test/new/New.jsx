/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

function New() {
    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>Create New Lab Test</h1>
                    <div className='row'>
                        <h3 className='mb-5 mt-5 text-primary display-7'>Lab Test Information</h3>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Lab Test Name</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Lab Test Name'
                                required
                            ></input>
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

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Preparation Instructions</label>
                            <textarea
                                type='text-area'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Add preparation instructions here...'
                            ></textarea>
                            <div className='mt-2'>About 3000 characters left</div>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Type</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example' required>
                                <option value=''>Select Type</option>
                                <option value=''>Blood</option>
                                <option value=''>Urine</option>
                                <option value=''>Swab</option>
                                <option value=''>Other</option>
                            </select>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Type</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example' required>
                                <option value=''>Select Type</option>
                                <option value=''>ml</option>
                                <option value=''>mg</option>
                                <option value=''>g</option>
                                <option value=''>mcg</option>
                                <option value=''>IU</option>
                                <option value=''>mEq</option>
                                <option value=''>Units</option>
                                <option value=''>Unit Dose</option>
                                <option value=''>Application</option>
                                <option value=''>Sprays</option>
                                <option value=''>Puffs</option>
                                <option value=''>drops(gtts)</option>
                                <option value=''>Other</option>
                            </select>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Code</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Code'
                            ></input>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>Range</label>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='Minimum'
                                    ></input>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <div className='mt-9'>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='Maximum'
                                    ></input>
                                    </div>
                                </div>
                            </div>
                        </div>


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
    )
}

export default New