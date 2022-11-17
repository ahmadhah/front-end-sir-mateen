import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import AgingReport from './aging-report/AgingReport'
import DeniedClaim from './denied-claim/DeniedClaim'
import Reconciliation from './reconciliation/Reconciliation'
import ReconciliationServiceLevel from './reconciliation-service-level/ReconciliationServiceLevel'
import SubmissionErrors from './submission-errors/SubmissionErrors'
import Unclaimed from './unclaimed/Unclaimed'
import Utilization from './utilization/Utilization'
import AgencyBasedReportsHeader from './AgencyBasedReportsHeader'

function AgencyBasedReportsIndex() {
  return (
    <div>
      <AgencyBasedReportsHeader/>
      <Switch>
        <Route path="/professionalclaim/agency-based-reports/aging-report">
          <AgingReport />
        </Route>
        <Route path="/professionalclaim/agency-based-reports/denied-claim">
          <DeniedClaim />
        </Route>
        <Route path="/professionalclaim/agency-based-reports/reconciliation">
          <Reconciliation />
        </Route>
        <Route path="/professionalclaim/agency-based-reports/reconciliation-service-level">
          <ReconciliationServiceLevel />
        </Route>
        <Route path="/professionalclaim/agency-based-reports/submission-errors">
          <SubmissionErrors />
        </Route> <Route path="/professionalclaim/agency-based-reports/unclaimed">
          <Unclaimed />
        </Route> <Route path="/professionalclaim/agency-based-reports/utilization">
          <Utilization />
        </Route>
        <Redirect from='/professionalclaim/agency-based-reports' exact={true} to='/professionalclaim/agency-based-reports/denied-claim' />
        <Redirect to='/professionalclaim/agency-based-reports/'/>
      </Switch>
    </div>
  )
}

export default AgencyBasedReportsIndex