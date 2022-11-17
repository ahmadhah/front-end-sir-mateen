import React from 'react'
import { Link } from 'react-router-dom'
import { KTSVG } from '../../../../../../_metronic/helpers'
import { Graph3 } from '../../../../../../_helper/partials/widgets'

function ClaimTemplateCard() {
  return (
    <>
      {/*begin::Mixed Widget 12*/}
      <div className="card card-stretch-75 mb-xl-8">
        {/*begin::Header*/}
        <div className="card-header border-0 bg-success py-5">
          <h3 className="card-title fw-bolder text-white">Claim Template</h3>
        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="card-body p-0">
          <div className="mixed-widget-2-chart card-rounded-bottom bg-success" data-kt-color="success" style={{ height: '100px' }} />
          {/*begin::Chart*/}
          {/* <Graph3
            chartColor='primary'
            chartHeight='250px'
          /> */}
          {/*end::Chart*/}
          {/*begin::Stats*/}
          <div className="card-rounded bg-body mt-n10 position-relative card-px py-15">
            {/*begin::Row*/}
            <div className="row g-0 mt-4 col-12">
              {/*begin::Col*/}
              <div className="col-12">
                <div className="d-flex align-items-center me-2">
                  {/*begin::Symbol*/}
                  <div className="symbol symbol-50px me-3">
                    <div className="symbol-label bg-light-success">
                      {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                      <span className="svg-icon svg-icon-1 svg-icon-success">
                        <KTSVG path="/media/icons/duotune/files/fil013.svg" />
                      </span>
                      {/*end::Svg Icon*/}
                    </div>
                  </div>
                  {/*end::Symbol*/}
                  {/*begin::Title*/}
                  <div>
                    {/* <div className="fs-4 text-dark fw-bolder">$49</div> */}
                    <Link to="/professionalclaim/claim-template/new">
                      <div className="fs-7 fw-bolder text-success">Claim Template New</div>
                    </Link>
                  </div>
                  {/*end::Title*/}
                </div>
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}
            {/*begin::Row*/}
            <div className="row g-0 mt-4 col-12">
              {/*begin::Col*/}
              <div className="col-12">
                <div className="d-flex align-items-center me-2">
                  {/*begin::Symbol*/}
                  <div className="symbol symbol-50px me-3">
                    <div className="symbol-label bg-light-danger">
                      {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                      <span className="svg-icon svg-icon-1 svg-icon-danger">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="black" />
                          <path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="black" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </div>
                  </div>
                  {/*end::Symbol*/}
                  {/*begin::Title*/}
                  <div>
                    {/* <div className="fs-4 text-dark fw-bolder">$49</div> */}
                    <Link to="/professionalclaim/claim-template/search">
                      <div className="fs-7 fw-bolder text-danger">Claim Template Search</div>
                    </Link>
                  </div>
                  {/*end::Title*/}
                </div>
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}
          </div>
          {/*end::Stats*/}
        </div>
        {/*end::Body*/}
      </div>
      {/*end::Mixed Widget 12*/}
    </>
  )
}

export default ClaimTemplateCard