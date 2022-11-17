import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import InfectionTrackingHeader from './InfectionTrackingHeader'
import New from './new/New'
import Search from './search/Search'
import Report from './report/Report'

function InfectionTrackingIndex() {
    return (
        <div>
            <InfectionTrackingHeader />
            <Switch>
                <Route path="/healthtracking/infection-tracking/new">
                    <New />
                </Route>
                <Route path="/healthtracking/infection-tracking/report">
                    <Report />
                </Route>
                <Route path="/healthtracking/infection-tracking/search">
                    <Search />
                </Route>
                <Redirect from='/healthtracking/infection-tracking' exact={true} to='/healthtracking/infection-tracking/new' />
                <Redirect to='/healthtracking/infection-tracking/new' />
            </Switch>
        </div>
    )
}

export default InfectionTrackingIndex