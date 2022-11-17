/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

function New() {
    return (
        <div>

            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>Health Care Report</h1>
                    <div className='row'>

                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                        <div className='row'>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>* Individuals</label>
                                <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example' required>
                                    <option value=''>Select Individuals</option>
                                </select>
                            </div>

                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>* Begin Date</label>
                                <input
                                    type='date'
                                    name='user_name'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder=''
                                    required
                                ></input>
                            </div>

                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>End Date</label>
                                <input
                                    type='date'
                                    name='user_name'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder=''
                                    required
                                ></input>
                            </div>
                        </div>
                    </div>

</div>

                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3 mt-5'>
                        <div className='row'>
                                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>Select Report Sections</label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                        Appointments
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                        Blood Glucose
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                        Height/Weight
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                        Immunization
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                        Infection Tracking
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                        Intake/Elimination
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                        Lab Test Result
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                        Medication History
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                        Menses
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                        Respiratory Treatment
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                        Seizures
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                        Skin/Wound
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                        Vital Signs
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                        Summary of General Event Reports
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                        Select All
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
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

        </div >
    )
}

export default New