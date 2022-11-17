import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AdminBillingHeader from '../AdminBillingHeader'

function PolicyHolderHeader() {
    const location = useLocation()
  return (
    <div>
        <AdminBillingHeader/>
        <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-9 pb-0'>
                    <p className='text-gray-800 fs-2 fw-bolder'>Policy Holder</p>
                    <div className='d-flex overflow-auto h-55px'>
                        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/billing/policy-holder/new' && 'active')
                                    }
                                    to='/billing/policy-holder/new'
                                >
                                    New
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/billing/policy-holder/search' && 'active')
                                    }
                                    to='/billing/policy-holder/search'
                                >
                                    Search
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/billing/policy-holder/archive' && 'active')
                                    }
                                    to='/billing/policy-holder/archive'
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

export default PolicyHolderHeader