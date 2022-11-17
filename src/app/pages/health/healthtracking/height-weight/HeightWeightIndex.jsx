import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import HeightWeightHeader from './HeightWeightHeader'
import New from './new/New'
import Report from './report/Report'
import Search from './search/Search'

function HealthTrackingReportsIndex() {
    return (
        <div>
            <HeightWeightHeader />
            <Switch>
                <Route path="/healthtracking/height-weight/new">
                    <New />
                </Route>
                <Route path="/healthtracking/height-weight/report">
                    <Report />
                </Route>
                <Route path="/healthtracking/height-weight/search">
                    <Search />
                </Route>
                <Redirect from='/healthtracking/height-weight' exact={true} to='/healthtracking/height-weight/new' />
                <Redirect to='/healthtracking/height-weight/new' />
            </Switch>
        </div>
    )
}

export default HealthTrackingReportsIndex