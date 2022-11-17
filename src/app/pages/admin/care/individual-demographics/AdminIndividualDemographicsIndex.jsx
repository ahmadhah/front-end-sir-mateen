import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import AdminIndividualDemographicsHeader from './AdminIndividualDemographicsHeader'
import List from './list/List'
import Search from './search/Search'
import CustomFields from './custom-fields/CustomFields'

function AdminIndividualDemographicsIndex() {
    return (
        <div>
            <AdminIndividualDemographicsHeader />
            <Switch>
                <Route path="/care/admin-individual-demographics/list">
                    <List />
                </Route>
                <Route path="/care/admin-individual-demographics/search">
                    <Search />
                </Route>
                <Route path="/care/admin-individual-demographics/custom-fields">
                    <CustomFields />
                </Route>
                <Redirect from='/care/admin-individual-demographics' exact={true} to='/care/admin-individual-demographics/list' />
                <Redirect to='/care/admin-individual-demographics/list' />
            </Switch>
        </div>
    )
}

export default AdminIndividualDemographicsIndex