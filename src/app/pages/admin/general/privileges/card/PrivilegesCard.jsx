import React from 'react'
import { Link } from 'react-router-dom'
import { KTSVG } from '../../../../../../_metronic/helpers'
import { Graph2 } from '../../../../../../_helper/partials/widgets'

function PrivilegesCard() {
  return (
    <>
     {/*begin::Mixed Widget 2*/}
     <div className="card card-stretch-100 mb-xl-8">
        {/*begin::Header*/}
        <div className="card-header border-0 bg-success py-5">
          <h3 className="card-title fw-bolder text-white mb-5">Privileges</h3>
        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="card-body p-0">
          {/*begin::Chart*/}
          <div className="mixed-widget-2-chart card-rounded-bottom bg-success" data-kt-color="success" style={{ height: '100px' }} />
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
              <div className="col bg-light-success px-6 py-8 rounded-2 mb-7">
                {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
                <Link className="text-success fw-bold fs-6" to="/general/privileges/refresh" >
                  <span className="svg-icon svg-icon-3x svg-icon-success d-block my-2">
                  <KTSVG path="/media/icons/duotune/coding/cod005.svg"/>
                  </span>
                  {/*end::Svg Icon*/}
                  Refresh
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

export default PrivilegesCard