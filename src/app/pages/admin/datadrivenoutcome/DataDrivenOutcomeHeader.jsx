/* eslint-disable */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'


function DataDrivenOutcomeHeader() {
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
                                        (location.pathname === '/datadrivenoutcome/isp-program-template-mapping/new' && 'active')
                                    }
                                    to='/datadrivenoutcome/isp-program-template-mapping/new'
                                >
                                    ISP Program Template Mapping
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/datadrivenoutcome/outcome-measure-types/new' && 'active')
                                    }
                                    to='/datadrivenoutcome/outcome-measure-types/new'
                                >
                                    Outcome Measure Types
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataDrivenOutcomeHeader