import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import HealthCareReportsHeader from './HealthCareReportsHeader'
import New from './new/New'
import Search from './search/Search'

function HealthCareReportsIndex() {
    return (
        <div>
            <HealthCareReportsHeader />
            <Switch>
                <Route path="/healthtracking/health-care-reports/new">
                    <New />
                </Route>
                <Route path="/healthtracking/health-care-reports/search">
                    <Search />
                </Route>
                <Redirect from='/healthtracking/health-care-reports' exact={true} to='/healthtracking/health-care-reports/new' />
                <Redirect to='/healthtracking/health-care-reports/new' />
            </Switch>
        </div>
    )
}

export default HealthCareReportsIndex