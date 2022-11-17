import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import TLogHeader from './TLogHeader'
import New from './new/New'
import Search from './search/Search'
import Archive from './archive/Archive'

function TLogIndex() {
    return (
        <div>
            <TLogHeader />
            <Switch>
                <Route path='/care/t-log/new'>
                    <New />
                </Route>
                <Route path='/care/t-log/search'>
                    <Search />
                </Route>
                <Route path='/care/t-log/archive'>
                    <Archive />
                </Route>
                <Redirect from='/care/t-log' exact={true} to='/care/t-log/new' />
                <Redirect to='/care/t-log/new' />
            </Switch>
        </div>
    )
}

export default TLogIndex