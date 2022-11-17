/* eslint-disable */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export function SettingsHeader() {

let  location = useLocation()
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
                                        (location.pathname === '/personal-details' && 'active')
                                    }
                                    to='/personal-details'
                                >
                                    Personal Details 
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4 ` +
                                        (location.pathname === '/password' && 'active')
                                    }
                                    to='/password'
                                >
                                    Password
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/super-admin-list' && 'active')
                                    }
                                    to='/super-admin-list'
                                >
                                    Super Admin List
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/scomm-settings' && 'active')
                                    }
                                    to='/scomm-settings'
                                >
                                    SComm Settings
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/individual-home-shows' && 'active')
                                    }
                                    to='/individual-home-shows'
                                >
                                    Individual Home Shows
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/test-mode' && 'active')
                                    }
                                    to='/test-mode'
                                >
                                    Test Mode
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
  }
