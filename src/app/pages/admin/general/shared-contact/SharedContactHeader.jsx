import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import GeneralHeader from '../GeneralHeader'

function SharedContactHeader() {
    const location = useLocation()
  return (
    <div>
        <GeneralHeader/>
        <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-9 pb-0'>
                    <p className='text-gray-800 fs-2 fw-bolder'>Shared Contact</p>
                    <div className='d-flex overflow-auto h-55px'>
                        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/general/shared-contact/new' && 'active')
                                    }
                                    to='/general/shared-contact/new'
                                >
                                    New
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/general/shared-contact/list' && 'active')
                                    }
                                    to='/general/shared-contact/list'
                                >
                                    List
                                </Link>
                            </li><li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/general/shared-contact/link' && 'active')
                                    }
                                    to='/general/shared-contact/link'
                                >
                                    Link
                                </Link>
                            </li><li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/general/shared-contact/import-from-excel' && 'active')
                                    }
                                    to='/general/shared-contact/import-from-excel'
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

export default SharedContactHeader