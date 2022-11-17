import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ActivityTrackingHeader from './ActivityTrackingHeader'
import View from './view/View'

function ActivityTrackingIndex() {
    return (
        <div>
            <ActivityTrackingHeader />
            <Switch>
                <Route path="/general/activity-tracking/view">
                    <View />
                </Route>
                <Redirect from='/general/activity-tracking' exact={true} to='/general/activity-tracking/view' />
                <Redirect to='/general/activity-tracking/view' />
            </Switch>
        </div>
    )
}

export default ActivityTrackingIndex