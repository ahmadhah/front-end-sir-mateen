/* eslint-disable */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import MedicationAdministrationRecordHeader from '../MedicationAdministrationRecordHeader'


function HealthDataHeader() {
    const location = useLocation()
    return (
        <div>
            <MedicationAdministrationRecordHeader/>
            <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-3 pb-0'>
                    <p className='text-gray-800 fs-2 fw-bolder'>Health Data</p>
                    <div className='d-flex overflow-auto h-60px'>
                        <ul className='nav nav-stretch nav-line-tabs border-transparent fs-6 flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/medicationadministrationrecord/data/due-medications' && 'active')
                                    }
                                    to='/medicationadministrationrecord/data/due-medications'
                                >
                                    Due Medications
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/medicationadministrationrecord/data/record-data' && 'active')
                                    }
                                    to='/medicationadministrationrecord/data/record-data'
                                >
                                    Record Data
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/medicationadministrationrecord/data/report' && 'active')
                                    }
                                    to='/medicationadministrationrecord/data/report'
                                >
                                    Report
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/medicationadministrationrecord/data/search' && 'active')
                                    }
                                    to='/medicationadministrationrecord/data/search'
                                >
                                    Search
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthDataHeader