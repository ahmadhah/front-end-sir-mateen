import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ISPDataHeader from './ISPDataHeader'
import New from './new/New'
import Report from './report/Report'
import Search from './search/Search'
import SearchReport from './search-report/SearchReport'

function ISPDataIndex() {
  return (
    <div>
        <ISPDataHeader />
        <Switch>
            <Route path="/care/isp-data/new">
                <New/>
            </Route>/
            <Route path="/care/isp-data/search">
                <Search/>
            </Route>
            <Route path="/care/isp-data/report">
                <Report/>
            </Route>
            <Route path="/care/isp-data/search-report">
                <SearchReport/>
            </Route>
            <Redirect from='/care/isp-data' exact={true} to='/care/isp-data/new' />
        <Redirect to='/care/isp-data/new' />
        </Switch>
    </div>
  )
}

export default ISPDataIndex