import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import CustomAttendancePDFConfigurationHeader from './CustomAttendancePDFConfigurationHeader'
import New from './new/New'
import List from './list/List'
import Archive from './archive/Archive'

function CustomAttendancePDFConfigurationIndex() {
    return (
        <div>
            <CustomAttendancePDFConfigurationHeader />
            <Switch>
                <Route path="/billing/custom-attendance-pdf-configuration/new">
                    <New />
                </Route>
                <Route path="/billing/custom-attendance-pdf-configuration/list">
                    <List />
                </Route>
                <Route path="/billing/custom-attendance-pdf-configuration/archive">
                    <Archive />
                </Route>
                <Redirect from='/billing/custom-attendance-pdf-configuration' exact={true} to='/billing/custom-attendance-pdf-configuration/new' />
                <Redirect to='/billing/custom-attendance-pdf-configuration/new' />
            </Switch>
        </div>
    )
}

export default CustomAttendancePDFConfigurationIndex