import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import BehaviorHeader from './BehaviorHeader'
import BehaviorAntecedentIntervention from './behavior-antecedent-intervention/behavior-antecedent-intervention'
import BehaviorAntecedentInterventionCategories from './behavior-antecedent-intervention-categories/behavior-antecedent-intervention-categories'
import BehaviorIntensityConfiguration from './behavior-intensity-configuration/behavior-intensity-configuration'

function BehaviorIndex() {
    return (
        <div>
            <BehaviorHeader />
            <Switch>
                <Route path="/care/behavior/behavior-antecedent-intervention/">
                    <BehaviorAntecedentIntervention />
                </Route>
                <Route path="/care/behavior/behavior-antecedent-intervention-categories/">
                    <BehaviorAntecedentInterventionCategories />
                </Route>
                <Route path="/care/behavior/behavior-intensity-configuration">
                    <BehaviorIntensityConfiguration />
                </Route>
                <Redirect from='/care/behavior' exact={true} to="/care/behavior/behavior-antecedent-intervention/" />
            </Switch>
        </div>
    )
}

export default BehaviorIndex