import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import GERResolutionHeader from './GERResolutionHeader'
import New from './new/New'
import OpenInvestigations from './open-investigations/OpenInvestigations'
import OpenResolutions from './open-Resolutions/OpenResolutions'
import Search from './search/Search'
import UnaddressedGERs from './unaddressed-gers/UnaddressedGERs'

function GERResolutionIndex() {
  return (
    <div>
      <GERResolutionHeader/>
      <Switch>
        <Route path='/care/ger-resolution/new'>
          <New/>
        </Route>
        <Route path='/care/ger-resolution/unaddressed-gers'>
          <UnaddressedGERs/>
        </Route>
        <Route path='/care/ger-resolution/open-resolution'>
          <OpenResolutions/>
        </Route>
        <Route path='/care/ger-resolution/open-investigation'>
          <OpenInvestigations/>
        </Route>
        <Route path='/care/ger-resolution/search'>
          <Search/>
        </Route>
        <Redirect from='/care/ger-resolution' exact={true} to='/care/ger-resolution/new' />
        <Redirect to='/care/ger-resolution/new' />
      </Switch>
    </div>
  )
}

export default GERResolutionIndex