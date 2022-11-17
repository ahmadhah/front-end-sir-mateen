import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import GlobalTemplateLibraryHeader from './GlobalTemplateLibraryHeader'
import SearchISPTemplate from './search-isp-template/SearchISPTemplate'

function GlobalTemplateLibraryIndex() {
    return (
        <div>
            <GlobalTemplateLibraryHeader />
            <Switch>
                <Route path="/care/global-template-library/search-isp-template">
                    <SearchISPTemplate />
                </Route>
                <Redirect from='/care/global-template-library' exact={true} to="/care/global-template-library/search-isp-template"/>
                <Redirect to="/care/global-template-library/search-isp-template"/>
            </Switch>
        </div>
    )
}

export default GlobalTemplateLibraryIndex