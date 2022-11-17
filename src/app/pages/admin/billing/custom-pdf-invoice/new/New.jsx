import React from 'react'
import { Link } from 'react-router-dom'

function New() {

    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>Billing PDF Invoice</h1>
                    <div className='row'>
                        <h3 className='mb-5 mt-5 text-primary display-7'>Billing PDF Invoice</h3>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>PDF Name</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Organization Name'
                                required
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Title</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Title'
                                required
                            ></input>
                        </div>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Header</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Header'
                                required
                            ></input>
                        </div>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Footer</label>
                            <textarea
                                type='text-area'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Add description here...'
                            ></textarea>
                            <div className='mt-2'>About 500 characters left</div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                    Show Signature
                                </span>
                                <input className='form-check-input' type='checkbox' checked value='' />
                            </label>
                        </div>
                    </div>
                </div>
            </div>


            <div className='d-flex flex-stack'>
                <div className=''>
                    <Link to='/billing/custom-pdf-invoice'>
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