/* eslint-disable */
import React from 'react'
import UserCard from './user/card/UserCard'
import ActivityTrackingCard from './activity-tracking/card/ActivityTrackingCard'
import CaseLoadCard from './caseload/card/CaseLoadCard'
import ChangePasswordCard from './change-password/card/ChangePasswordCard'
import PrivilegesCard from './privileges/card/PrivilegesCard'
import SharedContactCard from './shared-contact/card/SharedContactCard'
import GeneralHeader from './GeneralHeader'

function General() {
  return (
    <div>
      <GeneralHeader/>
      {/*begin::Post*/}
      <div className="post d-flex flex-column-fluid" id="kt_post">
        {/*begin::Container*/}
        <div id="kt_content_container" className="container-xxl">
          {/*begin::Row*/}
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">
           
            {/*begin::Col*/}
            <div className="col-xl-12 col-md-12">
              <UserCard />
            </div>
            {/*end::Col*/}

          </div>
          {/*end::Row*/}


          {/*begin::Row*/}
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">

            {/*begin::Col*/}
            <div className="col-xl-6 col-md-6">
              <CaseLoadCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-xl-6 col-md-6">
              <SharedContactCard />
            </div>
            {/*end::Col*/}

          </div>
          {/*end::Row*/}


          {/*begin::Row*/}
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">
            {/*begin::Col*/}
            <div className="col-md-6">
              <ActivityTrackingCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <ChangePasswordCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <PrivilegesCard />
            </div>
            {/*end::Col*/}

          </div>
          {/*end::Row*/}
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Post*/}
    </div>
  )
}

export default General