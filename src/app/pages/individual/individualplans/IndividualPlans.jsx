/* eslint-disable */
import React from 'react'
import PersonalFocusWorksheetCard from './personal-focus-worksheet/card/PersonalFocusWorksheetCard'
import IndividualPlanAgendaCard from './individual-plan-agenda/card/IndividualPlanAgendaCard'
import IndividualPlanCard from './individual-plan/card/IndividualPlansCard'
import IndividualHeader from './IndividualHeader'

function IndividualPlans() {
  return (
    <div>
      {/*begin::Post*/}
      <div className="post d-flex flex-column-fluid" id="kt_post">
        {/*begin::Container*/}
        <div id="kt_content_container" className="container-xxl">
          <IndividualHeader/>
          {/*begin::Row*/}
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">

            {/*begin::Col*/}
            <div className="col-md-6">
              <PersonalFocusWorksheetCard />
            </div>
            {/*end::Col*/}

             {/*begin::Col*/}
             <div className="col-md-6">
              <IndividualPlanAgendaCard />
            </div>
            {/*end::Col*/}

             {/*begin::Col*/}
             <div className="col-md-6">
              <IndividualPlanCard />
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

export default IndividualPlans