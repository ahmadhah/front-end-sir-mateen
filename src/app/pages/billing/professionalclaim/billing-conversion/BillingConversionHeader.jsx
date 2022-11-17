import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProfessionalClaimHeader from '../professional-claim/ProfessionalClaimHeader'

function BillingConversionHeader() {
  const location = useLocation()

  return (
    <div>
      <ProfessionalClaimHeader />
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <p className='text-gray-800 fs-2 fw-bolder'>Billing Conversion</p>
          <div className='d-flex overflow-auto h-55px'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/billing-conversion/isp-billing' && 'active')
                  }
                  to='/professionalclaim/billing-conversion/isp-billing'
                >
                  ISP Billing
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/billing-conversion/isp-billing-unit-calculation-rule' && 'active')
                  }
                  to='/professionalclaim/billing-conversion/isp-billing-unit-calculation-rule'
                >
                  ISP Billing Unit Calculation
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/billing-conversion/case-not-billing' && 'active')
                  }
                  to='/professionalclaim/billing-conversion/case-not-billing'
                >
                  Case Not Billing
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillingConversionHeader