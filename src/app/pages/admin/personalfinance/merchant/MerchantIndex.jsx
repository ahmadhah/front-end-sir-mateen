/* eslint-disable */
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MerchantHeader from './MerchantHeader'
import New from './new/New'
import List from './list/List'
import ImportFromExcel from './import-from-excel/ImportFromExcel'

function UserIndex() {
    return (
        <div>
            <MerchantHeader />
            <Switch>
                <Route path="/personalfinance/merchant/new">
                    <New />
                </Route>
                <Route path="/personalfinance/merchant/list">
                    <List />
                </Route>
                 <Route path="/personalfinance/merchant/import-from-excel">
                    <ImportFromExcel />
                </Route>
                <Redirect from='/personalfinance/merchant' exact={true} to='/personalfinance/merchant/new' />
                <Redirect to='/personalfinance/merchant/new' />
            </Switch>
        </div>
    )
}

export default UserIndex