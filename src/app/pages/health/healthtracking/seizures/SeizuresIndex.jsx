import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import SeizuresHeader from './SeizuresHeader'
import New from './new/New'
import Search from './search/Search'

function SeizuresIndex() {
    return (
        <div>
            <SeizuresHeader />
            <Switch>
                <Route path="/healthtracking/seizures/new">
                    <New />
                </Route>
                <Route path="/healthtracking/seizures/search">
                    <Search />
                </Route>
                <Redirect from='/healthtracking/seizures' exact={true} to='/healthtracking/seizures/new' />
                <Redirect to='/healthtracking/seizures/new' />
            </Switch>
        </div>
    )
}

export default SeizuresIndex