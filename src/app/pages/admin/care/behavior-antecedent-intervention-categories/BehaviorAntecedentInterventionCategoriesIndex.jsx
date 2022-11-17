import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import BehaviorAntecedentInterventionCategoriesHeader from './BehaviorAntecedentInterventionCategoriesHeader'
import Add from './add/Add'
import Edit from './edit/Edit'

function BehaviorAntecedentInterventionCategoriesIndex() {
    return (
        <div>
            <BehaviorAntecedentInterventionCategoriesHeader />
            <Switch>
                <Route path="/care/behavior-antecedent-intervention-categories/add">
                    <Add />
                </Route>
                <Route path="/care/behavior-antecedent-intervention-categories/edit">
                    <Edit />
                </Route>
                <Redirect from='/care/behavior-antecedent-intervention-categories' exact={true} to='/care/behavior-antecedent-intervention-categories/add' />
                <Redirect to='/care/behavior-antecedent-intervention-categories/add' />
            </Switch>
        </div>
    )
}

export default BehaviorAntecedentInterventionCategoriesIndex