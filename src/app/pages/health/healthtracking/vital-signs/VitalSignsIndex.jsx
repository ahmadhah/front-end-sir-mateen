import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import VitalSignsHeader from './VitalSignsHeader'
import New from './new/New'
import Search from './search/Search'
import Report from './report/Report'

function VitalSignsIndex() {
    return (
        <div>
            <VitalSignsHeader />
            <Switch>
                <Route path="/healthtracking/vital-signs/new">
                    <New />
                </Route>
                <Route path="/healthtracking/vital-signs/report">
                    <Report />
                </Route>
                <Route path="/healthtracking/vital-signs/search">
                    <Search />
                </Route>
                <Redirect from='/healthtracking/vital-signs' exact={true} to='/healthtracking/vital-signs/new' />
                <Redirect to='/healthtracking/vital-signs/new' />
            </Switch>
        </div>
    )
}

export default VitalSignsIndex