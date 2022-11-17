/* eslint-disable */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function HealthTrackingHeader() {
    const location = useLocation()
    return (
        <div>
            <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-3 pb-0'>
                    <div className='d-flex overflow-auto h-60px'>
                        <ul className='nav nav-stretch nav-line-tabs border-transparent fs-6 flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/appointments/new' && 'active')
                                    }
                                    to='/healthtracking/appointments/new'
                                >
                                    Appointments
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/immunization/new' && 'active')
                                    }
                                    to='/healthtracking/immunization/new'
                                >
                                    Immunization
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/seizures/new' && 'active')
                                    }
                                    to='/healthtracking/seizures/new'
                                >
                                    Seizures
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/menses/new' && 'active')
                                    }
                                    to='/healthtracking/menses/new'
                                >
                                    Menses
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/height-weight/new' && 'active')
                                    }
                                    to='/healthtracking/height-weight/new'
                                >
                                    Height/Weight
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/skin-wound/new' && 'active')
                                    }
                                    to='/healthtracking/skin-wound/new'
                                >
                                    Skin/Wound
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/infection-tracking/new' && 'active')
                                    }
                                    to='/healthtracking/infection-tracking/new'
                                >
                                    Infection Tracking
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/blood-glucose/new' && 'active')
                                    }
                                    to='/healthtracking/blood-glucose/new'
                                >
                                    Blood Glucose
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/respiratory-treatment/new' && 'active')
                                    }
                                    to='/healthtracking/respiratory-treatment/new'
                                >
                                    Respiratory Treatment
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/vital-signs/new' && 'active')
                                    }
                                    to='/healthtracking/vital-signs/new'
                                >
                                    Vital Signs
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/medication-history/new' && 'active')
                                    }
                                    to='/healthtracking/medication-history/new'
                                >
                                    Medication History
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/medication-review/new' && 'active')
                                    }
                                    to='/healthtracking/medication-review/new'
                                >
                                    Medication Review
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/health-care-reports/new' && 'active')
                                    }
                                    to='/healthtracking/health-care-reports/new'
                                >
                                    Health Care Reports
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/health-tracking-reports/monthly' && 'active')
                                    }
                                    to='/healthtracking/health-tracking-reports/monthly'
                                >
                                    Health Tracking Reports
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/health-tracking-update-history/search' && 'active')
                                    }
                                    to='/healthtracking/health-tracking-update-history/search'
                                >
                                    Health Tracking Update Reports
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/intake-elimination/new' && 'active')
                                    }
                                    to='/healthtracking/intake-elimination/new'
                                >
                                    Intake Elimination
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/lab-test/new' && 'active')
                                    }
                                    to='/healthtracking/lab-test/new'
                                >
                                    Lab Test
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/lab-test-group/new' && 'active')
                                    }
                                    to='/healthtracking/lab-test-group/new'
                                >
                                    Lab Test Group
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/healthtracking/lab-test-result/new' && 'active')
                                    }
                                    to='/healthtracking/lab-test-result/new'
                                >
                                    Lab Test Result
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthTrackingHeader