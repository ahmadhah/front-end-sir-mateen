import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import PayersSettingHeader from './PayersSettingHeader'
import Configure from './configure/Configure'

function PayersSettingIndex() {
    return (
        <div>
            <PayersSettingHeader />
            <Switch>
                <Route path="/billing/payers-setting/configure">
                    <Configure />
                </Route>
                <Redirect from='/billing/payers-setting' exact={true} to='/billing/payers-setting/configure' />
                <Redirect to='/billing/payers-setting/configure' />
            </Switch>
        </div>
    )
}

export default PayersSettingIndex