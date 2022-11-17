import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import InstitutionHeader from './InstitutionHeader'
import New from './new/New'
import List from './list/List'
import ImportFromExcel from './import-from-excel/ImportFromExcel'

function InstitutionIndex() {
    return (
        <div>
            <InstitutionHeader />
            <Switch>
                <Route path="/personalfinance/institution/new">
                    <New />
                </Route>
                <Route path="/personalfinance/institution/list">
                    <List />
                </Route>
                 <Route path="/personalfinance/institution/import-from-excel">
                    <ImportFromExcel />
                </Route>
                <Redirect from='/personalfinance/institution' exact={true} to='/personalfinance/institution/new' />
                <Redirect to='/personalfinance/institution/new' />
            </Switch>
        </div>
    )
}

export default InstitutionIndex