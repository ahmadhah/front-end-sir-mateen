import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProfessionalClaimHeader from '../professional-claim/ProfessionalClaimHeader'

function ExcelUploadHeader() {
  const location = useLocation()

  return (
    <div>
      <ProfessionalClaimHeader />
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <p className='text-gray-800 fs-2 fw-bolder'>Excel Upload</p>
          <div className='d-flex overflow-auto h-55px'>
            <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/excel-upload/claim-bulk-update' && 'active')
                  }
                  to='/professionalclaim/excel-upload/claim-bulk-update'
                >
                  Claim Bulk Update
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/excel-upload/claim-bulk-update-upload-search' && 'active')
                  }
                  to='/professionalclaim/excel-upload/claim-bulk-update-upload-search'
                >
                  Claim Bulk Update Upload Search
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/excel-upload/manual-reconciliation' && 'active')
                  }
                  to='/professionalclaim/excel-upload/manual-reconciliation'
                >
                  Manual Reconciliation
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={
                    `nav-link text-active-primary me-6 ` +
                    (location.pathname === '/professionalclaim/excel-upload/manual-reconciliation-upload-search' && 'active')
                  }
                  to='/professionalclaim/excel-upload/manual-reconciliation-upload-search'
                >
                  Manual Reconciliation Upload Search
                </Link>
              </li>



            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExcelUploadHeader