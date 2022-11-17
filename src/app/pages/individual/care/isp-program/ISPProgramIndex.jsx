import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Search from './search/Search'
import New from './new/New'
import ISPProgramHeader from './ISPProgramHeader'


function ISPProgramIndex() {
  return (
    <div>
      <ISPProgramHeader />
      <Switch>
        <Route path="/care/isp-program/new">
          <New />
        </Route>
        <Route path="/care/isp-program/search">
          <Search />
        </Route>
        <Redirect from='/care/isp-program' exact={true} to='/care/isp-program/new' />
        <Redirect to='/care/isp-program/new' />
      </Switch>
    </div>
  )
}

export default ISPProgramIndex