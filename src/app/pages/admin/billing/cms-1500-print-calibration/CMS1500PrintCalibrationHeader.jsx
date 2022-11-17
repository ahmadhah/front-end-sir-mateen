import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AdminBillingHeader from '../AdminBillingHeader'

function CMS1500PrintCalibrationHeader() {
    const location = useLocation()
  return (
    <div>
        <AdminBillingHeader/>
        <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-9 pb-0'>
                    <p className='text-gray-800 fs-2 fw-bolder'>CMS 1500 Print Calibration</p>
                    <div className='d-flex overflow-auto h-55px'>
                        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/billing/cms-1500-print-calibration/new' && 'active')
                                    }
                                    to='/billing/cms-1500-print-calibration/new'
                                >
                                    New
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/billing/cms-1500-print-calibration/list' && 'active')
                                    }
                                    to='/billing/cms-1500-print-calibration/list'
                                >
                                    List
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CMS1500PrintCalibrationHeader