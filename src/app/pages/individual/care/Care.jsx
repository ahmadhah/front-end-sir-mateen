/* eslint-disable */
import React from 'react'
import TLogCard from './t-log/card/TLogCard'
import ConsentAndAuthorizationCard from './consent-and-authorization/card/ConsentAndAuthorizationCard'
import EventSummariesCard from './event-summaries/card/EventSummariesCard'
import GERCard from './general-event-reports/card/GERCard'
import GERRCard from './ger-resolution/card/GERRCard'
import GlobalTemplateLibraryCard from './global-template-library/card/GlobalTemplateLibraryCard'
import IndividualDemographicsCard from './individual-demographics/card/IndividualDemographicsCard'
import IndividualMedicalInformationCard from './individual-medical-information/card/IndividualMedicalInformationCard'
import IPOPDayProgramCard from './ipop-day-program/card/IPOPDayProgramCard'
import IPOPGeneralInformationCard from './ipop-general-information/card/IPOPGeneralInformationCard'
import IPOPIndividualizedServicesCard from './ipop-individualized-services/card/IPOPIndividualizedServicesCard'
import IPOPResidentialInformationCard from './ipop-residential-information/card/IPOPResidentialInformationCard'
import IPOPSupportedEmploymentCard from './ipop-supported-employment/card/IPOPSupportedEmploymentCard'
import IPOPWorkCenterCard from './ipop-work-center/card/IPOPWorkCenterCard'
import ISPDataCard from './isp-data/card/ISPDataCard'
import ISPProgramTemplateLiabraryCard from './isp-program-template-liabrary/card/ISPProgramTemplateLiabraryCard'
import ISPProgramCard from './isp-program/card/ISPProgramCard'
import WitnessCard from './witness/card/WitnessCard'
import CareHeader from './CareHeader'

function Care() {
  return (
    <div>
      {/*begin::Post*/}
      <div className="post d-flex flex-column-fluid" id="kt_post">
        {/*begin::Container*/}
        <div id="kt_content_container" className="container-xxl">
          <CareHeader/>
          {/*begin::Row*/}
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">

            {/*begin::Col*/}
            <div className="col-md-6">
              <GlobalTemplateLibraryCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <EventSummariesCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <WitnessCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <ISPProgramCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <GERCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <ConsentAndAuthorizationCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <TLogCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <ISPProgramTemplateLiabraryCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <IndividualDemographicsCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <IPOPGeneralInformationCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <IPOPResidentialInformationCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <IPOPDayProgramCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <IPOPSupportedEmploymentCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <IPOPWorkCenterCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <IPOPIndividualizedServicesCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <ISPDataCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <GERRCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <IndividualMedicalInformationCard />
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

export default Care