import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import UserHeader from './UserHeader'
import New from './new/New'
import List from './list/List'
import ImportFromExcel from './import-from-excel/ImportFromExcel'
import SearchImportedExcel from './search-imported-excel/SearchImportedExcel'
import AssignExternalSystemID from './assign-external-system-id/AssignExternalSystemID'
import SelfPasswordReset from './self-password-reset/SelfPasswordReset'

function UserIndex() {
    return (
        <div>
            <UserHeader />
            <Switch>
                <Route path="/general/user/new">
                    <New />
                </Route>
                <Route path="/general/user/list">
                    <List />
                </Route>
                 <Route path="/general/user/import-from-excel">
                    <ImportFromExcel />
                </Route>
                <Route path="/general/user/search-imported-excel">
                    <SearchImportedExcel />
                </Route>
                <Route path="/general/user/assign-external-system-id">
                    <AssignExternalSystemID />
                </Route>
                <Route path="/general/user/self-password-reset">
                    <SelfPasswordReset />
                </Route>
                <Redirect from='/general/user' exact={true} to='/general/user/new' />
                <Redirect to='/general/user/new' />
            </Switch>
        </div>
    )
}

export default UserIndex