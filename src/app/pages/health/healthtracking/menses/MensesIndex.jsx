/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable */
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MensesHeader from './MensesHeader'
import New from './new/New'
import Search from './search/Search'

function MensesIndex() {
    return (
        <div>
            <MensesHeader />
            <Switch>
                <Route path="/healthtracking/menses/new">
                    <New />
                </Route>
                <Route path="/healthtracking/menses/search">
                    <Search />
                </Route>
                <Redirect from='/healthtracking/menses' exact={true} to='/healthtracking/menses/new' />
                <Redirect to='/healthtracking/menses/new' />
            </Switch>
        </div>
    )
}

export default MensesIndex