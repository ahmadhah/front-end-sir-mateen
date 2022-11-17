import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import LabTestHeader from './LabTestHeader'
import New from './new/New'
import List from './list/List'

function LabTestIndex() {
    return (
        <div>
            <LabTestHeader />
            <Switch>
                <Route path="/healthtracking/lab-test/new">
                    <New />
                </Route>
                <Route path="/healthtracking/lab-test/list">
                    <List />
                </Route>
                <Redirect from='/healthtracking/lab-test' exact={true} to='/healthtracking/lab-test/new' />
                <Redirect to='/healthtracking/lab-test/new' />
            </Switch>
        </div>
    )
}

export default LabTestIndex