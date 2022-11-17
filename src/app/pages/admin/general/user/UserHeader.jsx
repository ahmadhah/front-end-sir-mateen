import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import GeneralHeader from '../GeneralHeader'

function UserHeader() {
    const location = useLocation()
  return (
    <div>
        <GeneralHeader/>
        <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-9 pb-0'>
                    <p className='text-gray-800 fs-2 fw-bolder'>User</p>
                    <div className='d-flex overflow-auto h-55px'>
                        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/general/user/new' && 'active')
                                    }
                                    to='/general/user/new'
                                >
                                    New
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/general/user/list' && 'active')
                                    }
                                    to='/general/user/list'
                                >
                                    List
                                </Link>
                            </li>
                          <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/general/user/import-from-excel' && 'active')
                                    }
                                    to='/general/user/import-from-excel'
                                >
                                    Import from Excel
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/general/user/search-imported-excel' && 'active')
                                    }
                                    to='/general/user/search-imported-excel'
                                >
                                    Search Imported Excel
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/general/user/assign-external-system-id' && 'active')
                                    }
                                    to='/general/user/assign-external-system-id'
                                >
                                    Assign External System ID
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/general/user/self-password-reset' && 'active')
                                    }
                                    to='/general/user/self-password-reset'
                                >
                                    Self Password Reset
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default UserHeader