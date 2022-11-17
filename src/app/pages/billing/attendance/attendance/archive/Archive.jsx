import React from 'react'
import {Link} from 'react-router-dom'

function Archive() {
    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-4'>Archived Attendance Data Search</h1>
                    <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Form ID</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Form ID'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>Individual</label>
                            <input
                                type='search'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Individual'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>Archived By</label>
                            <input
                                type='search'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Archived By'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>Archive Date From</label>
                            <input
                                type='date'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>Archive Date To</label>
                            <input
                                type='date'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
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

export default Archive