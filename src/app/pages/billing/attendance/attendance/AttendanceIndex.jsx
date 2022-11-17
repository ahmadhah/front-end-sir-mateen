import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import New from './new/New'
import Search from './search/Search'
import Summary from './summary/Summary'
import Archive from './archive/Archive'
import AttendanceHeader from './AttendanceHeader'

function AttendanceIndex() {
  return (
    <div>
      <AttendanceHeader/>
      <Switch>
        <Route path="/billing/attendance-card/attendance/new">
          <New/>
        </Route>
        <Route path="/billing/attendance-card/attendance/search">
          <Search/>
        </Route>
        <Route path="/billing/attendance-card/attendance/archive">
          <Archive/>
        </Route>
        <Route path="/billing/attendance-card/attendance/summary">
          <Summary/>
        </Route>
        <Redirect from='/billing/attendance-card/attendance' exact={true} to='/billing/attendance-card/attendance/new' />
        <Redirect to='/billing/attendance-card/attendance/new' />
      </Switch>
    </div>
  )
}

export default AttendanceIndex