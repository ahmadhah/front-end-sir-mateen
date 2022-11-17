import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import IndividualIntakeHeader from './IndividualIntakeHeader'
import NewIndividual from './new/NewIndividual'
import IndividualList from './listIndividual/IndividualList'
import ImportFromExcel from './import-from-excel/ImportFromExcel'
import PendingAdmissionNotes from './pending-admission-notes/PendingAdmissionNotes'
import SearchImportedExcel from './search-imported-excel/SearchImportedExcel'

function IndividualIntakeIndex() {
    return (
        <div>
            <IndividualIntakeHeader />
            <Switch>
                <Route path="/care/individual-intake/list">
                    <IndividualList />
                </Route>
                <Route path="/care/individual-intake/new">
                    <NewIndividual />
                </Route>
                {/* <Route path="/care/individual-intake/import-from-excel">
                    <ImportFromExcel />
                </Route>
                <Route path="/care/individual-intake/search-imported-excel">
                    <SearchImportedExcel />
                </Route>
                <Route path="/care/individual-intake/pending-admission-notes">
                    <PendingAdmissionNotes />
                </Route> */}
                <Redirect from='/care/individual-intake' exact={true} to='/care/individual-intake/new' />
                <Redirect to='/care/individual-intake/new' />
            </Switch>
        </div>
    )
}

export default IndividualIntakeIndex