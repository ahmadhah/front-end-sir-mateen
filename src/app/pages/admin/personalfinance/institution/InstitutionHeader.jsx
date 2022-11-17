import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PersonalFinanceHeader from '../PersonalFinanceHeader'

function InstitutionHeader() {
    const location = useLocation()
  return (
    <div>
        <PersonalFinanceHeader/>
        <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-9 pb-0'>
                    <p className='text-gray-800 fs-2 fw-bolder'>Institution</p>
                    <div className='d-flex overflow-auto h-55px'>
                        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/personalfinance/institution/new' && 'active')
                                    }
                                    to='/personalfinance/institution/new'
                                >
                                    New
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/personalfinance/institution/list' && 'active')
                                    }
                                    to='/personalfinance/institution/list'
                                >
                                    List
                                </Link>
                            </li>
                          <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/personalfinance/institution/import-from-excel' && 'active')
                                    }
                                    to='/personalfinance/institution/import-from-excel'
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

export default InstitutionHeader