import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import RespiratoryTreatmentHeader from './RespiratoryTreatmentHeader'
import New from './new/New'
import Search from './search/Search'

function RespiratoryTreatmentIndex() {
    return (
        <div>
            <RespiratoryTreatmentHeader />
            <Switch>
                <Route path="/healthtracking/respiratory-treatment/new">
                    <New />
                </Route>
                <Route path="/healthtracking/respiratory-treatment/search">
                    <Search />
                </Route>
                <Redirect from='/healthtracking/respiratory-treatment' exact={true} to='/healthtracking/respiratory-treatment/new' />
                <Redirect to='/healthtracking/respiratory-treatment/new' />
            </Switch>
        </div>
    )
}

export default RespiratoryTreatmentIndex