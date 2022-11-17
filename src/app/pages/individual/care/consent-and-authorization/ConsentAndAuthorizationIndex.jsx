import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ConsentAndAuthorizationHeader from './ConsentAndAuthorizationHeader'
import New from './new/New'
import Search from './search/Search'

function ConsentAndAuthorizationIndex() {
    return (
        <div>
            <ConsentAndAuthorizationHeader />
            <Switch>
                <Route path="/care/consent-and-authorization/new">
                    <New />
                </Route>
                <Route path="/care/consent-and-authorization/search">
                    <Search />
                </Route>
                <Redirect from='/care/consent-and-authorization' exact={true} to='/care/consent-and-authorization/new' />
                <Redirect to='/care/consent-and-authorization/new' />
            </Switch>
        </div>
    )
}

export default ConsentAndAuthorizationIndex