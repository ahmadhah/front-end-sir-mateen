/* eslint-disable */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import CarePlanHeader from '../CarePlanHeader'


function CarePlanTemplateHeader() {
    const location = useLocation()
    return (
        <div>
            <CarePlanHeader/>
            <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-3 pb-0'>
                    <p className='text-gray-800 fs-2 fw-bolder'>Care Plan Template</p>
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
                                    New
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/careplan/care-plan-template/search' && 'active')
                                    }
                                    to='/careplan/care-plan-template/search'
                                >
                                    Search
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/careplan/care-plan-template/worklist' && 'active')
                                    }
                                    to='/careplan/care-plan-template/worklist'
                                >
                                    Worklist
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarePlanTemplateHeader