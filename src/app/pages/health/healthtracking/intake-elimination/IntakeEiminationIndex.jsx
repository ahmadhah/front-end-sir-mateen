import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import IntakeEiminationHeader from './IntakeEiminationHeader'
import New from './new/New'
import Search from './search/Search'
import Report from './report/Report'

function IntakeEiminationIndex() {
    return (
        <div>
            <IntakeEiminationHeader />
            <Switch>
                <Route path="/healthtracking/intake-elimination/new">
                    <New />
                </Route>
                <Route path="/healthtracking/intake-elimination/report">
                    <Report />
                </Route>
                <Route path="/healthtracking/intake-elimination/search">
                    <Search />
                </Route>
                <Redirect from='/healthtracking/intake-elimination' exact={true} to='/healthtracking/intake-elimination/new' />
                <Redirect to='/healthtracking/intake-elimination/new' />
            </Switch>
        </div>
    )
}

export default IntakeEiminationIndex