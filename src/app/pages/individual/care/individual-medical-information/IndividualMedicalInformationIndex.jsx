import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import AdvanceDirectives from './advance-directives/AdvanceDirectives'
import AllergyPorfile from './allergy-profile/AllergyPorfile'
import DiagnosisList from './diagnosis-list/DiagnosisList'
import IndividualHistory from './individual-history/IndividualHistory'
import IndividualMedicalInformationHeader from './IndividualMedicalInformationHeader'
import MedicationProfile from './medication-profile/MedicationProfile'
import MedicationReconciliation from './medication-reconciliation/MedicationReconciliation'

function IndividualMedicalInformationIndex() {
    return (
        <div>
            <IndividualMedicalInformationHeader />
            <Switch>
                <Route path="/care/individual-medical-information/diagnosis-list">
                    <DiagnosisList />
                </Route>
                <Route path="/care/individual-medical-information/advance-directives">
                    <AdvanceDirectives />
                </Route>
                <Route path="/care/individual-medical-information/allergy-profile">
                    <AllergyPorfile />
                </Route>
                <Route path="/care/individual-medical-information/medication-profile">
                    <MedicationProfile />
                </Route>
                <Route path="/care/individual-medical-information/medication-reconciliation">
                    <MedicationReconciliation />
                </Route>
                <Route path="/care/individual-medical-information/individual-history">
                    <IndividualHistory />
                </Route>
                <Redirect from='/care/individual-medical-information' exact={true} to="/care/individual-medical-information/diagnosis-list"/>
                <Redirect to="/care/individual-medical-information/diagnosis-list"/>
            </Switch>
        </div>
    )
}

export default IndividualMedicalInformationIndex