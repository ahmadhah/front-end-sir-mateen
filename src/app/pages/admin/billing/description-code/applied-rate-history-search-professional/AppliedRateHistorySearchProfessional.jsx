import React from 'react'
import { Link } from 'react-router-dom'

function AppliedRateHistorySearchProfessional() {
    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>Applied Rate History (Search)</h1>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Billing Data ID</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Billing Data ID'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Program (Site)</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Program (Site)'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Service Description Code</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option selected>Select Service Description Code</option>
                                <option value='1'>(A Supportive Hand) LSD3 ADT - Transportation (Ambulatory) (T2003)</option>
                                <option value='1'>(A Supportive Hand) LSD3 ADT - Transportation (Non-Ambulatory) (T2003)</option>
                                <option value='2'>CDC - LSD3 ADT - Transportation (Ambulatory) (T2003)</option>
                                <option value='2'>CDC - LSD3 ADT - Transportation (Non-Ambulatory) (T2003)</option>
                                <option value='2'>CDC - LSD3 - Supported Employment (T2021)</option>
                                <option value='2'>CDC - LSD3 ADT - 1:1 (S5102)</option>
                                <option value='2'>CDC - LSD3 ADT - 1:10 (S5102)</option>
                                <option value='2'>CDC - LSD3 ADT - 1:3 (S5102)</option>
                                <option value='2'>CDC - LSD3 ADT - 1:5 (S5102)</option>
                                <option value='2'>CDC - LSD3 ADT - 1:6 (S5102)</option>
                                <option value='2'>CDC - LSD3 ADT - Transportation (Ambulatory) $20 Only (T2003)</option>
                                <option value='2'>GENERAL REVENUE - LSD3 ADT - 1:1 (S5102)</option>
                                <option value='2'>GENERAL REVENUE - LSD3 ADT - 1:10 (S5102)</option>
                                <option value='2'>GENERAL REVENUE - LSD3 ADT - 1:3 (S5102)</option>
                                <option value='2'>GENERAL REVENUE - LSD3 ADT - 1:5 (S5102)</option>
                                <option value='2'>GENERAL REVENUE - LSD3 ADT - 1:6 (S5102)</option>
                                <option value='2'>GENERAL REVENUE - LSD3 ADT - Transportation (Ambulatory) (T2003)</option>
                                <option value='2'>GENERAL REVENUE - LSD3 ADT - Transportation (Non-Ambulatory) (T2003)</option>
                                <option value='2'>GENERAL REVENUE - Transportation (Ambulatory) $20 Only (T2003)</option>
                                <option value='2'>LSD3 - Supported Employment (T2021)</option>
                                <option value='2'>LSD3 ADT - 1:1 (S5102)</option>
                                <option value='2'>LSD3 ADT - 1:10 (S5102)</option>
                                <option value='2'>LSD3 ADT - 1:3 (S5102)</option>
                                <option value='2'>LSD3 ADT - 1:5 (S5102)</option>
                                <option value='2'>LSD3 ADT - 1:6 (S5102)</option>
                                <option value='2'>LSD3 ADT - Transportation (Ambulatory) $20 Only (T2003)</option>
                                <option value='2'>LSD3 ADT - Transportation (Ambulatory) (T2003)</option>
                                <option value='2'>LSD3 ADT - Transportation (Non-Ambulatory) (T2003)</option>
                                <option value='2'>PRIVATE - LSD3 ADT - Transportation (Non-Ambulatory) (T2003)</option>
                                <option value='2'>PRIVATE - LSD3 ADT - 1:10 (S5102)</option>
                                <option value='2'>PRIVATE - LSD3 ADT - 1:3 (S5102)</option>
                                <option value='2'>PRIVATE - LSD3 ADT - 1:5 (S5102)</option>
                                <option value='2'>PRIVATE - LSD3 ADT - ADVANCED (S5102)</option>
                                <option value='2'>PRIVATE - LSD3 ADT - MINIMAL (S5102)</option>
                                <option value='2'>PRIVATE - LSD3 ADT - MODERATE (S5102)</option>
                                <option value='2'>PRIVATE - LSD3 ADT - Transportation (Ambulatory) (T2003)</option>
                                <option value='2'>PRIVATE - LSD3 ADT - Transportation (Ambulatory) $20 Only (T2003)</option>
                                <option value='2'>Special Enrollment - LSD3 ADT - 1:1 (S5102)</option>
                                <option value='2'>Special Enrollment - LSD3 ADT - 1:10 (S5102)</option>
                                <option value='2'>Special Enrollment - LSD3 ADT - 1:3 (S5102)</option>
                                <option value='2'>Special Enrollment - LSD3 ADT - 1:5 (S5102)</option>
                                <option value='2'>Special Enrollment - LSD3 ADT - 1:6 (S5102)</option>
                                <option value='2'>Special Enrollment (S5102)</option>
                            </select>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Update Date From</label>
                            <input
                                type='date'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                                required
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Update Date To</label>
                            <input
                                type='date'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                                required
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Updated By</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Updated By'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Individual</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Individual'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Authorization ID</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Authorization ID'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Service Date From</label>
                            <input
                                type='date'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                                required
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Service Date To</label>
                            <input
                                type='date'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                                required
                            ></input>
                        </div>
                        <div className='d-flex flex-stack'>
                            <div>
                                <Link to='/billing/description-code'>
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

export default AppliedRateHistorySearchProfessional