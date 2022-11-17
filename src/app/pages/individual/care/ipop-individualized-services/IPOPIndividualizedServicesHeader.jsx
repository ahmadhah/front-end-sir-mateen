import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import CareHeader from '../CareHeader'

function IPOPIndividualizedServicesHeader() {
  const location = useLocation()

  return (
    <div>
      <CareHeader />
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <p className='text-gray-800 fs-2 fw-bolder'>IPOP Individualized Services</p>
          <div className='d-flex overflow-auto h-55px'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/care/ipop-individualized-services/new' && 'active')
                  }
                  to='/care/ipop-individualized-services/new'
                >
                  New
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/care/ipop-individualized-services/acknowledge' && 'active')
                  }
                  to='/care/ipop-individualized-services/acknowledge'
                >
                  Acknowledge
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/care/ipop-individualized-services/archive' && 'active')
                  }
                  to='/care/ipop-individualized-services/archive'
                >
                  Archive
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/care/ipop-individualized-services/search' && 'active')
                  }
                  to='/care/ipop-individualized-services/search'
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

export default IPOPIndividualizedServicesHeader