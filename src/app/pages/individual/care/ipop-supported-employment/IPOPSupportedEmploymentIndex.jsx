import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import New from './new/New'
import Archive from './archive/Archive'
import Search from './search/Search'
import Acknowledge from './acknowledge/Acknowledge'
import IPOPSupportedEmploymentHeader from './IPOPSupportedEmploymentHeader'

function IPOPSupportedEmploymentIndex() {
  return (
    <div>
      <IPOPSupportedEmploymentHeader />
      <Switch>
        <Route path="/care/ipop-supported-employment/new">
          <New />
        </Route>
        <Route path="/care/ipop-supported-employment/archive">
          <Archive />
        </Route>
        <Route path="/care/ipop-supported-employment/acknowledge">
          <Acknowledge />
        </Route>
        <Route path="/care/ipop-supported-employment/search">
          <Search />
        </Route>
        <Redirect from='/care/ipop-supported-employment' exact={true} to='/care/ipop-supported-employment/new' />
        <Redirect to='/care/ipop-supported-employment/new' />
      </Switch>
    </div>
  )
}

export default IPOPSupportedEmploymentIndex