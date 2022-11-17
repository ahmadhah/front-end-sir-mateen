import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AdminCareHeader from '../AdminCareHeader'

function ContactHeader() {
    const location = useLocation()
    return (
        <div>
            <AdminCareHeader />
            <div className='card mb-5 mb-xl-10 py-6'>
                <div className='card-body pt-9 pb-0'>
                    <p className='text-gray-800 fs-2 fw-bolder'>Contact</p>
                    <div className='d-flex overflow-auto h-55px'>
                        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/care/contact/list' && 'active')
                                    }
                                    to='/care/contact/list'
                                >
                                    List
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/care/contact/new' && 'active')
                                    }
                                    to='/care/contact/new'
                                >
                                    Create New Contact
                                </Link>
                            </li>
                            {/* <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/care/contact/import-from-excel' && 'active')
                                    }
                                    to='/care/contact/import-from-excel'
                                >
                                    Import from Excel
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/care/contact/search-imported-excel' && 'active')
                                    }
                                    to='/care/contact/search-imported-excel'
                                >
                                    Search Imported Excel
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactHeader