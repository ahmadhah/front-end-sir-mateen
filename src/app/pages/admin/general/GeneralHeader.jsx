/* eslint-disable */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function GeneralHeader() {
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
                                        (location.pathname === '/general/user/new' && 'active')
                                    }
                                    to='/general/user/new'
                                >
                                    User
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/general/activity-tracking/view' && 'active')
                                    }
                                    to='/general/activity-tracking/view'
                                >
                                    Activity Tracking
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/general/caseload/archive' && 'active')
                                    }
                                    to='/general/caseload/archive'
                                >
                                    Caseload
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/general/change-password/user-list' && 'active')
                                    }
                                    to='/general/change-password/user-list'
                                >
                                    Change Password
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/general/shared-contact/new' && 'active')
                                    }
                                    to='/general/shared-contact/new'
                                >
                                    Shared Contact
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <p className='nav-link text-active-primary me-4' > Refresh</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralHeader