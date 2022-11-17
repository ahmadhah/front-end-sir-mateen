/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import { KTSVG } from '../../../../../../_metronic/helpers'
import { Graph2 } from '../../../../../../_helper/partials/widgets'

function CaseLoadCard() {
  return (
    <>

      <div className={`card card-stretch-100 mb-xl-8`}>
        {/* begin::Body */}
        <div className='card-body p-0'>
          {/* begin::Header */}
          <div className={`px-9 pt-7 border-0 bg-info w-100 card-rounded-top`}>
            {/* begin::Heading */}
            <div className='d-flex  flex-stack'>
              <h3 className="card-title fw-bolder text-white">CaseLoad</h3>
            </div>
            {/* end::Heading */}
          </div>
          {/* end::Header */}
          <div className="card-body p-0">
            <div className="mixed-widget-2-chart card-rounded-bottom bg-info" data-kt-color="info" style={{ height: '100px' }} />
            {/* <Graph2
              chartColor='primary'
              chartHeight='200px'
            /> */}
          </div>
          {/* begin::Items */}
          <div
            className='shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-white'
            style={{ marginTop: '-50px' }}
          >
            {/* begin::Item */}
            <div className='d-flex align-items-center mb-6'>
              {/* begin::Symbol */}
              <div className='symbol symbol-45px w-40px me-5'>
                <div className="symbol-label bg-light-primary">
                  {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm010.svg*/}
                  <span className="svg-icon svg-icon-1 svg-icon-primary">
                  <KTSVG path="/media/icons/duotune/graphs/gra008.svg"/>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/* end::Symbol */}
              {/* begin::Description */}
              <div className='d-flex align-items-center flex-wrap w-100'>
                {/* begin::Title */}
                <div className='mb-1 pe-3 flex-grow-1'>
                  <div className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                    <Link style={{ color: "inherit" }} to="/general/caseload/manage">Manage</Link>
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
                <div className="symbol-label bg-light-success">
                  {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm010.svg*/}
                  <span className="svg-icon svg-icon-1 svg-icon-success">
                  <KTSVG path="/media/icons/duotune/files/fil017.svg" />
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/* end::Symbol */}
              {/* begin::Description */}
              <div className='d-flex align-items-center flex-wrap w-100'>
                {/* begin::Title */}
                <div className='mb-1 pe-3 flex-grow-1'>
                  <div className='fs-5 text-gray-800 text-hover-success fw-bolder'>
                    <Link style={{ color: "inherit" }} to="/general/caseload/archive">Archive</Link>
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

export default CaseLoadCard