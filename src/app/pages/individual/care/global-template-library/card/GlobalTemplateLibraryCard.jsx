/* eslint-disable jsx-a11y/anchor-is-valid */
/*eslint no-unused-vars: "error"*/
/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import { Graph1 } from '../../../../../../_helper/partials/widgets'

function GlobalTemplateLibraryCard() {


  return (
    <>
      {/* <div className="card card-flush h-md-100">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Global Template Library</h2>
                  </div>
                </div>

                <div className="card-body pt-1">
                  <div className="d-flex flex-column text-gray-600">
                    <div className="d-flex align-items-center text-hover-primary py-2">
                      <span className="bullet bg-primary me-3" /><Link style={{ color: "inherit" }} to="/care/global-template-library/search-isp-template">Search ISP Template</Link>
                    </div>
                  </div>
                </div>
              </div> */}

      {/*begin::Mixed Widget 2*/}
      <div className="card card-stretch-100 mb-xl-8">
        {/*begin::Header*/}
        <div className="card-header border-0 bg-warning py-5">
          <h3 className="card-title fw-bolder text-white mb-5">Global Template Library</h3>
        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="card-body p-0">
          {/*begin::Chart*/}
          <div className="mixed-widget-2-chart card-rounded-bottom bg-warning" data-kt-color="warning" style={{ height: '100px' }} />
          {/* <Graph1
            chartColor='warning'
            chartHeight='200px'
            strokeColor='#ffffff'
            chartData={[30, 45, 32, 70, 40, 40, 40]}
          /> */}
          {/*end::Chart*/}
          {/*begin::Stats*/}
          <div className="card-p mt-n20 position-relative">
            {/*begin::Row*/}
            <div className="row g-0">
              {/*begin::Col*/}
              <div className="col bg-light-warning px-6 py-8 rounded-2 mb-7">
                {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
                <Link className="text-warning fw-bold fs-6" to="/care/global-template-library/search-isp-template" >
                  <span className="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="black" />
                      <path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="black" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                  Search ISP Template
                </Link>
              </div>
              {/*end::Col*/}

            </div>
            {/*end::Row*/}

          </div>
          {/*end::Stats*/}
        </div>
        {/*end::Body*/}
      </div>
      {/*end::Mixed Widget 2*/}
    </>
  )
}



export default GlobalTemplateLibraryCard