import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Draft from './draft/Draft'
import Search from './search/Search'
import New from './new/New'
import Approved from './Approved/Approved'
import ISPProgramTemplateLiabraryHeader from './ISPProgramTemplateLiabraryHeader'

function ISPProgramTemplateLiabraryIndex() {
  return (
    <div>
      <ISPProgramTemplateLiabraryHeader/>
      <Switch>
        <Route path="/care/isp-program-template-liabrary/new">
          <New />
        </Route>
        <Route path="/care/isp-program-template-liabrary/draft">
          <Draft />
        </Route>
        <Route path="/care/isp-program-template-liabrary/approved">
          <Approved />
        </Route>
        <Route path="/care/isp-program-template-liabrary/search">
          <Search />
        </Route>
        <Redirect from='/care/isp-program-template-liabrary' exact={true} to='/care/isp-program-template-liabrary/new' />
        <Redirect to='/care/isp-program-template-liabrary/'/>
      </Switch>
    </div>
  )
}

export default ISPProgramTemplateLiabraryIndex