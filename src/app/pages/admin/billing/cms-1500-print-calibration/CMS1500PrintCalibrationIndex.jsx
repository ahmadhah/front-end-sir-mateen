import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import CMS1500PrintCalibrationHeader from './CMS1500PrintCalibrationHeader'
import New from './new/New'
import List from './list/List'


function CMS1500PrintCalibrationIndex() {
    return (
        <div>
            <CMS1500PrintCalibrationHeader />
            <Switch>
                <Route path="/billing/cms-1500-print-calibration/new">
                    <New />
                </Route>
                <Route path="/billing/cms-1500-print-calibration/list">
                    <List />
                </Route>
                <Redirect from='/billing/cms-1500-print-calibration' exact={true} to='/billing/cms-1500-print-calibration/new' />
                <Redirect to='/billing/cms-1500-print-calibration/new' />
            </Switch>
        </div>
    )
}

export default CMS1500PrintCalibrationIndex