import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PersonalFinanceHeader from '../PersonalFinanceHeader'

function MerchantHeader() {
    const location = useLocation()
  return (
    <div>
    <PersonalFinanceHeader />
        <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-9 pb-0'>
                    <p className='text-gray-800 fs-2 fw-bolder'>Merchant</p>
                    <div className='d-flex overflow-auto h-55px'>
                        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/personalfinance/merchant/new' && 'active')
                                    }
                                    to='/personalfinance/merchant/new'
                                >
                                    New
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/personalfinance/merchant/list' && 'active')
                                    }
                                    to='/personalfinance/merchant/list'
                                >
                                    List
                                </Link>
                            </li>
                          <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/personalfinance/merchant/import-from-excel' && 'active')
                                    }
                                    to='/personalfinance/merchant/import-from-excel'
                                >
                                    Import from Excel
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default MerchantHeader