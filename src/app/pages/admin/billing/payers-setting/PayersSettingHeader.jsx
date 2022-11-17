import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AdminBillingHeader from '../AdminBillingHeader'

function PayersSettingHeader() {
    const location = useLocation()
  return (
    <div>
        <AdminBillingHeader/>
        <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-9 pb-0'>
                    <p className='text-gray-800 fs-2 fw-bolder'>Payers Setting</p>
                    <div className='d-flex overflow-auto h-55px'>
                        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/billing/payers-setting/configure' && 'active')
                                    }
                                    to='/billing/payers-setting/configure'
                                >
                                    Configure
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default PayersSettingHeader