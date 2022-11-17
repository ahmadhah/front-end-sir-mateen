import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import LeaveRuleHeader from './LeaveRuleHeader'
import New from './new/New'
import List from './list/List'
import Archive from './archive/Archive'

function LeaveRuleIndex() {
    return (
        <div>
            <LeaveRuleHeader />
            <Switch>
                <Route path="/billing/leave-rule/new">
                    <New />
                </Route>
                <Route path="/billing/leave-rule/list">
                    <List />
                </Route>
                <Route path="/billing/leave-rule/archive">
                    <Archive />
                </Route>
                <Redirect from='/billing/leave-rule' exact={true} to='/billing/leave-rule/new' />
                <Redirect to='/billing/leave-rule/new' />
            </Switch>
        </div>
    )
}

export default LeaveRuleIndex