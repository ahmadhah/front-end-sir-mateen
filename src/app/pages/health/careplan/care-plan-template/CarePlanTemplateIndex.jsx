import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import CarePlanTemplateHeader from './CarePlanTemplateHeader'
import New from './new/New'
import Search from './search/Search'
import Worklist from './worklist/Worklist'

function CarePlanTemplateIndex() {
    return (
        <div>
            <CarePlanTemplateHeader />
            <Switch>
                <Route path="/careplan/care-plan-template/new">
                    <New />
                </Route>
                <Route path="/careplan/care-plan-template/search">
                    <Search />
                </Route>
                <Route path="/careplan/care-plan-template/worklist">
                    <Worklist />
                </Route>
                <Redirect from='/careplan/care-plan-template' exact={true} to='/careplan/care-plan-template/new' />
                <Redirect to='/careplan/care-plan-template/new' />
            </Switch>
        </div>
    )
}

export default CarePlanTemplateIndex