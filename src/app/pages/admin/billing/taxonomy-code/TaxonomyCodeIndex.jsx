import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import TaxonomyCodeHeader from './TaxonomyCodeHeader'
import New from './new/New'
import List from './list/List'
import Archive from './archive/Archive'

function TaxonomyCodeIndex() {
    return (
        <div>
            <TaxonomyCodeHeader />
            <Switch>
                <Route path="/billing/taxonomy-code/new">
                    <New />
                </Route>
                <Route path="/billing/taxonomy-code/list">
                    <List />
                </Route>
                <Route path="/billing/taxonomy-code/archive">
                    <Archive />
                </Route>
                <Redirect from='/billing/taxonomy-code' exact={true} to='/billing/taxonomy-code/new' />
                <Redirect to='/billing/taxonomy-code/new' />
            </Switch>
        </div>
    )
}

export default TaxonomyCodeIndex