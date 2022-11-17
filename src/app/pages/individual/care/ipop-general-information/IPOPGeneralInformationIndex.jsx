import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import New from './new/New'
import Archive from './archive/Archive'
import Search from './search/Search'
import Acknowledge from './acknowledge/Acknowledge'
import IPOPGeneralInformationHeader from './IPOPGeneralInformationHeader'

function IPOPGeneralInformationIndex() {
  return (
    <div>
      <IPOPGeneralInformationHeader />
      <Switch>
        <Route path="/care/ipop-general-information/new">
          <New />
        </Route>
        <Route path="/care/ipop-general-information/archive">
          <Archive />
        </Route>
        <Route path="/care/ipop-general-information/acknowledge">
          <Acknowledge />
        </Route>
        <Route path="/care/ipop-general-information/search">
          <Search />
        </Route>
        <Redirect from='/care/ipop-general-information' exact={true} to='/care/ipop-general-information/new' />
        <Redirect to='/care/ipop-general-information/new' />
      </Switch>
    </div>
  )
}

export default IPOPGeneralInformationIndex