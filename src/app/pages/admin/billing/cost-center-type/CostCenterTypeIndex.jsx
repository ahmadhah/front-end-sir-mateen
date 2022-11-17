import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import CostCenterTypeHeader from './CostCenterTypeHeader'
import New from './new/New'
import List from './list/List'
import Archive from './archive/Archive'


function CostCenterTypeIndex() {
    return (
        <div>
            <CostCenterTypeHeader />
            <Switch>
                <Route path="/billing/cost-center-type/new">
                    <New />
                </Route>
                <Route path="/billing/cost-center-type/list">
                    <List />
                </Route>
                <Route path="/billing/cost-center-type/archive">
                    <Archive />
                </Route>
                <Redirect from='/billing/cost-center-type' exact={true} to='/billing/cost-center-type/new' />
                <Redirect to='/billing/cost-center-type/new' />
            </Switch>
        </div>
    )
}

export default CostCenterTypeIndex