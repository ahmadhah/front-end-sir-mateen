import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AdminBillingHeader from '../AdminBillingHeader'

function BillingProviderHeader() {
    const location = useLocation()
  return (
    <div>
        <AdminBillingHeader/>
        <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-9 pb-0'>
                    <p className='text-gray-800 fs-2 fw-bolder'>Billing Provider</p>
                    <div className='d-flex overflow-auto h-55px'>
                        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/billing/billing-provider/new' && 'active')
                                    }
                                    to='/billing/billing-provider/new'
                                >
                                    New
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/billing/billing-provider/archive' && 'active')
                                    }
                                    to='/billing/billing-provider/archive'
                                >
                                    Archive
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/billing/billing-provider/search' && 'active')
                                    }
                                    to='/billing/billing-provider/search'
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

export default BillingProviderHeader