/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import { KTSVG } from '../../../../../../_metronic/helpers'
import { Graph2 } from '../../../../../../_helper/partials/widgets'

function InstitutionCard() {
  return (
    <>
      {/*begin::Mixed Widget 12*/}
      <div className="card card-stretch-75 mb-xl-8">
        {/*begin::Header*/}
        <div className="card-header border-0 bg-success py-5">
          <h3 className="card-title fw-bolder text-white">Institution</h3>
        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="card-body p-0">
          <div className="mixed-widget-2-chart card-rounded-bottom bg-success" data-kt-color="primary" style={{ height: '100px' }} />
          {/*begin::Chart*/}
          {/* <Graph3
            chartColor='info'
            chartHeight='250px'
          /> */}
          {/*end::Chart*/}
          {/*begin::Stats*/}
          <div className="card-rounded bg-body mt-n10 position-relative card-px py-6">
            {/*begin::Row*/}
            <div className="row g-0  ">
              {/*begin::Col*/}
              <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-6 col-6 mt-1">
                <div className="d-flex align-items-center me-2">
                  {/*begin::Symbol*/}
                  <div className="symbol symbol-50px me-3">
                    <div className="symbol-label bg-light-warning">
                      {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                      <span className="svg-icon svg-icon-1 svg-icon-warning">
                        <KTSVG path="/media/icons/duotune/files/fil013.svg" />
                      </span>
                      {/*end::Svg Icon*/}
                    </div>
                  </div>
                  {/*end::Symbol*/}
                  {/*begin::Title*/}
                  <div>
                    {/* <div className="fs-4 text-dark fw-bolder">$49</div> */}
                    <Link to="/personalfinance/institution/new">
                      <div className="fs-7 fw-bolder text-warning">New</div>
                    </Link>
                  </div>
                  {/*end::Title*/}
                </div>
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-6 col-6 mt-1">
                <div className="d-flex align-items-center me-2">
                  {/*begin::Symbol*/}
                  <div className="symbol symbol-50px me-3">
                    <div className="symbol-label bg-light-danger">
                      {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm010.svg*/}
                      <span className="svg-icon svg-icon-1 svg-icon-danger">
                        <KTSVG path="/media/icons/duotune/text/txt009.svg" />
                      </span>
                      {/*end::Svg Icon*/}
                    </div>
                  </div>
                  {/*end::Symbol*/}
                  {/*begin::Title*/}
                  <div>
                    {/* <div className="fs-4 text-dark fw-bolder">$5.8M</div> */}
                    <Link to="/personalfinance/institution/list">
                      <div className="fs-7 fw-bolder text-danger">List</div>
                    </Link>
                  </div>
                  {/*end::Title*/}
                </div>
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}
            {/*begin::Row*/}
            <div className="row g-0 mt-4 ">
              {/*begin::Col*/}
              <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-6 col-6 mt-2">
                <div className="d-flex align-items-center me-2">
                  {/*begin::Symbol*/}
                  <div className="symbol symbol-50px me-3">
                    <div className="symbol-label bg-light-info">
                      {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm010.svg*/}
                      <span className="svg-icon svg-icon-1 svg-icon-info">
                      <KTSVG path="/media/icons/duotune/files/fil017.svg"/>
                      </span>
                      {/*end::Svg Icon*/}
                    </div>
                  </div>
                  {/*end::Symbol*/}
                  {/*begin::Title*/}
                  <div>
                    {/* <div className="fs-4 text-dark fw-bolder">$5.8M</div> */}
                    <Link to="/personalfinance/institution/import-from-excel">
                      <div className="fs-7  fw-bolder text-info">Import from Excel</div>
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

export default InstitutionCard