/* eslint-disable */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function PersonalFinanceHeader() {
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
                                        (location.pathname === '/personalfinance/institution/new' && 'active')
                                    }
                                    to='/personalfinance/institution/new'
                                >
                                  Institution
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/personalfinance/merchant/new' && 'active')
                                    }
                                    to='/personalfinance/merchant/new'
                                >
                                    Merchant
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/personalfinance/types-and-categories/new' && 'active')
                                    }
                                    to='/personalfinance/types-and-categories/new'
                                >
                                    Types and Categories
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalFinanceHeader