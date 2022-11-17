import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ISPProgramScoringMethodHeader from './ISPProgramScoringMethodHeader'
import List from './list/List'
import New from './new/New'

function ISPProgramScoringMethodIndex() {
    return (
        <div>
            <ISPProgramScoringMethodHeader />
            <Switch>
                <Route path="/care/isp-program-scoring-method/new">
                    <New />
                </Route>
                <Route path="/care/isp-program-scoring-method/list">
                    <List />
                </Route>
                <Redirect from='/care/isp-program-scoring-method' exact={true} to='/care/isp-program-scoring-method/new' />
                <Redirect to='/care/isp-program-scoring-method/new' />
            </Switch>
        </div>
    )
}

export default ISPProgramScoringMethodIndex