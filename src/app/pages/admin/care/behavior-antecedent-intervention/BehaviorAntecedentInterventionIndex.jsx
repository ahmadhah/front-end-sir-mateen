import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import BehaviorAntecedentInterventionHeader from './BehaviorAntecedentInterventionHeader'
import Add from './add/Add'
import Edit from './edit/Edit'

function BehaviorAntecedentInterventionIndex() {
    return (
        <div>
            <BehaviorAntecedentInterventionHeader />
            <Switch>
                <Route path="/care/behavior-antecedent-intervention/add">
                    <Add />
                </Route>
                <Route path="/care/behavior-antecedent-interventiong/edit">
                    <Edit />
                </Route>
                <Redirect from='/care/behavior-antecedent-intervention' exact={true} to='/care/behavior-antecedent-intervention/new' />
                <Redirect to='/care/behavior-antecedent-intervention/new' />
            </Switch>
        </div>
    )
}

export default BehaviorAntecedentInterventionIndex