import React from 'react'
import { Link } from 'react-router-dom'

function Search() {
    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-4'>T Log (Search)</h1>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Form ID</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Form ID'
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
                            <label className=' fw-bold fs-6 mb-2'>Program (Site)</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Program (Site)'
                            ></input>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Entered By</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Entered By'
                            ></input>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
                            <label className=' fw-bold fs-6 mb-2'>Created Date From</label>
                            <input
                                type='date'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Created Date To</label>
                            <input
                                type='date'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Notification Level</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option selected>Select Notification Level</option>
                                <option value='low'>Low</option>
                                <option value='medium'>Medium</option>
                                <option value='high'>High</option>
                            </select>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Status</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option selected>Select Status</option>
                                <option value='1'>Submitted</option>
                                <option value='2'>Deleted</option>
                            </select>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Type</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option selected>Select Type</option>
                                <option value='health'>Health</option>
                                <option value='notes'>Notes</option>
                                <option value='followup'>Follow Up</option>
                                <option value='behaviour'>Behaviour</option>
                                <option value='general'>General</option>
                            </select>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Acknowledge Status</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option selected>Select Acknowledge Status</option>
                                <option value='unacknowledge'>Unacknowledge</option>
                                <option value='acknowledge'>Acknowledge</option>
                            </select>
                        </div>
                    </div>

                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3 '>
                        <label className=' fw-bold fs-6 mb-2'>Summary </label>
                        <textarea
                            type='date'
                            name='user_name'
                            className='form-control form-control-solid mb-3 mb-lg-0'
                            placeholder='Write summary here...'
                        ></textarea>
                    </div>

                    <div className='d-flex flex-stack'>
                        <div>
                            <Link to='/individual/care'>
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

export default Search