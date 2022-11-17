import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import EnrollmentHeader from './EnrollmentHeader'
// import ByIndividual from './by-individual/ByIndividual'
// import ByProgram from './by-program/ByProgram'
import ContactList from '../contact/list/ContactList'
import ListPrograms from './byProgram/ListPrograms'
import ImportFromExcel from './import-from-excel/ImportFromExcel'
import SearchImportedExcel from './search-imported-excel/SearchImportedExcel'
import NewProgram from './newProgram/newProgram'
import ProgramIndividuals from './programListing/programIndividuals'
import IndividualListing from './byIndividual/IndividualListing'
import IndividualProgramList from './individualListing/IndividualProgramList'

function EnrollmentIndex() {
    return (
        <div>
            <EnrollmentHeader />
            <Switch>
                <Route path="/care/enrollment/by-individual">
                    {/* <ByIndividual /> */}
                    {/* <ContactList /> */}
                    <IndividualListing />
                </Route>
                <Route path="/care/enrollment/newProgram">
                    <NewProgram />
                </Route>
                <Route path="/care/enrollment/by-program">
                    {/* <ByProgram /> */}
                    <ListPrograms />
                </Route>
                <Route path="/care/enrollment/import-from-excel">
                    <ImportFromExcel />
                </Route>
                <Route path="/care/enrollment/search-imported-excel">
                    <SearchImportedExcel />
                </Route>
                <Route path="/care/enrollment/programindividual/" component={ProgramIndividuals}/>
                {/* <Redirect from='/care/enrollment' exact={true} to='/care/enrollment/by-individual' /> */}
                {/* <Redirect to='/care/enrollment/by-individual' /> */}
                <Route path="/care/enrollment/individualsprogram/" component={IndividualProgramList}/>
            </Switch>
        </div>
    )
}

export default EnrollmentIndex