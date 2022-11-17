/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import { Graph1 } from '../../../../../../_helper/partials/widgets'

function EventSummariesCard() {

  return (
    <>
      {/* <div className="card card-flush h-md-100">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Event Summaries</h2>
                  </div>
                </div>

                <div className="card-body pt-1">

                  <div className="d-flex flex-column text-gray-600">
                    <div className="d-flex align-items-center text-hover-primary py-2">
                      <span className="bullet bg-primary me-3" /><Link style={{ color: "inherit" }} to="/care/event-summaries/view">View</Link></div>
  
                  </div>
                </div>

              </div>
 */}









      {/*begin::Mixed Widget 2*/}
      <div className="card card-stretch-100 mb-xl-8">
        {/*begin::Header*/}
        <div className="card-header border-0 bg-dark py-5">
          <h3 className="card-title fw-bolder text-white">Event Summaries</h3>

        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="card-body p-0">
          {/*begin::Chart*/}
          <div className="mixed-widget-2-chart card-rounded-bottom bg-dark" data-kt-color="dark" style={{ height: '100px' }} />
          {/* <Graph1
            chartColor='danger'
            chartHeight='200px'
            strokeColor='#cb1e46'
            chartData={[75, 30, 50, 30, 45, 40, 50]}
          /> */}
          {/*end::Chart*/}
          {/*begin::Stats*/}
          <div className="card-p mt-n20 position-relative">
            {/*begin::Row*/}

            {/*end::Row*/}
            {/*begin::Row*/}
            <div className="row g-0">
              {/*begin::Col*/}
              <div className="col bg-light-danger px-6 py-8 rounded-2 mb-7">
                <Link className="text-dark fw-bold fs-6 mt-2" to="/care/event-summaries/view">
                  {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                  <span className="svg-icon svg-icon-3x svg-icon-dark d-block my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <rect x={8} y={9} width={3} height={10} rx="1.5" fill="black" />
                      <rect opacity="0.5" x={13} y={5} width={3} height={14} rx="1.5" fill="black" />
                      <rect x={18} y={11} width={3} height={8} rx="1.5" fill="black" />
                      <rect x={3} y={13} width={3} height={6} rx="1.5" fill="black" />
                    </svg>
                  </span>
                  View
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


export default EventSummariesCard