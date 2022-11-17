import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import New from './new/New'
import Search from './search/Search'
import StaffVisitorLogHeader from './StaffVisitorLogHeader'

function StaffVisitorLogIndex() {
    return (
        <div>
            <StaffVisitorLogHeader />
            <Switch>
                <Route path='/questionnaire-forms/staff-visitor-log/new'>
                    <New />
                </Route>
                <Route path='/questionnaire-forms/staff-visitor-log/search'>
                    <Search />
                </Route>
                <Redirect from='/questionnaire-forms/staff-visitor-log' exact={true} to='/questionnaire-forms/staff-visitor-log/new' />
                <Redirect to='/questionnaire-forms/staff-visitor-log/new' />
            </Switch>
        </div>
    )
}

export default StaffVisitorLogIndex