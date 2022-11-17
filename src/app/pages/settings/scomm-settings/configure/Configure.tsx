/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

function SCommSettings() {
    return (
        <div>

            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>SComm Settings</h1>
                    <div className='row'>
                        <h3 className='mb-5 mt-5 text-primary display-7'>Message Settings</h3>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                    Message footer
                                </span>
                                <input className='form-check-input' type='checkbox' value='' />
                            </label>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <textarea
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Add description here...'
                            ></textarea>
                            <div className='mt-2'>About 1000 characters left</div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                    Auto response
                                </span>
                                <input className='form-check-input' type='checkbox' value='' />
                            </label>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <textarea
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Add description here...'
                            ></textarea>
                            <div className='mt-2'>About 1000 characters left</div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Show messages in Inbox, Sent Items, Drafts and Trash for last</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option value=''>Select Option</option>
                                <option value=''>1 Week</option>
                                <option value=''>1 Month</option>
                                <option value=''>2 Month</option>
                            </select>
                        </div>
                    </div>

                    <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                        <div className='card-body'>
                            <h3 className='mb-5 mt-5 text-primary display-7'>Manage Folders</h3>
                            <div className='row'>

                                <div className='card mb-5 col-mb-10' id='kt_content'>
                                    <div className='post d-flex flex-column-fluid' id='kt_post'>
                                        <div id='kt_content_container' className='container-xxl'>
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
                                                            placeholder='Search Individual'
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='card-body table-responsive pt-0'>
                                                <table
                                                    className='table align-middle table-row-dashed fs-6 gy-5'
                                                    id='kt_contacts_table'
                                                >
                                                    <thead>
                                                        <tr className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                                                            <th className="min-w-200px">Folder Name</th>
                                                            <th className="min-w-200px">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className='fw-bold text-gray-600'>
                                                        <tr>
                                                            <td>
                                                                Inbox
                                                            </td>
                                                            <td>

                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                Sent Items
                                                            </td>
                                                            <td>

                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                Drafts
                                                            </td>
                                                            <td>

                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                Trash
                                                            </td>
                                                            <td>

                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                    {/*end::Table body*/}
                                                </table>
                                                {/*end::Table*/}
                                            </div>
                                            {/*end::Card body*/}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='d-flex justify-content-end'>
                            <div>
                                <button className='btn btn-primary mt-4  '>Create</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export { SCommSettings }