import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import OutcomeMeasureTypesHeader from './OutcomeMeasureTypesHeader'
import New from './new/New'
import List from './list/List'

function OutcomeMeasureTypesIndex() {
    return (
        <div>
            <OutcomeMeasureTypesHeader />
            <Switch>
                <Route path="/datadrivenoutcome/outcome-measure-types/new">
                    <New />
                </Route>
                <Route path="/datadrivenoutcome/outcome-measure-types/list">
                    <List />
                </Route>
                <Redirect from='/datadrivenoutcome/outcome-measure-types' exact={true} to='/datadrivenoutcome/outcome-measure-types/new' />
                <Redirect to='/datadrivenoutcome/outcome-measure-types/new' />
            </Switch>
        </div>
    )
}

export default OutcomeMeasureTypesIndex