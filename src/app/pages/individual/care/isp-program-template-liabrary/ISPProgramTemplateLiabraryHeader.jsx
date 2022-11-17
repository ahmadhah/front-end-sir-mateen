import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import CareHeader from '../CareHeader'

function ISPProgramTemplateLibraryHeader() {
  const location = useLocation()

  return (
    <div>
      <CareHeader />
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <p className='text-gray-800 fs-2 fw-bolder'>ISP Program Template Library</p>
          <div className='d-flex overflow-auto h-55px'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/care/isp-program-template-liabrary/new' && 'active')
                  }
                  to='/care/isp-program-template-liabrary/new'
                >
                  New
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/care/isp-program-template-liabrary/draft' && 'active')
                  }
                  to='/care/isp-program-template-liabrary/draft'
                >
                  Draft
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/care/isp-program-template-liabrary/approved' && 'active')
                  }
                  to='/care/isp-program-template-liabrary/approved'
                >
                  Approved
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/care/isp-program-template-liabrary/search' && 'active')
                  }
                  to='/care/isp-program-template-liabrary/search'
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

export default ISPProgramTemplateLibraryHeader