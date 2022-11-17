/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable */
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import SkinWoundHeader from './SkinWoundHeader'
import New from './new/New'
import Search from './search/Search'

function SkinWoundIndex() {
    return (
        <div>
            <SkinWoundHeader />
            <Switch>
                <Route path="/healthtracking/skin-wound/new">
                    <New />
                </Route>
                <Route path="/healthtracking/skin-wound/search">
                    <Search />
                </Route>
                <Redirect from='/healthtracking/skin-wound' exact={true} to='/healthtracking/skin-wound/new' />
                <Redirect to='/healthtracking/skin-wound/new' />
            </Switch>
        </div>
    )
}

export default SkinWoundIndex