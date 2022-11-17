import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ProfessionalClaimServiceAuthorizationHeader from './ProfessionalClaimServiceAuthorizationHeader'
import Upload from './upload/Upload'
import UploadSearch from './upload-search/UploadSearch'

function ProfessionalClaimServiceAuthorizationIndex() {
    return (
        <div>
            <ProfessionalClaimServiceAuthorizationHeader />
            <Switch>
                <Route path="/billing/professional-claim-service-authorization/upload">
                    <Upload />
                </Route>
                <Route path="/billing/professional-claim-service-authorization/upload-search">
                    <UploadSearch />
                </Route>
                <Redirect from='/care/behavior-antecedent-intervention' exact={true} to='/billing/professional-claim-service-authorization/upload' />
                <Redirect to='/billing/professional-claim-service-authorization/upload' />
            </Switch>
        </div>
    )
}

export default ProfessionalClaimServiceAuthorizationIndex