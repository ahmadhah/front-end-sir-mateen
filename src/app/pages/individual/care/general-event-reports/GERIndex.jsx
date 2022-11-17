import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import GERHerder from './GERHeader'
import New from './new/New'
import Search from './search/Search'

function GERIndex() {
  return (
    <div>
      <GERHerder />
      <Switch>
        <Route path='/care/general-event-report/new'>
          <New />
        </Route>
        <Route path='/care/general-event-report/search'>
          <Search />
        </Route>
        <Redirect from='/care/general-event-report' exact={true} to='/care/general-event-report/new' />
        <Redirect to='/care/general-event-report/new' />
      </Switch>
    </div>
  )
}

export default GERIndex