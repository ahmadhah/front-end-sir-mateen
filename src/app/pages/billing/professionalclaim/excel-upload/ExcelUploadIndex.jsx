import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ClaimBulkUpload from './claim-bulk-update/ClaimBulkUpload'
import ClaimBulkUploadSearch from './claim-bulk-update-upload-search/ClaimBulkUploadSearch'
import ManualReconciliation from './manual-reconciliation/ManualReconciliation'
import ManualReconciliationUploadSearch from './manual-reconciliation-upload-search/ManualReconciliationUploadSearch'
import ExcelUploadHeader from './ExcelUploadHeader'

function ISPProgramTemplateLiabraryIndex() {
  return (
    <div>
      <ExcelUploadHeader/>
      <Switch>
        <Route path="/professionalclaim/excel-upload/claim-bulk-update">
          <ClaimBulkUpload />
        </Route>
        <Route path="/professionalclaim/excel-upload/claim-bulk-update-upload-search">
          <ClaimBulkUploadSearch />
        </Route>
        <Route path="/professionalclaim/excel-upload/manual-reconciliation">
          <ManualReconciliation />
        </Route>
        <Route path="/professionalclaim/excel-upload/manual-reconciliation-upload-search">
          <ManualReconciliationUploadSearch />
        </Route>
        <Redirect from='/professionalclaim/excel-upload' exact={true} to='/care/isp-program-template-liabrary/new' />
        <Redirect to='/professionalclaim/excel-upload/'/>
      </Switch>
    </div>
  )
}

export default ISPProgramTemplateLiabraryIndex