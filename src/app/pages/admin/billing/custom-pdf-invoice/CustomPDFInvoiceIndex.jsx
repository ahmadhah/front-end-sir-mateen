/* eslint-disable */
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import CustomPDFInvoiceHeader from './CustomPDFInvoiceHeader'
import New from './new/New'
import List from './list/List'
import Archive from './archive/Archive'

function CustomPDFInvoiceIndex() {
    return (
        <div>
            <CustomPDFInvoiceHeader />
            <Switch>
                <Route path="/billing/custom-pdf-invoice/new">
                    <New />
                </Route>
                <Route path="/billing/custom-pdf-invoice/list">
                    <List />
                </Route>
                <Route path="/billing/custom-pdf-invoice/archive">
                    <Archive />
                </Route>
                <Redirect from='/billing/custom-pdf-invoice' exact={true} to='/billing/custom-pdf-invoice/new' />
                <Redirect to='/billing/custom-pdf-invoice/new' />
            </Switch>
        </div>
    )
}

export default CustomPDFInvoiceIndex