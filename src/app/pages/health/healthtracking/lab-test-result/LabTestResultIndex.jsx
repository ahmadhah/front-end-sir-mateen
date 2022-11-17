import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import LabTestResultHeader from './LabTestResultHeader'
import New from './new/New'
import Search from './search/Search'
import Report from './report/Report'

function LabTestResultIndex() {
    return (
        <div>
            <LabTestResultHeader />
            <Switch>
                <Route path="/healthtracking/lab-test-result/new">
                    <New />
                </Route>
                <Route path="/healthtracking/lab-test-result/report">
                    <Report />
                </Route>
                <Route path="/healthtracking/lab-test-result/search">
                    <Search />
                </Route>
                <Redirect from='/healthtracking/lab-test-result' exact={true} to='/healthtracking/lab-test-result/new' />
                <Redirect to='/healthtracking/lab-test-result/new' />
            </Switch>
        </div>
    )
}

export default LabTestResultIndex