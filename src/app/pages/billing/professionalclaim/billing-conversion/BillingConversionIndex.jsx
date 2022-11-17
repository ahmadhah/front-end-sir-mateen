import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ISPBilling from './isp-billing/ISPBilling'
import ISPBillingUnitCalculation from './isp-billing-unit-calculation-rule/ISPBillingUnitCalculation'
import CaseNotBilling from './case-not-billing/CaseNotBilling'
import BillingConversionHeader from './BillingConversionHeader'

function BillingConversionIndex() {
  return (
    <div>
      <BillingConversionHeader />
      <Switch>
        <Route path="/professionalclaim/billing-conversion/isp-billing">
          <ISPBilling />
        </Route>
        <Route path="/professionalclaim/billing-conversion/isp-billing-unit-calculation-rule">
          <ISPBillingUnitCalculation />
        </Route>
        <Route path="/professionalclaim/billing-conversion/case-not-billing">
          <CaseNotBilling />
        </Route>
        <Redirect from='/professionalclaim/billing-conversion' exact={true} to='/care/isp-program-template-liabrary/new' />
        <Redirect to='/professionalclaim/billing-conversion/' />
      </Switch>
    </div>
  )
}

export default BillingConversionIndex