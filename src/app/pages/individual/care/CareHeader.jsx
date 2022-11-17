/* eslint-disable */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function CareHeader() {
    const location = useLocation()
    return (
        <div>
            <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-3 pb-0'>
                    {/* <p className='text-gray-800 fs-2 fw-bolder'>Consent Record</p> */}
                    <div className='d-flex overflow-auto h-60px'>
                        <ul className='nav nav-stretch nav-line-tabs border-transparent fs-6 flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/care/consent-and-authorization/new' && 'active')
                                    }
                                    to='/care/consent-and-authorization/new'
                                >
                                    Consent & Authorization
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/care/event-summaries/view' && 'active')
                                    }
                                    to='/care/event-summaries/view'
                                >
                                    Event Summaries
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/care/global-template-library/search' && 'active')
                                    }
                                    to='/care/global-template-library/search'
                                >
                                    Global Template
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/care/general-event-report/new' && 'active')
                                    }
                                    to='/care/general-event-report/new'
                                >
                                    GER
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/care/ger-resolution/new' && 'active')
                                    }
                                    to='/care/ger-resolution/new'
                                >
                                    GER Resolution
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/care/isp-program/new' && 'active')
                                    }
                                    to='/care/isp-program/new'
                                >
                                    ISP Program
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/care/witness/search' && 'active')
                                    }
                                    to='/care/witness/search'
                                >
                                    Witness
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/care/t-log/new' && 'active')
                                    }
                                    to='/care/t-log/new'
                                >
                                    T Log
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/care/isp-data/search' && 'active')
                                    }
                                    to='/care/isp-data/new'
                                >
                                    ISP Data
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/care/individual-demographics/search' && 'active')
                                    }
                                    to='/care/individual-demographics/search'
                                >
                                   Individual Demographics
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/care/ipop-supported-employment/new' && 'active')
                                    }
                                    to='/care/ipop-supported-employment/new'
                                >
                                    IPOP Supported Employment
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/care/ipop-work-center/new' && 'active')
                                    }
                                    to='/care/ipop-work-center/new'
                                >
                                    IPOP Work Center
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/care/ipop-day-program/new' && 'active')
                                    }
                                    to='/care/ipop-day-program/new'
                                >
                                    IPOP Day Program
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/care/ipop-general-information/new' && 'active')
                                    }
                                    to='/care/ipop-general-information/new'
                                >
                                    IPOP General Information
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/care/ipop-individualized-services/new' && 'active')
                                    }
                                    to='/care/ipop-individualized-services/new'
                                >
                                    IPOP Individualized Services
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/care/ipop-residential-information/new' && 'active')
                                    }
                                    to='/care/ipop-residential-information/new'
                                >
                                    IPOP Residential Information
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/care/isp-program-template-liabrary/new' && 'active')
                                    }
                                    to='/care/isp-program-template-liabrary/new'
                                >
                                    ISP Program Template
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-2 ` +
                                        (location.pathname === '/care/individual-medical-information/diagnosis-list' && 'active')
                                    }
                                    to='/care/individual-medical-information/diagnosis-list'
                                >
                                    Individual Medical Information
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareHeader