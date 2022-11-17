import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import LabTestGroupHeader from './LabTestGroupHeader'
import New from './new/New'
import List from './list/List'

function LabTestGroupIndex() {
    return (
        <div>
            <LabTestGroupHeader />
            <Switch>
                <Route path="/healthtracking/lab-test-group/new">
                    <New />
                </Route>
                <Route path="/healthtracking/lab-test-group/list">
                    <List />
                </Route>
                <Redirect from='/healthtracking/lab-test-group' exact={true} to='/healthtracking/lab-test-group/new' />
                <Redirect to='/healthtracking/lab-test-group/new' />
            </Switch>
        </div>
    )
}

export default LabTestGroupIndex