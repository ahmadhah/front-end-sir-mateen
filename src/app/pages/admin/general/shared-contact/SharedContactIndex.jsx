import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import SharedContactHeader from './SharedContactHeader'
import New from './new/New'
import List from './list/List'
import Link from './link/Link'
import ImportFromExcel from './import-from-excel/ImportFromExcel'

function SharedContactIndex() {
    return (
        <div>
            <SharedContactHeader />
            <Switch>
                <Route path="/general/shared-contact/new">
                    <New />
                </Route>
                <Route path="/general/shared-contact/list">
                    <List />
                </Route>
                 <Route path="/general/shared-contact/link">
                    <Link />
                </Route>
                 <Route path="/general/shared-contact/import-from-excel">
                    <ImportFromExcel />
                </Route>
                <Redirect from='/general/shared-contact' exact={true} to='/general/shared-contact/new' />
                <Redirect to='/general/shared-contact/new' />
            </Switch>
        </div>
    )
}

export default SharedContactIndex