import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import New from './new/New'
import Archive from './archive/Archive'
import Search from './search/Search'
import Acknowledge from './acknowledge/Acknowledge'
import IPOPIndividualizedServicesHeader from './IPOPIndividualizedServicesHeader'

function IPOPIndividualizedServicesIndex() {
  return (
    <div>
      <IPOPIndividualizedServicesHeader />
      <Switch>
      <Route path="/care/ipop-individualized-services/new">
          <New/>          
        </Route>
        <Route path="/care/ipop-individualized-services/archive">
          <Archive />
        </Route>
        <Route path="/care/ipop-individualized-services/acknowledge">
          <Acknowledge />
        </Route>
        <Route path="/care/ipop-individualized-services/search">
          <Search />
        </Route>
        <Redirect from='/care/ipop-individualized-services' exact={true} to='/care/ipop-individualized-services/new' />
        <Redirect to='/care/ipop-individualized-services/new' />
      </Switch>
    </div>
  )
}

export default IPOPIndividualizedServicesIndex