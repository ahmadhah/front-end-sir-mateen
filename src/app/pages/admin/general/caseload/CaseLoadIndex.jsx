import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import CaseLoadHeader from './CaseLoadHeader'
import Manage from './manage/Manage'
import Archive from './archive/Archive'

function CaseLoadIndex() {
    return (
        <div>
            <CaseLoadHeader />
            <Switch>
                <Route path="/general/caseload/manage">
                    <Manage />
                </Route>
                <Route path="/general/caseload/archive">
                    <Archive />
                </Route>
                <Redirect from='/general/caseload' exact={true} to='/general/caseload/manage' />
                <Redirect to='/general/caseload/manage' />
            </Switch>
        </div>
    )
}

export default CaseLoadIndex