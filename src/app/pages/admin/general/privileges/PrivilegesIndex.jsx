import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import PrivilegesHeader from './PrivilegesHeader'
import Refresh from './refresh/Refresh'

function PrivilegesIndex() {
    return (
        <div>
            <PrivilegesHeader />
            <Switch>
                <Route path="/general/privileges/refresh">
                    <Refresh />
                </Route>
                <Redirect from='/general/privileges' exact={true} to='/general/privileges/refresh' />
                <Redirect to='/general/privileges/refresh' />
            </Switch>
        </div>
    )
}

export default PrivilegesIndex