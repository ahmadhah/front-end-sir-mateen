import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function DocumentStorageHeader() {
  const location = useLocation()
  return (
    <div>
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <p className='text-gray-800 fs-2 fw-bolder'>Document Storage</p>
          <div className='d-flex overflow-auto h-55px'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/agency-wide-document-storage/document-storage/new' && 'active')
                  }
                  to='/agency-wide-document-storage/document-storage/new'
                >
                  New
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/agency-wide-document-storage/document-storage/search' && 'active')
                  }
                  to='/agency-wide-document-storage/document-storage/search'
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

export default DocumentStorageHeader