import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import New from './new/New'
import Archive from './archive/Archive'
import Search from './search/Search'
import Acknowledge from './acknowledge/Acknowledge'
import IPOPWorkCenterHeader from './IPOPWorkCenterHeader'

function IPOPWorkCenterIndex() {
  return (
    <div>
        <IPOPWorkCenterHeader />
        <Switch>
        <Route path="/care/ipop-work-center/new">
          <New/>          
        </Route>
        <Route path="/care/ipop-work-center/archive">
          <Archive />
        </Route>
        <Route path="/care/ipop-work-center/acknowledge">
          <Acknowledge />
        </Route>
        <Route path="/care/ipop-work-center/search">
          <Search />
        </Route>
        <Redirect from='/care/ipop-work-center' exact={true} to='/care/ipop-work-center/new' />
        <Redirect to='/care/ipop-work-center/new' />
      </Switch>
    </div>
  )
}

export default IPOPWorkCenterIndex