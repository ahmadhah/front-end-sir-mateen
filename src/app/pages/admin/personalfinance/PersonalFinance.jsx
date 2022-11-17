/* eslint-disable */
import React from 'react'
import InstitutionCard from './institution/card/InstitutionCard'
import MerchantCard from './merchant/card/MerchantCard'
import TypesAndCategoriesCard from './types-and-categories/card/TypesAndCategoriesCard'
import PersonalFinanceHeader from './PersonalFinanceHeader'


function PersonalFinance() {
  return (
    <div>
      <PersonalFinanceHeader/>
 {/*begin::Post*/}
 <div className="post d-flex flex-column-fluid" id="kt_post">
        {/*begin::Container*/}
        <div id="kt_content_container" className="container-xxl">
          {/*begin::Row*/}
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">
            {/*begin::Col*/}
            <div className="col-md-6">
              <InstitutionCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <MerchantCard />
            </div>
            {/*end::Col*/}

            {/*begin::Col*/}
            <div className="col-md-6">
              <TypesAndCategoriesCard />
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

export default PersonalFinance