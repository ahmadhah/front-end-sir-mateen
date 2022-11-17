/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import { KTSVG } from '../../../../../../_metronic/helpers'
import { Graph2 } from '../../../../../../_helper/partials/widgets'

function IndividualMedicalInformationCard() {
  return (
    <>
      <div className={`card card-stretch-100 mb-xl-8`}>
        {/* begin::Body */}
        <div className='card-body p-0'>
          {/* begin::Header */}
          <div className={`px-9 pt-7 card-rounded  w-100`}>
            {/* begin::Heading */}
            <div className='d-flex flex-stack'>
              <h3 className='m-0 fw-bolder fs-3'>Individual Medical Information</h3>
            </div>
            {/* end::Heading */}
          </div>
          {/* end::Header */}
          <div className="card-body p-0">
            <div className="mixed-widget-2-chart card-rounded-bottom bg-white" data-kt-color="white" style={{ height: '80px' }} />
            {/* <Graph2
              chartColor='dark'
              chartHeight='200px'
            /> */}
          </div>
          {/* begin::Items */}
          <div
            className='shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-white'
            style={{ marginTop: '-70px' }}
          >
            {/* begin::Item */}
            <div className='d-flex align-items-center mb-6'>
              {/* begin::Symbol */}
              <div className='symbol symbol-45px w-40px me-5'>
                <div className="symbol-label bg-light-success">
                  {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                  <span className="svg-icon svg-icon-1 svg-icon-success">
                    <KTSVG path="/media/icons/duotune/text/txt009.svg" />
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/* end::Symbol */}
              {/* begin::Description */}
              <div className='d-flex align-items-center flex-wrap w-100'>
                {/* begin::Title */}
                <div className='mb-1 pe-3 flex-grow-1'>
                  <div className='fs-5 text-gray-800 text-hover-success fw-bolder'><Link style={{ color: "inherit" }} to="/care/individual-medical-information/diagnosis-list">Diagnosis List</Link>
                  </div>
                </div>
                {/* end::Title */}
              </div>
              {/* end::Description */}
            </div>
            {/* end::Item */}
            {/* begin::Item */}
            <div className='d-flex align-items-center mb-6'>
              {/* begin::Symbol */}
              <div className='symbol symbol-45px w-40px me-5'>
                <div className="symbol-label bg-light-primary">
                  {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm010.svg*/}
                  <span className="svg-icon svg-icon-1 svg-icon-primary">
                  <KTSVG path="/media/icons/duotune/text/txt009.svg" />
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/* end::Symbol */}
              {/* begin::Description */}
              <div className='d-flex align-items-center flex-wrap w-100'>
                {/* begin::Title */}
                <div className='mb-1 pe-3 flex-grow-1'>
                  <div className='fs-5 text-gray-800 text-hover-primary fw-bolder'><Link style={{ color: "inherit" }} to="/care/individual-medical-information/advance-directives">Advance Directives</Link>
                  </div>
                </div>
                {/* end::Title */}

              </div>
              {/* end::Description */}
            </div>
            {/* end::Item */}
            {/* begin::Item */}
            <div className='d-flex align-items-center mb-6'>
              {/* begin::Symbol */}
              <div className='symbol symbol-45px w-40px me-5'>
                <div className="symbol-label bg-light-info">
                  {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                  <span className="svg-icon svg-icon-1 svg-icon-info">
                    <KTSVG path="/media/icons/duotune/communication/com006.svg" />
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/* end::Symbol */}
              {/* begin::Description */}
              <div className='d-flex align-items-center flex-wrap w-100'>
                {/* begin::Title */}
                <div className='mb-1 pe-3 flex-grow-1'>
                  <div className='fs-5 text-gray-800 text-hover-info fw-bolder'><Link style={{ color: "inherit" }} to="/care/individual-medical-information/allergy-profile">Allergy Profile</Link>
                  </div>
                </div>
                {/* end::Title */}

              </div>
              {/* end::Description */}
            </div>
            {/* end::Item */}
            {/* begin::Item */}
            <div className='d-flex align-items-center mb-6'>
              {/* begin::Symbol */}
              <div className="symbol symbol-50px me-3">
                <div className="symbol-label bg-light-danger">
                  {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm010.svg*/}
                  <span className="svg-icon svg-icon-1 svg-icon-danger">
                    <KTSVG path="/media/icons/duotune/communication/com006.svg" />
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/* end::Symbol */}
              {/* begin::Description */}
              <div className='d-flex align-items-center flex-wrap w-100'>
                {/* begin::Title */}
                <div className='mb-1 pe-3 flex-grow-1'>
                  <div className='fs-5 text-gray-800 text-hover-danger fw-bolder'><Link style={{ color: "inherit" }} to="/care/individual-medical-information/medication-profile">Medication Profile</Link>
                  </div>
                </div>
                {/* end::Title */}

              </div>
              {/* end::Description */}
            </div>
            {/* end::Item */}
            {/* begin::Item */}
            <div className='d-flex align-items-center mb-6'>
              {/* begin::Symbol */}
              <div className="symbol symbol-50px me-3">
                <div className="symbol-label bg-light-info">
                  {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm010.svg*/}
                  <span className="svg-icon svg-icon-1 svg-icon-warning">
                    <KTSVG path="/media/icons/duotune/medicine/med007.svg" />
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/* end::Symbol */}
              {/* begin::Description */}
              <div className='d-flex align-items-center flex-wrap w-100'>
                {/* begin::Title */}
                <div className='mb-1 pe-3 flex-grow-1'>
                  <div className='fs-5 text-gray-800 text-hover-warning fw-bolder'>
                    <Link style={{ color: "inherit" }} to="/care/individual-medical-information/medication-reconciliation">Medication Reconciliation</Link>
                  </div>
                </div>
                {/* end::Title */}

              </div>
              {/* end::Description */}
            </div>
            {/* end::Item */}
            {/* begin::Item */}
            <div className='d-flex align-items-center'>
              {/* begin::Symbol */}
              <div className="symbol symbol-50px me-3">
                <div className="symbol-label bg-light-dark">
                  {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                  <span className="svg-icon svg-icon-1 svg-icon-dark">
                    <KTSVG path="/media/icons/duotune/general/gen005.svg" />
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/* end::Symbol */}
              {/* begin::Description */}
              <div className='d-flex align-items-center flex-wrap w-100'>
                {/* begin::Title */}
                <div className='mb-1 pe-3 flex-grow-1'>
                  <div className='fs-5 text-gray-800 text-hover-dark fw-bolder'>
                    <Link style={{ color: "inherit" }} to="/care/individual-medical-information/individual-history">Individual History</Link>
                  </div>
                </div>
                {/* end::Title */}

              </div>
              {/* end::Description */}
            </div>
            {/* end::Item */}
          </div>
          {/* end::Items */}
        </div>
        {/* end::Body */}
      </div>





    </>
  )
}

export default IndividualMedicalInformationCard