import React from 'react'
import { Link } from 'react-router-dom'

function Password() {
    return (
        <div>

            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>Change Password of Dark Army Studios</h1>
                    <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Login Name</label>
                            <p>dastudios</p>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Current Password</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Current Password'
                                required
                            ></input>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* New Password</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='New Password'
                                required
                            ></input>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Confirm New Password</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Confirm New Password'
                                required
                            ></input>
                        </div>

                    </div>

                </div>
            </div>



            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h3 className='mb-5 mt-5 text-primary display-7'>Password Policy</h3>
                    <div className='row'>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-3'>
                            <div className='d-flex align-items-center mb-1'>
                                {/* begin::Bullet */}
                                <span className='bullet bullet-vertical h-40px bg-warning me-5'></span>
                                {/* end::Bullet */}
                                {/* begin::Description */}
                                <div className='flex-grow-1'>
                                    <p className='text-gray-800 text-hover-primary fw-bolder fs-6'>
                                        <span className='text-muted fw-bold d-block'>Minimum length of password</span></p>
                                </div>
                                {/* end::Description */}
                                <span className='badge badge-light-warning fs-8 fw-bolder'>6</span>
                            </div>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-3'>
                            <div className='d-flex align-items-center mb-1'>
                                {/* begin::Bullet */}
                                <span className='bullet bullet-vertical h-40px bg-primary me-5'></span>
                                {/* end::Bullet */}
                                {/* begin::Description */}
                                <div className='flex-grow-1'>
                                    <p className='text-gray-800 text-hover-primary fw-bolder fs-6'>
                                        <span className='text-muted fw-bold d-block'>Minimum number of upper case letters</span></p>
                                </div>
                                {/* end::Description */}
                                <span className='badge badge-light-primary fs-8 fw-bolder'>1</span>
                            </div>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-3'>
                            <div className='d-flex align-items-center mb-1'>
                                {/* begin::Bullet */}
                                <span className='bullet bullet-vertical h-40px bg-success me-5'></span>
                                {/* end::Bullet */}
                                {/* begin::Description */}
                                <div className='flex-grow-1'>
                                    <p className='text-gray-800 text-hover-primary fw-bolder fs-6'>
                                        <span className='text-muted fw-bold d-block'>Minimum number of digits</span></p>
                                </div>
                                {/* end::Description */}
                                <span className='badge badge-light-success fs-8 fw-bolder'>0</span>
                            </div>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-3'>
                            <div className='d-flex align-items-center mb-1'>
                                {/* begin::Bullet */}
                                <span className='bullet bullet-vertical h-40px bg-danger me-5'></span>
                                {/* end::Bullet */}
                                {/* begin::Description */}
                                <div className='flex-grow-1'>
                                    <p className='text-gray-800 text-hover-primary fw-bolder fs-6'>
                                        <span className='text-muted fw-bold d-block'>Minimum number of other characters (!@#$%^&*;:'", etc.)</span></p>
                                </div>
                                {/* end::Description */}
                                <span className='badge badge-light-danger fs-8 fw-bolder'>1</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <div className='d-flex flex-stack'>
                <div>
                    <Link to='/settings'>
                        <button className='btn btn-primary mt-4 me-4'>Cancel</button>
                    </Link>
                    <Link to='/settings'>
                        <button className='btn btn-primary mt-4'>Back</button>
                    </Link>
                </div>
                <div>
                    <button className='btn btn-primary mt-4  '>Change Password</button>
                </div>
            </div>

        </div>
    )
}

export { Password }