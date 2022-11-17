/* eslint-disable */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import HealthTrackingHeader from '../HealthTrackingHeader'


function LabTestResultHeader() {
    const location = useLocation()
    return (
        <div>
            <HealthTrackingHeader/>
            <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-3 pb-0'>
                <p className='text-gray-800 fs-2 fw-bolder'>Lab Test Result</p>
                    <div className='d-flex overflow-auto h-60px'>
                        <ul className='nav nav-stretch nav-line-tabs border-transparent fs-6 flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/lab-test-result/new' && 'active')
                                    }
                                    to='/healthtracking/lab-test-result/new'
                                >
                                    New
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/lab-test-result/search' && 'active')
                                    }
                                    to='/healthtracking/lab-test-result/search'
                                >
                                    Search
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/lab-test-result/report' && 'active')
                                    }
                                    to='/healthtracking/lab-test-result/report'
                                >
                                    Report
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LabTestResultHeader