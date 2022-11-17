/* eslint-disable */
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import UnitCalculationRuleHeader from './UnitCalculationRuleHeader'
import New from './new/New'
import List from './list/List'
import Archive from './archive/Archive'

function BehaviorAntecedentInterventionIndex() {
    return (
        <div>
            <UnitCalculationRuleHeader />
            <Switch>
                <Route path="/billing/unit-calculation-rule/new">
                    <New />
                </Route>
                <Route path="/billing/unit-calculation-rule/list">
                    <List />
                </Route>
                <Route path="/billing/unit-calculation-rule/archive">
                    <Archive />
                </Route>
                <Redirect from='/billing/unit-calculation-rule' exact={true} to='/billing/unit-calculation-rule/new' />
                <Redirect to='/billing/unit-calculation-rule/new' />
            </Switch>
        </div>
    )
}

export default BehaviorAntecedentInterventionIndex