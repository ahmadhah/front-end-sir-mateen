import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AdminBillingHeader from '../AdminBillingHeader'

function CustomAttendancePDFConfigurationHeader() {
    const location = useLocation()
  return (
    <div>
        <AdminBillingHeader/>
        <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-9 pb-0'>
                    <p className='text-gray-800 fs-2 fw-bolder'>Custom Attendance PDF Configuration</p>
                    <div className='d-flex overflow-auto h-55px'>
                        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/billing/custom-attendance-pdf-configuration/new' && 'active')
                                    }
                                    to='/billing/custom-attendance-pdf-configuration/new'
                                >
                                    New
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/billing/custom-attendance-pdf-configuration/list' && 'active')
                                    }
                                    to='/billing/custom-attendance-pdf-configuration/list'
                                >
                                    List
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/billing/custom-attendance-pdf-configuration/archive' && 'active')
                                    }
                                    to='/billing/custom-attendance-pdf-configuration/archive'
                                >
                                    Archive
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CustomAttendancePDFConfigurationHeader