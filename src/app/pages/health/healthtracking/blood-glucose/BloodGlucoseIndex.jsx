import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import BloodGlucoseHeader from './BloodGlucoseHeader'
import New from './new/New'
import Search from './search/Search'
import Report from './report/Report'

function BloodGlucoseIndex() {
    return (
        <div>
            <BloodGlucoseHeader />
            <Switch>
                <Route path="/healthtracking/blood-glucose/new">
                    <New />
                </Route>
                <Route path="/healthtracking/blood-glucose/search">
                    <Search />
                </Route>
                <Route path="/healthtracking/blood-glucose/report">
                    <Report />
                </Route>
                <Redirect from='/healthtracking/blood-glucose' exact={true} to='/healthtracking/blood-glucose/new' />
                <Redirect to='/healthtracking/blood-glucose/new' />
            </Switch>
        </div>
    )
}

export default BloodGlucoseIndex