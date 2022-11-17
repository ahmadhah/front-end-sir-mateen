import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ImmunizationHeader from './ImmunizationHeader'
import New from './new/New'
import Search from './search/Search'

function ImmunizationIndex() {
    return (
        <div>
            <ImmunizationHeader />
            <Switch>
                <Route path="/healthtracking/immunization/new">
                    <New />
                </Route>
                <Route path="/healthtracking/immunization/search">
                    <Search />
                </Route>
                <Redirect from='/healthtracking/immunization' exact={true} to='/healthtracking/immunization/new' />
                <Redirect to='/healthtracking/immunization/new' />
            </Switch>
        </div>
    )
}

export default ImmunizationIndex