import React from 'react'
import {Link} from 'react-router-dom'

function Summary() {
  return (
    <div>
       <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                <h1 className='mb-4'>Attendance Summary (Search)</h1>
                    <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Program Site</label>
                            <input
                                type='search'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Program Site'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Service Description Code</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option selected>Select Service Description Code</option>
                                <option value='1'>(A Supportive Hand) LSD3 ADT - Transportation (Ambulatory) (T2003)</option>
                                <option value='2'>CDC - LSD3 ADT - Transportation (Ambulatory) (T2003)</option>
                                <option value='2'>CDC - LSD3 ADT - 1:1 (S5102)</option>
                                <option value='2'>CDC - LSD3 ADT - 1:10 (S5102)</option>
                                <option value='2'>CDC - LSD3 ADT - 1:3 (S5102)</option>
                                <option value='2'>CDC - LSD3 ADT - 1:5 (S5102)</option>
                                <option value='2'>CDC - LSD3 ADT - Transportation (Ambulatory) $20 Only (T2003)</option>
                                <option value='2'>GENERAL REVENUE - LSD3 ADT - 1:10 (S5102)</option>
                                <option value='2'>GENERAL REVENUE - LSD3 ADT - 1:5 (S5102)</option>
                                <option value='2'>GENERAL REVENUE - LSD3 ADT - Transportation (Ambulatory) (T2003)</option>
                                <option value='2'>GENERAL REVENUE - Transportation (Ambulatory) $20 Only (T2003)</option>
                                <option value='2'>LSD3 - Supported Employment (T2021)</option>
                                <option value='2'>LSD3 ADT - 1:1 (S5102)</option>
                                <option value='2'>LSD3 ADT - 1:10 (S5102)</option>
                                <option value='2'>LSD3 ADT - 1:3 (S5102)</option>
                                <option value='2'>LSD3 ADT - 1:5 (S5102)</option>
                                <option value='2'>LSD3 ADT - 1:6 (S5102)</option>
                                <option value='2'>LSD3 ADT - Transportation (Ambulatory) $20 Only (T2003)</option>
                                <option value='2'>LSD3 ADT - Transportation (Non-Ambulatory) (T2003)</option>
                                <option value='2'>PRIVATE - LSD3 ADT - 1:10 (S5102)</option>
                                <option value='2'>PRIVATE - LSD3 ADT - 1:3 (S5102)</option>
                                <option value='2'>PRIVATE - LSD3 ADT - 1:5 (S5102)</option>
                                <option value='2'>PRIVATE - LSD3 ADT - MINIMAL (S5102)</option>
                                <option value='2'>PRIVATE - LSD3 ADT - MODERATE (S5102)</option>
                                <option value='2'>PRIVATE - LSD3 ADT - Transportation (Ambulatory) (T2003)</option>
                            </select>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Attendance Type</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option selected>Select Attendance Type</option>
                                <option value='1'>ADT Attendance -- Time In/Out required</option>
                                <option value='2'>Supported Employment -- Time In/Out required</option>
                                <option value='3'>Transportation -- Time In/Out not required</option>
                            </select>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>Start Date</label>
                            <input
                                type='date'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>End Date</label>
                            <input
                                type='date'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'> Attendence Data Form ID</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Attendence Data Form ID'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Status</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option selected>Select Status</option>
                                <option value='1'>In Prep</option>
                                <option value='2'>Approved</option>
                                <option value='3'>Incomplete</option>
                                <option value='4'>Submited For Billing</option>
                                <option value='5'>Deleted</option>
                            </select>
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
                            <label className=' fw-bold fs-6 mb-2'>Authorized ID</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Authorized ID'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>Services Authorized Status</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option selected>Select Services Authorized Status</option>
                                <option value='1'>Approved</option>
                                <option value='2'>Discontinued</option>
                                <option value='3'>Deleted</option>
                                
                            </select>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>Entered By</label>
                            <input
                                type='search'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Entered By'
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

export default Summary