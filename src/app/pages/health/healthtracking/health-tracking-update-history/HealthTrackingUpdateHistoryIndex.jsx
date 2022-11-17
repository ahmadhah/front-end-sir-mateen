import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import HealthTrackingUpdateHistoryHeader from './HealthTrackingUpdateHistoryHeader'
import Search from './search/Search'

function HealthTrackingUpdateHistoryIndex() {
    return (
        <div>
            <HealthTrackingUpdateHistoryHeader />
            <Switch>
                <Route path="/healthtracking/health-tracking-update-history/search">
                    <Search />
                </Route>
                <Redirect from='/healthtracking/health-tracking-update-history' exact={true} to='/healthtracking/health-tracking-update-history/search' />
                <Redirect to='/healthtracking/health-tracking-update-history/search' />
            </Switch>
        </div>
    )
}

export default HealthTrackingUpdateHistoryIndex