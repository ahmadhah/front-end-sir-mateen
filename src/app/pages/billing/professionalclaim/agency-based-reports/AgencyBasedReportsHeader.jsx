import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProfessionalClaimHeader from '../ProfessionalClaimHeader'

function AgencyBasedReportsHeader() {
  const location = useLocation()

  return (
    <div>
      <ProfessionalClaimHeader />
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <p className='text-gray-800 fs-2 fw-bolder'>Agency Based Reports</p>
          <div className='d-flex overflow-auto h-55px'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/agency-based-reports/aging-report' && 'active')
                  }
                  to='/professionalclaim/agency-based-reports/aging-report'
                >
                  Aging Report
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/agency-based-reports/denied-claim' && 'active')
                  }
                  to='/professionalclaim/agency-based-reports/denied-claim'
                >
                  Denied Claim
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/agency-based-reports/reconciliation' && 'active')
                  }
                  to='/professionalclaim/agency-based-reports/reconciliation'
                >
                  Reconciliation
                </Link>
              </li> <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/agency-based-reports/reconciliation-service-level' && 'active')
                  }
                  to='/professionalclaim/agency-based-reports/reconciliation-service-level'
                >
                  Reconciliation Service Level
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/agency-based-reports/submission-errors' && 'active')
                  }
                  to='/professionalclaim/agency-based-reports/submission-errors'
                >
                  Submission Errors
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/agency-based-reports/unclaimed' && 'active')
                  }
                  to='/professionalclaim/agency-based-reports/unclaimed'
                >
                  Unclaimed
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/agency-based-reports/utilization' && 'active')
                  }
                  to='/professionalclaim/agency-based-reports/utilization'
                >
                  Utilization
                </Link>
              </li>


            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgencyBasedReportsHeader