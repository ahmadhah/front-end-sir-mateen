import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import FundingSourceHeader from './FundingSourceHeader'
import New from './new/New'
import List from './list/List'
import Archive from './archive/Archive'

function FundingSourceIndex() {
    return (
        <div>
            <FundingSourceHeader />
            <Switch>
                <Route path="/billing/funding-source/new">
                    <New />
                </Route>
                <Route path="/billing/funding-source/list">
                    <List />
                </Route>
                <Route path="/billing/funding-source/archive">
                    <Archive />
                </Route>
                <Redirect from='/billing/funding-source' exact={true} to='/billing/funding-source/new' />
                <Redirect to='/billing/funding-source/new' />
            </Switch>
        </div>
    )
}

export default FundingSourceIndex