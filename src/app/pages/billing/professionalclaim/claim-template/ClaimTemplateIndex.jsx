import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Search from './search/Search'
import New from './new/New'
import ClaimTemplateHeader from './ClaimTemplateHeader'

function ClaimTemplateIndex() {
  return (
    <div>
      <ClaimTemplateHeader/>
      <Switch>
        <Route path="/professionalclaim/claim-template/new">
          <New />
        </Route>
        <Route path="/professionalclaim/claim-template/search">
          <Search />
        </Route>
        <Redirect from='/professionalclaim/claim-template' exact={true} to='/care/isp-program-template-liabrary/new' />
        <Redirect to='/professionalclaim/claim-template/'/>
      </Switch>
    </div>
  )
}

export default ClaimTemplateIndex