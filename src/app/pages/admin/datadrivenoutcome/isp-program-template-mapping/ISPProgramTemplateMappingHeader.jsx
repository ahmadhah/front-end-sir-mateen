import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import DataDrivenOutcomeHeader from '../DataDrivenOutcomeHeader'

function ISPProgramTemplateMappingHeader() {
    const location = useLocation()
  return (
    <div>
        <DataDrivenOutcomeHeader/>
        <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-9 pb-0'>
                    <p className='text-gray-800 fs-2 fw-bolder'>ISP Program Template Mapping</p>
                    <div className='d-flex overflow-auto h-55px'>
                        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/datadrivenoutcome/isp-program-template-mapping/new' && 'active')
                                    }
                                    to='/datadrivenoutcome/isp-program-template-mapping/new'
                                >
                                    New
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/datadrivenoutcome/isp-program-template-mapping/search' && 'active')
                                    }
                                    to='/datadrivenoutcome/isp-program-template-mapping/list'
                                >
                                    Search
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ISPProgramTemplateMappingHeader