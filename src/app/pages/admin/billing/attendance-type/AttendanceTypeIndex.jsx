import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import AttendanceTypeHeader from './AttendanceTypeHeader'
import New from './new/New'
import List from './list/List'
import Archive from './archive/Archive'

function AttendanceTypeIndex() {
    return (
        <div>
            <AttendanceTypeHeader />
            <Switch>
                <Route path="/billing/attendance-type/new">
                    <New />
                </Route>
                <Route path="/billing/attendance-type/list">
                    <List />
                </Route>
                <Route path="/billing/attendance-type/archive">
                    <Archive />
                </Route>
                <Redirect from='/billing/attendance-type' exact={true} to='/billing/attendance-type/new' />
                <Redirect to='/billing/attendance-type/new' />
            </Switch>
        </div>
    )
}

export default AttendanceTypeIndex