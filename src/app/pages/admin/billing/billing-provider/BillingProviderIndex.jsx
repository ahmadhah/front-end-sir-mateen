import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import BillingProviderHeader from './BillingProviderHeader'
import New from './new/New'
import Archive from './archive/Archive'
import Search from './search/Search'

function BillingProviderIndex() {
    return (
        <div>
            <BillingProviderHeader />
            <Switch>
                <Route path="/billing/billing-provider/new">
                    <New />
                </Route>
                <Route path="/billing/billing-provider/archive">
                    <Archive />
                </Route>
                <Route path="/billing/billing-provider/search">
                    <Search />
                </Route>
                <Redirect from='/billing/billing-provider' exact={true} to='/billing/billing-provider/new' />
                <Redirect to='/billing/billing-provider/new' />
            </Switch>
        </div>
    )
}

export default BillingProviderIndex