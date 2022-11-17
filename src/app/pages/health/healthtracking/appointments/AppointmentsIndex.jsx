import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import AppointmentsHeader from './AppointmentsHeader'
import New from './new/New'
import Search from './search/Search'
import Calender from './calender/Calender'

function AppointmentsIndex() {
    return (
        <div>
            <AppointmentsHeader />
            <Switch>
                <Route path="/healthtracking/appointments/new">
                    <New />
                </Route>
                <Route path="/healthtracking/appointments/search">
                    <Search />
                </Route>
                <Route path="/healthtracking/appointments/calender">
                    <Calender />
                </Route>
                <Redirect from='/healthtracking/appointments' exact={true} to='/healthtracking/appointments/new' />
                <Redirect to='/healthtracking/appointments/new' />
            </Switch>
        </div>
    )
}

export default AppointmentsIndex