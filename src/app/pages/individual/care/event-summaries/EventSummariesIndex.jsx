import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import EventSummariesHeader from './EventSummariesHeader'
import View from './view/View'

function EventSummariesIndex() {
    return (
        <div>
            <EventSummariesHeader/>
            <Switch>
                <Route path='/care/event-summaries/view'>
                    <View/>
                </Route>
                <Redirect from='/care/event-summaries' exact={true} to='/care/event-summaries/view' />
                <Redirect to='/care/event-summaries/view' />
            </Switch>
        </div>
    )
}

export default EventSummariesIndex