import React from 'react'
import { Link } from 'react-router-dom'

function New() {

    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>New Unit Calculation Rule</h1>
                    <div className='row'>
                        <h3 className='mb-5 mt-5 text-primary display-7'>Unit Calculation Rule Details</h3>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Rule Name</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Rule Name'
                                required
                            ></input>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>* Bundle Rules</label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                    <span className='form-check-label text-gray-700 fs-6 ms-0 me-2'>
                                        Bundle for each day
                                    </span>
                                    <input className='form-check-input' type='checkbox' value='' required />
                                </label>
                                <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                    <span className='form-check-label text-gray-700 fs-6 ms-0 me-2'>
                                        Bundle for date range
                                    </span>
                                    <input className='form-check-input' type='checkbox' value='' required />
                                </label>
                                </div>
                            </div>
                        </div>


                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>* Calculation of Units</label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                    <span className='form-check-label text-gray-700 fs-6 ms-0 me-2'>
                                    Use duration from time In/Out
                                    </span>
                                    <input className='form-check-input' type='checkbox' value='' required />
                                </label>
                                <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                    <span className='form-check-label text-gray-700 fs-6 ms-0 me-2'>
                                    Use the specified unit
                                    </span>
                                    <input className='form-check-input' type='checkbox' value='' required />
                                </label>
                                <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                    <span className='form-check-label text-gray-700 fs-6 ms-0 me-2'>
                                    Use number of days
                                    </span>
                                    <input className='form-check-input' type='checkbox' value='' required />
                                </label>
                                <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                    <span className='form-check-label text-gray-700 fs-6 ms-0 me-2'>
                                    Use number of sessions
                                    </span>
                                    <input className='form-check-input' type='checkbox' value='' required />
                                </label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className='d-flex flex-stack'>
                <div className=''>
                    <Link to='/billing/unit-calculation-rule'>
                        <button className='btn btn-primary mt-4'>Back</button>
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