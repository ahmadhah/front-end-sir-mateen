import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ProfessionalTemplateGroupHeader from './ProfessionalTemplateGroupHeader'
import New from './new/New'
import List from './list/List'
import Archive from './archive/Archive'


function ProfessionalTemplateGroupIndex() {
    return (
        <div>
            <ProfessionalTemplateGroupHeader />
            <Switch>
                <Route path="/billing/professional-template-group/new">
                    <New />
                </Route>
                <Route path="/billing/professional-template-group/list">
                    <List />
                </Route>
                <Route path="/billing/professional-template-group/archive">
                    <Archive />
                </Route>
                <Redirect from='/billing/professional-template-group' exact={true} to='/billing/professional-template-group/new' />
                <Redirect to='/billing/professional-template-group/new' />
            </Switch>
        </div>
    )
}

export default ProfessionalTemplateGroupIndex