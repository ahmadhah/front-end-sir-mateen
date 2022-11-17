import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ISPProgramTemplateMappingHeader from './ISPProgramTemplateMappingHeader'
import New from './new/New'
import Search from './search/Search'

function ISPProgramTemplateMappingIndex() {
    return (
        <div>
            <ISPProgramTemplateMappingHeader />
            <Switch>
                <Route path="/datadrivenoutcome/isp-program-template-mapping/new">
                    <New />
                </Route>
                <Route path="/datadrivenoutcome/isp-program-template-mapping/search">
                    <Search />
                </Route>
                <Redirect from='/datadrivenoutcome/isp-program-template-mapping' exact={true} to='/datadrivenoutcome/isp-program-template-mapping/new' />
                <Redirect to='/datadrivenoutcome/isp-program-template-mapping/new' />
            </Switch>
        </div>
    )
}

export default ISPProgramTemplateMappingIndex