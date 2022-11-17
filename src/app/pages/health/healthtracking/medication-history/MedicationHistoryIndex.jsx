import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MedicationHistoryHeader from './MedicationHistoryHeader'
import New from './new/New'
import Search from './search/Search'
import Report from './report/Report'
import Archive from './archive/Archive'
import CustomReport from './custom-report/CustomReport'
import MedicationOrderSearch from './medication-order-search/MedicationOrderSearch'
import ImportFromExcel from './import-from-excel/ImportFromExcel'

function MedicationHistoryIndex() {
    return (
        <div>
            <MedicationHistoryHeader />
            <Switch>
                <Route path="/healthtracking/medication-history/new">
                    <New />
                </Route>
                <Route path="/healthtracking/medication-history/report">
                    <Report />
                </Route>
                <Route path="/healthtracking/medication-history/search">
                    <Search />
                </Route>
                <Route path="/healthtracking/medication-history/archive">
                    <Archive />
                </Route>
                <Route path="/healthtracking/medication-history/custom-report">
                    <CustomReport />
                </Route>
                <Route path="/healthtracking/medication-history/import-from-excel">
                    <ImportFromExcel />
                </Route>
                <Route path="/healthtracking/medication-history/medication-order-search">
                    <MedicationOrderSearch />
                </Route>
                <Redirect from='/healthtracking/medication-history' exact={true} to='/healthtracking/medication-history/new' />
                <Redirect to='/healthtracking/medication-history/new' />
            </Switch>
        </div>
    )
}

export default MedicationHistoryIndex