import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function AttendanceHeader() {
  const location = useLocation()

  return (
    <div>
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <p className='text-gray-800 fs-2 fw-bolder'>Attendance</p>
          <div className='d-flex overflow-auto h-55px'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/billing/attendance-card/attendance/new' && 'active')
                  }
                  to='/billing/attendance-card/attendance/new'
                >
                  New
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/billing/attendance-card/attendance/search' && 'active')
                  }
                  to='/billing/attendance-card/attendance/search'
                >
                  Search
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/billing/attendance-card/attendance/archive' && 'active')
                  }
                  to='/billing/attendance-card/attendance/archive'
                >
                  Archive
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/billing/attendance-card/attendance/summary' && 'active')
                  }
                  to='/billing/attendance-card/attendance/summary'
                >
                  Summary
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttendanceHeader