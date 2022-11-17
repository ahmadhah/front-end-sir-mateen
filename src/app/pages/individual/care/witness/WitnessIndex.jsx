import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Search from './search/Search'
import WitnessHeader from './WitnessHeader'

function WitnessIndex() {
    return (
        <div>
            <WitnessHeader/>
            <Switch>
                <Route path='/care/witness/search'>
                    <Search/>
                </Route>
                <Redirect from='/care/witness' exact={true} to='/care/witness/search' />
                <Redirect to='/care/witness/search' />
            </Switch>
        </div>
    )
}

export default WitnessIndex