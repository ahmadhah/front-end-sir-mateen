import React from 'react'
import AgencyBasedReportsCard from './agency-based-reports/card/AgencyBasedReportsCard'
import BillingConversionCard from './billing-conversion/card/BillingConversionCard'
import ClaimTemplateCard from './claim-template/card/ClaimTemplateCard'
import ExcelUploadCard from './excel-upload/card/ExcelUploadCard'
import ProfessionalClaimCard from './professional-claim/card/ProfessionalClaimCard'
import ServiceAuthorizationCard from './service-authorization/card/ServiceAuthorizationCard'
import ProfessionalClaimHeader from './ProfessionalClaimHeader'

function ProfessionalClaim() {
  return (
    <div>
      {/*begin::Post*/}
      <div className="post d-flex flex-column-fluid" id="kt_post">
        {/*begin::Container*/}
        <div id="kt_content_container" className="container-xxl">
        <ProfessionalClaimHeader/>
          {/*begin::Row*/}
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">

            {/*begin::Col*/}
            <div className="col-xl-12 col-md-12">
              <AgencyBasedReportsCard />
            </div>
            {/*end::Col*/}

          </div>
          {/*end::Row*/}
          
          {/*begin::Row*/}
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">

            {/*begin::Col*/}
            <div className="col-xl-6 col-md-6">
              <ExcelUploadCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-xl-6 col-md-6">
              <ServiceAuthorizationCard />
            </div>
            {/*end::Col*/}

          </div>
          {/*end::Row*/}

          {/*begin::Row*/}
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">

            {/*begin::Col*/}
            <div className="col-md-6">
              <ClaimTemplateCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <BillingConversionCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <ProfessionalClaimCard />
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

export default ProfessionalClaim