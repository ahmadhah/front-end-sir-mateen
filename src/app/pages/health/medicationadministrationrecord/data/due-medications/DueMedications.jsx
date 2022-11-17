/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

function DueMedications() {
    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div style={{ backgroundColor: "BlanchedAlmond" }} className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                    <p className='ml-3 mt-3'><b>NOTE:</b> Due/Over due report shows medication(s) scheduled in Medication History (under the new 'Medication Schedules' section introduced in 9.0) and approved from MAR Configuration.</p>
                </div>
                <div className='card-body'>
                    <h1 className='mb-5'>Select Criteria</h1>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Date</label>
                            <input
                                type='date'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                                required
                            ></input>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Individual Name</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Individual Name'
                            ></input>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'> Scheduled Time</label>
                                    <input
                                        type='time'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder=''
                                        required
                                    ></input>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <div className='mt-8'>
                                        <input
                                            type='time'
                                            name='user_name'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder=''
                                            required
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                    Show Due
                                </span>
                                <input className='form-check-input' type='checkbox' value='' />
                            </label>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                    Show Overdue
                                </span>
                                <input className='form-check-input' type='checkbox' defaultChecked value='' />
                            </label>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Include Records with unspecified schedule </label>
                            <div className='form-check mt-2 mb-4'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='exampleRadios'
                                    id='exampleRadios1'
                                    value='option1'

                                />
                                <label className='form-check-label' for='exampleRadios1'>
                                    Yes
                                </label>
                            </div>
                            <div className='form-check mt-2 mb-4'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='exampleRadios'
                                    id='exampleRadios3'
                                    value='option3'
                                />
                                <label className='form-check-label' for='exampleRadios3'>
                                    No
                                </label>
                            </div>
                        </div>

                        <div className='d-flex flex-stack'>
                            <div>
                                <Link to='/health/medicationadministrationrecord'>
                                    <button className='btn btn-primary mt-4'>Cancel</button>
                                </Link>
                            </div>
                            <div className=''>
                                <button className='btn btn-primary mt-4  '>Show</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DueMedications