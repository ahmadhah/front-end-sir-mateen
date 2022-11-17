import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import CarrierHeader from './CarrierHeader'
import New from './new/New'
import List from './list/List'
import Archive from './archive/Archive'


function CarrierIndex() {
    return (
        <div>
            <CarrierHeader />
            <Switch>
                <Route path="/billing/carrier/new">
                    <New />
                </Route>
                <Route path="/billing/carrier/list">
                    <List />
                </Route>
                <Route path="/billing/carrier/archive">
                    <Archive />
                </Route>
                <Redirect from='/billing/carrier' exact={true} to='/billing/carrier/new' />
                <Redirect to='/billing/carrier/new' />
            </Switch>
        </div>
    )
}

export default CarrierIndex