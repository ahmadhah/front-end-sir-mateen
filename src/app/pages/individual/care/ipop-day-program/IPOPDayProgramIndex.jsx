import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import New from './new/New'
import Archive from './archive/Archive'
import Search from './search/Search'
import Acknowledge from './acknowledge/Acknowledge'
import IPOPDayProgramHeader from './IPOPDayProgramHeader'


function IPOPDayProgramIndex() {
  return (
    <div>
      <IPOPDayProgramHeader />
      <Switch>
        <Route path="/care/ipop-day-program/new">
          <New/>          
        </Route>
        <Route path="/care/ipop-day-program/archive">
          <Archive />
        </Route>
        <Route path="/care/ipop-day-program/acknowledge">
          <Acknowledge />
        </Route>
        <Route path="/care/ipop-day-program/search">
          <Search />
        </Route>
        <Redirect from='/care/ipop-day-program' exact={true} to='/care/ipop-day-program/new' />
        <Redirect to='/care/ipop-day-program/new' />
      </Switch>
    </div>
  )
}

export default IPOPDayProgramIndex