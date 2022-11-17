import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import individualData from '../../individual-mock-data.json'
import IndividualListingRow from './IndividualListingRow'

const IndividualListing = () => {
    const [individualListing, setIndividualListing] = useState<Object[]>(individualData)

    const history = useHistory()
    useEffect(() => {
        setIndividualListing(individualData)
    }, [])
    return (
        <div>
            <div className='card mb-5 col-mb-10' id='kt_content'>
                <div className='post d-flex flex-column-fluid' id='kt_post'>
                    <div id='kt_content_container' className='container-xxl'>
                        <div className='card'>
                            <h2 className='mt-6 mb-0'>Individual Search</h2>
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
                                    id='kt_individual_table'
                                >
                                    <thead>
                                        <tr className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                                            <th className="min-w-50px">FORM ID</th>
                                            <th className="min-w-100px">INDIVIDUAL</th>
                                            <th className="min-w-200px">Social Security Number</th>
                                            <th className="min-w-100px">Medicaid Number</th>
                                            <th className="min-w-100px">Status</th>
                                            <th className="min-w-100px">Birth Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {individualListing.map((indvidual, index) =>(
                                            <Fragment key={index}>
                                                <IndividualListingRow indvidual={indvidual} />
                                            </Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualListing