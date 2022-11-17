import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import IndividualPlanAgendaHeader from './IndividualPlanAgendaHeader'
import New from './new/New'
import Search from './search/Search'

function IndividualPlanAgendaIndex() {
    return (
        <div>
            <IndividualPlanAgendaHeader />
            <Switch>
                <Route path="/individualplans/individual-plan-agenda/new">
                    <New />
                </Route>
                <Route path="/individualplans/individual-plan-agenda/search">
                    <Search />
                </Route>
                <Redirect from='/individualplans/individual-plan-agenda' exact={true} to="/individualplans/individual-plan-agenda/new" />
                <Redirect to="/individualplans/individual-plan-agenda/new" />
            </Switch>
        </div>
    )
}

export default IndividualPlanAgendaIndex