import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import New from './new/New'
import Archive from './archive/Archive'
import Search from './search/Search'
import Acknowledge from './acknowledge/Acknowledge'
import IPOPResidentialInformationHeader from './IPOPResidentialInformationHeader'

function IPOPResidentialInformationIndex() {
  return (
    <div>
      <IPOPResidentialInformationHeader />
      <Switch>
        <Route path="/care/ipop-residential-information/new">
          <New />
        </Route>
        <Route path="/care/ipop-residential-information/archive">
          <Archive />
        </Route>
        <Route path="/care/ipop-residential-information/acknowledge">
          <Acknowledge />
        </Route>
        <Route path="/care/ipop-residential-information/search">
          <Search />
        </Route>
        <Redirect from='/care/ipop-residential-information' exact={true} to='/care/ipop-residential-information/new' />
        <Redirect to='/care/ipop-residential-information/new' />
      </Switch>
    </div>
  )
}

export default IPOPResidentialInformationIndex