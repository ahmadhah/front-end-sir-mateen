import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import CareHeader from '../CareHeader'

function GERResolutionHeader() {
  const location = useLocation()
  return (
    <div>
      <CareHeader />
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <p className='text-gray-800 fs-2 fw-bolder'>GER Resolution</p>
          <div className='d-flex overflow-auto h-55px'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/care/ger-resolution/new' && 'active')
                  }
                  to='/care/ger-resolution/new'
                >
                  New
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/care/ger-resolution/unaddressed-gers' && 'active')
                  }
                  to='/care/ger-resolution/unaddressed-gers'
                >
                  Unaddressed GERs
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/care/ger-resolution/open-resolution' && 'active')
                  }
                  to='/care/ger-resolution/open-resolution'
                >
                  Open Resolutions
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/care/ger-resolution/open-investigation' && 'active')
                  }
                  to='/care/ger-resolution/open-investigation'
                >
                  Open Investigations
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/care/ger-resolution/search' && 'active')
                  }
                  to='/care/ger-resolution/search'
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

export default GERResolutionHeader