import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProfessionalClaimHeader from '../professional-claim/ProfessionalClaimHeader'

function ServiceAuthorizationHeader() {
  const location = useLocation()

  return (
    <div>
      <ProfessionalClaimHeader />
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <p className='text-gray-800 fs-2 fw-bolder'>Service Authorization</p>
          <div className='d-flex overflow-auto h-55px'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/service-authorization/new' && 'active')
                  }
                  to='/professionalclaim/service-authorization/new'
                >
                  New
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/service-authorization/search' && 'active')
                  }
                  to='/professionalclaim/service-authorization/search'
                >
                  Search
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/service-authorization/renewal-search' && 'active')
                  }
                  to='/professionalclaim/service-authorization/renewal-search'
                >
                  Renewal Search
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/service-authorization/archive' && 'active')
                  }
                  to='/professionalclaim/service-authorization/archive'
                >
                  Archive
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/service-authorization/applied-rate-history-search' && 'active')
                  }
                  to='/professionalclaim/service-authorization/applied-rate-history-search'
                >
                  Applied Rate History Search
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceAuthorizationHeader