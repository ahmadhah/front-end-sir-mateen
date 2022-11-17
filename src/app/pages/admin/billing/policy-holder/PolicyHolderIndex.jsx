/* eslint-disable */
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import PolicyHolderHeader from './PolicyHolderHeader'
import New from './new/New'
import Search from './search/Search'
import Archive from './archive/Archive'


function PolicyHolderIndex() {
    return (
        <div>
            <PolicyHolderHeader />
            <Switch>
                <Route path="/billing/policy-holder/new">
                    <New />
                </Route>
                <Route path="/billing/policy-holder/search">
                    <Search />
                </Route>
                <Route path="/billing/policy-holder/archive">
                    <Archive />
                </Route>
                <Redirect from='/billing/policy-holder' exact={true} to='/billing/policy-holder/new' />
                <Redirect to='/billing/policy-holder/new' />
            </Switch>
        </div>
    )
}

export default PolicyHolderIndex