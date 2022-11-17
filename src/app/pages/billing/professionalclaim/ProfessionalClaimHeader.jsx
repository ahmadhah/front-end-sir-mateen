/* eslint-disable */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function ProfessionalClaimHeader() {
    const location = useLocation()
    return (
        <div>
            <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-3 pb-0'>
                    {/* <p className='text-gray-800 fs-2 fw-bolder'>Consent Record</p> */}
                    <div className='d-flex overflow-auto h-60px'>
                        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-6 flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/professionalclaim/agency-based-reports/aging-report' && 'active')
                                    }
                                    to='/professionalclaim/agency-based-reports/denied-claim'
                                >
                                    Agency Based Reports
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2` +
                                        (location.pathname === '/professionalclaim/claim-template"/new' && 'active')
                                    }
                                    to='/professionalclaim/claim-template"/new'
                                >
                                    Claim Template
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/professionalclaim/billing-conversion/isp-billing' && 'active')
                                    }
                                    to='/professionalclaim/billing-conversion/isp-billing'
                                >
                                    Billing Conversion
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/professionalclaim/professional-claim/new' && 'active')
                                    }
                                    to='/professionalclaim/professional-claim/new'
                                >
                                    Professional Claim
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/professionalclaim/excel-upload/new' && 'active')
                                    }
                                    to='/professionalclaim/excel-upload/new'
                                >
                                    Excel Upload
                                </Link>
                            </li>
                            <li className='nav-item'>
                                
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/professionalclaim/service-authorization/new' && 'active')
                                    }
                                    to='/professionalclaim/service-authorization/new'
                                >
                                    Service Authorization
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalClaimHeader