import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import BehaviorIntensityConfigurationHeader from './BehaviorIntensityConfigurationHeader'
import View from './view/View'

function BehaviorIntensityConfigurationIndex() {
    return (
        <div>
            <BehaviorIntensityConfigurationHeader />
            <Switch>
                <Route path="/care/behavior-intensity-configuration/view">
                    <View />
                </Route>
                <Redirect from='/care/behavior-intensity-configuration' exact={true} to='/care/behavior-intensity-configuration/view' />
                <Redirect to='/care/behavior-intensity-configuration/view' />
            </Switch>
        </div>
    )
}

export default BehaviorIntensityConfigurationIndex