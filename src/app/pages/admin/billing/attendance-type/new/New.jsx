/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import { useState, Fragment } from 'react'
import ReadOnlyRow from './ReadOnlyRow'

function New() {

    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>New Attendance Type</h1>
                    <div className='row'>
                        <h3 className='mb-5 mt-5 text-primary display-7'>Basic</h3>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Type Name</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Type Name'
                                required
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Use Time In/Out</label>
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
                    </div>
                </div>
            </div>


            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <div className='row'>
                        <h3 className='mb-5 mt-5 text-primary display-7'>Basic</h3>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                Use Direct Billing Units from Attendance
                                </span>
                                <input className='form-check-input' type='checkbox' value='' />
                            </label>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                Use Bundle Rules
                                </span>
                                <input className='form-check-input' type='checkbox' value='' />
                            </label>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                Use Date Range Grouping
                                </span>
                                <input className='form-check-input' type='checkbox' value='' />
                            </label>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                Use Leave Rule
                                </span>
                                <input className='form-check-input' type='checkbox' value='' />
                            </label>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                Use ISP Data as Supporting Document
                                </span>
                                <input className='form-check-input' type='checkbox' value='' />
                            </label>
                        </div>
                    </div>
                </div>
            </div>


            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <div className='row'>
                        <h3 className='mb-5 text-primary display-7'>Options</h3>
                        <div style={{ backgroundColor: "BlanchedAlmond" }} className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <p className='mt-3'>Once an Attendance Option is used the Option Name can no longer be changed.</p>
                        </div>


                        <div className='card mb-5 col-mb-10' id='kt_content'>
                            <div className='post d-flex flex-column-fluid' id='kt_post'>
                                <div id='kt_content_container' className='container-xxl'>
                                    <div className='card'>
                                        <h2 className='mt-6 mb-0'>Attendance List</h2>
                                        <div className='card-header border-0 pt-6'>
                                            <div className='card-title'>
                                                <div className='d-flex align-items-center position-relative overflow-auto my-1'>
                                                    <span className='svg-icon svg-icon-1 position-absolute ms-6'>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            width={24}
                                                            height={24}
                                                            viewBox='0 0 24 24'
                                                            fill='none'
                                                        >
                                                            <rect
                                                                opacity='0.5'
                                                                x='17.0365'
                                                                y='15.1223'
                                                                width='8.15546'
                                                                height={2}
                                                                rx={1}
                                                                transform='rotate(45 17.0365 15.1223)'
                                                                fill='black'
                                                            />
                                                            <path
                                                                d='M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z'
                                                                fill='black'
                                                            />
                                                        </svg>
                                                    </span>
                                                    <input
                                                        type='text'
                                                        data-kt-customer-table-filter='search'
                                                        className='form-control form-control-solid w-250px ps-15'
                                                        placeholder='Filter'
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='card-body table-responsive pt-0'>
                                            <table
                                                className='table border align-middle table-row-dashed fs-6 gy-5'
                                                id='kt_contacts_table'
                                            >
                                                <thead>
                                                    <tr className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                                                        <th className="min-w-200px">Option Name </th>
                                                        <th className="min-w-200px"> Option Code</th>
                                                        <th className="min-w-200px">Billing Units</th>
                                                        <th className="min-w-80px">Billable</th>
                                                    </tr>
                                                </thead>
                                                <tbody className='fw-bold text-gray-600'>
                                                    <Fragment>
                                                        <ReadOnlyRow />
                                                    </Fragment>
                                                </tbody>
                                                {/*end::Table body*/}
                                            </table>
                                            {/*end::Table*/}
                                        </div>
                                        {/*end::Card body*/}
                                    </div>
                                    {/*end::Card*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='d-flex flex-stack'>
                <div className=''>
                    <Link to='/billing/cost-center-type'>
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