import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import New from './new/New'
import Search from './search/Search'
import RenewalSearch from './renewal-search/RenewalSearch'
import Archive from './archive/Archive'
import AppliedRateHistorySearch from './applied-rate-history-search/AppliedRateHistorySearch'
import ServiceAuthorizationHeader from './ServiceAuthorizationHeader'

function ISPProgramTemplateLiabraryIndex() {
  return (
    <div>
      <ServiceAuthorizationHeader/>
      <Switch>
        <Route path="/professionalclaim/service-authorization/new">
          <New />
        </Route>
        <Route path="/professionalclaim/service-authorization/search">
          <Search />
        </Route>
        <Route path="/professionalclaim/service-authorization/renewal-search">
          <RenewalSearch />
        </Route>
        <Route path="/professionalclaim/service-authorization/archive">
          <Archive />
        </Route>
        <Route path="/professionalclaim/service-authorization/applied-rate-history-search">
          <AppliedRateHistorySearch />
        </Route>
        <Redirect from='/professionalclaim/service-authorization' exact={true} to='/care/isp-program-template-liabrary/new' />
        <Redirect to='/professionalclaim/service-authorization/'/>
      </Switch>
    </div>
  )
}

export default ISPProgramTemplateLiabraryIndex