/* eslint-disable */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function CarePlanHeader() {
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
                                        (location.pathname === '/careplan/care-plan-template/new' && 'active')
                                    }
                                    to='/careplan/care-plan-template/new'
                                >
                                  Care Plan Template
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarePlanHeader