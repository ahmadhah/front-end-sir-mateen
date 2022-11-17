import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MedicationReviewHeader from './MedicationReviewHeader'
import New from './new/New'
import Search from './search/Search'
import CreateReviewList from './create-review-list/CreateReviewList'

function MedicationReviewIndex() {
    return (
        <div>
            <MedicationReviewHeader />
            <Switch>
                <Route path="/healthtracking/medication-review/new">
                    <New />
                </Route>
                <Route path="/healthtracking/medication-review/search">
                <Search />
                </Route>
                <Route path="/healthtracking/medication-review/create-review-list">
                    <CreateReviewList />
                </Route>
                <Redirect from='/healthtracking/medication-review' exact={true} to='/healthtracking/medication-review/new' />
                <Redirect to='/healthtracking/medication-review/new' />
            </Switch>
        </div>
    )
}

export default MedicationReviewIndex