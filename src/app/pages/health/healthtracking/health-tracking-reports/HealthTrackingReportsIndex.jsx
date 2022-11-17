import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import HealthTrackingReportsHeader from './HealthTrackingReportsHeader'
import Detailed from './detailed/Detailed'
import Monthly from './monthly/Monthly'

function HealthTrackingReportsIndex() {
    return (
        <div>
            <HealthTrackingReportsHeader />
            <Switch>
                <Route path="/healthtracking/health-tracking-reports/monthly">
                    <Monthly />
                </Route>
                <Route path="/healthtracking/health-tracking-reports/detailed">
                    <Detailed />
                </Route>
                <Redirect from='/healthtracking/health-tracking-reports' exact={true} to='/healthtracking/health-tracking-reports/monthly' />
                <Redirect to='/healthtracking/health-tracking-reports/monthly' />
            </Switch>
        </div>
    )
}

export default HealthTrackingReportsIndex