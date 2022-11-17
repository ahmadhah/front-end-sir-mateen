import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import DocumentStorageHeader from './DocumentStorageHeader'
import New from './new/New'
import Search from './search/Search'

function DocumentStorageIndex() {
  return (
    <div>
      <DocumentStorageHeader />
      <Switch>
        <Route path='/agency-wide-document-storage/document-storage/new'>
          <New />
        </Route>
        <Route path='/agency-wide-document-storage/document-storage/search'>
          <Search />
        </Route>
        <Redirect from='/agency-wide-document-storage/document-storage' exact={true} to='/agency-wide-document-storage/document-storage/new' />
        <Redirect to='/agency-wide-document-storage/document-storage/new' />
      </Switch>
    </div>
  )
}

export default DocumentStorageIndex