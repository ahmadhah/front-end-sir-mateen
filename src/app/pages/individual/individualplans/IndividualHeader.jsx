/* eslint-disable */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function IndividualHeader() {
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
                                        (location.pathname === '/individualplans/individual-plan/search' && 'active')
                                    }
                                    to='/individualplans/individual-plan/search'
                                >
                                    Individual Plan
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4 ` +
                                        (location.pathname === '/individualplans/individual-plan-agenda/new' && 'active')
                                    }
                                    to='/individualplans/individual-plan-agenda/new'
                                >
                                    Individual Plan Agenda
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/individualplans/personal-focus-worksheet/new' && 'active')
                                    }
                                    to='/individualplans/personal-focus-worksheet/new'
                                >
                                    Personal Focus Worksheet
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualHeader