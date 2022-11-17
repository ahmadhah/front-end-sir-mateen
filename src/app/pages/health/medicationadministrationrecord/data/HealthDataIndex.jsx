import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import HealthDataHeader from './HealthDataHeader'
import DueMedications from './due-medications/DueMedications'
import RecordData from './record-data/RecordData'
import Report from './report/Report'
import Search from './search/Search'

function HealthDataIndex() {
    return (
        <div>
            <HealthDataHeader />
            <Switch>
                <Route path="/medicationadministrationrecord/data/due-medications">
                    <DueMedications />
                </Route>
                <Route path="/medicationadministrationrecord/data/record-data">
                    <RecordData />
                </Route>
                <Route path="/medicationadministrationrecord/data/report">
                    <Report />
                </Route>
                <Route path="/medicationadministrationrecord/data/search">
                    <Search />
                </Route>
                <Redirect from='/medicationadministrationrecord/data' exact={true} to='/medicationadministrationrecord/data/due-medications' />
                <Redirect to='/medicationadministrationrecord/data/due-medications' />
            </Switch>
        </div>
    )
}

export default HealthDataIndex