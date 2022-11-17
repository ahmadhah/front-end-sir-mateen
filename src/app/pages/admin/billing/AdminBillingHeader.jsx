/* eslint-disable */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function AdminBillingHeader() {
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
                                        (location.pathname === '/billing/carrier/new' && 'active')
                                    }
                                    to='/billing/carrier/new'
                                >
                                    Carrier
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/billing/attendance-type/new' && 'active')
                                    }
                                    to='/billing/attendance-type/new'
                                >
                                    Attendance Type
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/billing/billing-provider/new' && 'active')
                                    }
                                    to='/billing/billing-provider/new'
                                >
                                    Billing Provider
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/billing/description-code/new' && 'active')
                                    }
                                    to='/billing/description-code/new'
                                >
                                    Description Code
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/billing/funding-source/new' && 'active')
                                    }
                                    to='/billing/funding-source/new'
                                >
                                    Funding Source
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/billing/payers-setting/configure' && 'active')
                                    }
                                    to='/billing/payers-setting/configure'
                                >
                                    Payers Setting
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/billing/policy-holder/new' && 'active')
                                    }
                                    to='/billing/policy-holder/new'
                                >
                                    Policy Holder
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/billing/leave-rule/new' && 'active')
                                    }
                                    to='/billing/leave-rule/new'
                                >
                                    Leave Rule
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/billing/taxonomy-code/new' && 'active')
                                    }
                                    to='/billing/taxonomy-code/new'
                                >
                                    Taxonomy Code
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/billing/cms-1500-print-calibration/new' && 'active')
                                    }
                                    to='/billing/cms-1500-print-calibration/new'
                                >
                                    CMS Print Calibration
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/billing/unit-calculation-rule/new' && 'active')
                                    }
                                    to='/billing/unit-calculation-rule/new'
                                >
                                    Unit Calculation Rule
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/billing/cost-center-type/new' && 'active')
                                    }
                                    to='/billing/cost-center-type/new'
                                >
                                    Cost Center Type
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/billing/custom-pdf-invoice/new' && 'active')
                                    }
                                    to='/billing/custom-pdf-invoice/new'
                                >
                                    Custom PDF Invoice
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/billing/custom-attendance-pdf-configuration/new' && 'active')
                                    }
                                    to='/billing/custom-attendance-pdf-configuration/new'
                                >
                                    Custom Attendance PDF Configuration
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/billing/professional-claim-service-authorization/upload' && 'active')
                                    }
                                    to='/billing/professional-claim-service-authorization/upload'
                                >
                                    Professional Claim Service Authorization
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/billing/professional-template-group/new' && 'active')
                                    }
                                    to='/billing/professional-template-group/new'
                                >
                                    Professional Template Group
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminBillingHeader