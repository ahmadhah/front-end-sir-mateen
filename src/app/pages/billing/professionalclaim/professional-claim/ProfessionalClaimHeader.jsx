import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProfessionalClaimHeader from '../ProfessionalClaimHeader'

function ProfessionalClaimsHeader() {
  const location = useLocation()

  return (
    <div>
      <ProfessionalClaimHeader/>
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <p className='text-gray-800 fs-2 fw-bolder'>Professional Claim</p>
          <div className='d-flex overflow-auto h-55px'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/professional-claim/new' && 'active')
                  }
                  to='/professionalclaim/professional-claim/new'
                >
                  New
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/professional-claim/search' && 'active')
                  }
                  to='/professionalclaim/professional-claim/search'
                >
                  Search
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/professional-claim/archive' && 'active')
                  }
                  to='/professionalclaim/professional-claim/archive'
                >
                  Archive
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/professional-claim/new-template' && 'active')
                  }
                  to='/professionalclaim/professional-claim/new-template'
                >
                  New Template
                </Link>
              </li>


            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalClaimsHeader