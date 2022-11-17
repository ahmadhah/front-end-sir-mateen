import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import PersonalFocusWorksheetHeader from './PersonalFocusWorksheetHeader'
import New from './new/New'
import Search from './search/Search'

function PersonalFocusWorksheetIndex() {
    return (
        <div>
            <PersonalFocusWorksheetHeader />
            <Switch>
                <Route path='/individualplans/personal-focus-worksheet/new'>
                    <New />
                </Route>
                <Route path='/individualplans/personal-focus-worksheet/search'>
                    <Search />
                </Route>
                <Redirect from='/individualplans/personal-focus-worksheet' exact={true} to='/individualplans/personal-focus-worksheet/new' />
                <Redirect to='/individualplans/personal-focus-worksheet/new' />
            </Switch>
        </div>
    )
}

export default PersonalFocusWorksheetIndex