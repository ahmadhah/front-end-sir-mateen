import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import CareHeader from '../CareHeader'

function IPOPSupportedEmploymentHeader() {
  const location = useLocation()

  return (
    <div>
      <CareHeader />
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <div className='d-flex overflow-auto h-55px'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/care/ipop-supported-employment/new' && 'active')
                  }
                  to='/care/ipop-supported-employment/new'
                >
                  New
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/care/ipop-supported-employment/acknowledge' && 'active')
                  }
                  to='/care/ipop-supported-employment/acknowledge'
                >
                  Acknowledge
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/care/ipop-supported-employment/archive' && 'active')
                  }
                  to='/care/ipop-supported-employment/archive'
                >
                  Archive
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/care/ipop-supported-employment/search' && 'active')
                  }
                  to='/care/ipop-supported-employment/search'
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

export default IPOPSupportedEmploymentHeader