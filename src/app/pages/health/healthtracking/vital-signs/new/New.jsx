/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import { nanoid } from '@reduxjs/toolkit'
import { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import data from '../../../../../../mock-data.json'
import ReadOnlyRow from './ReadOnlyRow'

export default function New() {
    const [vitalsigns, setVitalSigns] = useState(data)

    return (
        <div>
            <div className='card mb-5 col-mb-10' id='kt_content'>
                <div className='post d-flex flex-column-fluid' id='kt_post'>
                    <div id='kt_content_container' className='container-xxl'>
                        <div className='card'>
                            <h2 className='mt-6 mb-0'>Select Program For Vital Signs</h2>
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
                                    className='table align-middle table-row-dashed fs-6 gy-5'
                                    id='kt_contacts_table'
                                >
                                    <thead>
                                        <tr className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                                            <th className="min-w-200px">Program Name</th>
                                            <th className="min-w-200px">Site Name</th>
                                            <th className="min-w-200px">Program Type</th>
                                            <th className="min-w-200px">Cost Center Number</th>
                                            <th className="min-w-200px">Program ID</th>
                                        </tr>
                                    </thead>
                                    <tbody className='fw-bold text-gray-600'>
                                        {vitalsigns.map((vitalsigns) => (
                                            <Fragment>
                                                <ReadOnlyRow
                                                    vitalsigns={vitalsigns}
                                                />
                                            </Fragment>
                                        ))}
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

            <div className='d-flex flex-stack'>
                <div>
                    <Link to='/health/healthtracking'>
                        <button className='btn btn-primary mt-4'>Back</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}
