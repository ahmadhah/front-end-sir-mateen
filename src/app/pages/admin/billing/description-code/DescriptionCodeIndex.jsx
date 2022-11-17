import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import DescriptionCodeHeader from './DescriptionCodeHeader'
import New from './new/New'
import List from './list/List'
import Archive from './archive/Archive'
import AppliedRateHistorySearchProfessional from './applied-rate-history-search-professional/AppliedRateHistorySearchProfessional'

function DescriptionCodeIndex() {
    return (
        <div>
            <DescriptionCodeHeader />
            <Switch>
                <Route path="/billing/description-code/new">
                    <New />
                </Route>
                <Route path="/billing/description-code/list">
                    <List />
                </Route>
                <Route path="/billing/description-code/archive">
                    <Archive />
                </Route>
                <Route path="/billing/description-code/applied-rate-history-search-professional">
                    <AppliedRateHistorySearchProfessional />
                </Route>
                <Redirect from='/billing/description-code' exact={true} to='/billing/description-code/new' />
                <Redirect to='/billing/description-code/new' />
            </Switch>
        </div>
    )
}

export default DescriptionCodeIndex