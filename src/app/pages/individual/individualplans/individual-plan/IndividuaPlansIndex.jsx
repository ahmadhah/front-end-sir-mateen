/* eslint-disable */
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import IndividuaPlansHeader from './IndividualPlansHeader'
import Acknowledge from './acknowledge/Acknowledge'
import Search from './search/Search'

function IndividuaPlansIndex() {
    return (
        <div>
            <IndividuaPlansHeader />
            <Switch>
                <Route path="/individualplans/individual-plan/acknowledge">
                    <Acknowledge />
                </Route>
                <Route path="/individualplans/individual-plan/search">
                    <Search />
                </Route>
                <Redirect from="/individualplans/individual-plan" exact={true} to="/individualplans/individual-plan/acknowledge" />
                <Redirect to="/individualplans/individual-plan/acknowledge" />
            </Switch>
        </div>
    )
}

export default IndividuaPlansIndex