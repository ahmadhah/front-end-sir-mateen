import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function StaffVisitorLogHeader() {
    const location = useLocation()
  return (
    <div>
        <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <p className='text-gray-800 fs-2 fw-bolder'>Visitor-Log</p>
          <div className='d-flex overflow-auto h-55px'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/questionnaire-forms/staff-visitor-log/new' && 'active')
                  }
                  to='/questionnaire-forms/staff-visitor-log/new'
                >
                  New
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/questionnaire-forms/staff-visitor-log/search' && 'active')
                  }
                  to='/questionnaire-forms/staff-visitor-log/search'
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

export default StaffVisitorLogHeader