import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ChangePasswordHeader from './ChangePasswordHeader'
import UserList from './user-list/UserList'

function ChangePasswordIndex() {
    return (
        <div>
            <ChangePasswordHeader />
            <Switch>
                <Route path="/general/change-password/user-list">
                    <UserList />
                </Route>
                <Redirect from='/general/change-password' exact={true} to='/general/change-password/user-list' />
                <Redirect to='/general/change-password/user-list' />
            </Switch>
        </div>
    )
}

export default ChangePasswordIndex