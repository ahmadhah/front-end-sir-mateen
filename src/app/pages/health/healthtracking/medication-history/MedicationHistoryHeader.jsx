/* eslint-disable */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import HealthTrackingHeader from '../HealthTrackingHeader'


function MedicationHistoryHeader() {
    const location = useLocation()
    return (
        <div>
            <HealthTrackingHeader/>
            <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-3 pb-0'>
                <p className='text-gray-800 fs-2 fw-bolder'>Medication History</p>
                    <div className='d-flex overflow-auto h-60px'>
                        <ul className='nav nav-stretch nav-line-tabs border-transparent fs-6 flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/medication-history/new' && 'active')
                                    }
                                    to='/healthtracking/medication-history/new'
                                >
                                    New
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/medication-history/search' && 'active')
                                    }
                                    to='/healthtracking/medication-history/search'
                                >
                                    Search
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/medication-history/report' && 'active')
                                    }
                                    to='/healthtracking/medication-history/report'
                                >
                                    Report
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/medication-history/archive' && 'active')
                                    }
                                    to='/healthtracking/medication-history/archive'
                                >
                                    Archive
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/medication-history/custom-report' && 'active')
                                    }
                                    to='/healthtracking/medication-history/custom-report'
                                >
                                    Custom Report
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/medication-history/import-from-excel' && 'active')
                                    }
                                    to='/healthtracking/medication-history/import-from-excel'
                                >
                                    Import from Excel
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/medication-history/medication-order-search' && 'active')
                                    }
                                    to='/healthtracking/medication-history/medication-order-search'
                                >
                                    Medication Order Search
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicationHistoryHeader