/* eslint-disable */
import React, { Suspense, lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { FallbackView } from '../../_metronic/partials'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { MenuTestPage } from '../pages/MenuTestPage'
import Roles from '../pages/roles/Roles'
import ViewRole from '../pages/roles/ViewRole'
import EditRole from '../pages/roles/EditRole'
/*Individual Module Routes*/
import Care from '../pages/individual/care/Care'
import TLog from '../pages/individual/care/t-log/TlogIndex'
import GERIndex from '../pages/individual/care/general-event-reports/GERIndex'
import GERResolutionIndex from '../pages/individual/care/ger-resolution/GERResolutionIndex'
import WitnessIndex from '../pages/individual/care/witness/WitnessIndex'
import EventSummariesIndex from '../pages/individual/care/event-summaries/EventSummariesIndex'
import IndividualDemographicsIndex from '../pages/individual/care/individual-demographics/IndividualDemographicsIndex'
import GlobalTemplateLibraryIndex from '../pages/individual/care/global-template-library/GlobalTemplateLibraryIndex'
import IndividualMedicalInformationIndex from '../pages/individual/care/individual-medical-information/IndividualMedicalInformationIndex'
import ISPDataIndex from '../pages/individual/care/isp-data/ISPDataIndex'
import ISPProgramIndex from '../pages/individual/care/isp-program/ISPProgramIndex'
import ISPProgramTemplateLiabraryIndex from '../pages/individual/care/isp-program-template-liabrary/ISPProgramTemplateLiabraryIndex'
import ConsentAndAuthorizationIndex from '../pages/individual/care/consent-and-authorization/ConsentAndAuthorizationIndex'
import IPOPGeneralInformationIndex from '../pages/individual/care/ipop-general-information/IPOPGeneralInformationIndex'
import IPOPResidentialInformationIndex from '../pages/individual/care/ipop-residential-information/IPOPResidentialInformationIndex'
import IPOPDayProgramIndex from '../pages/individual/care/ipop-day-program/IPOPDayProgramIndex'
import IPOPSupportedEmploymentIndex from '../pages/individual/care/ipop-supported-employment/IPOPSupportedEmploymentIndex'
import IPOPWorkCenterIndex from '../pages/individual/care/ipop-work-center/IPOPWorkCenterIndex'
import IPOPIndividualizedServicesIndex from '../pages/individual/care/ipop-individualized-services/IPOPIndividualizedServicesIndex'
import IndividualPlans from '../pages/individual/individualplans/IndividualPlans'
import IndividuaPlansIndex from '../pages/individual/individualplans/individual-plan/IndividuaPlansIndex'
import IndividualPlanAgendaIndex from '../pages/individual/individualplans/individual-plan-agenda/IndividualPlanAgendaIndex'
import PersonalFocusWorksheetIndex from '../pages/individual/individualplans/personal-focus-worksheet/PersonalFocusWorksheetIndex'
/*Billing Module Routes*/
import Attendance from '../pages/billing/attendance/AttendanceCard'
import AttendanceIndex from '../pages/billing/attendance/attendance/AttendanceIndex'
import ProfessionalClaim from '../pages/billing/professionalclaim/ProfessionalClaim'
import AgencyBasedReportsIndex from '../pages/billing/professionalclaim/agency-based-reports/AgencyBasedReportsIndex'
import BillingConversionIndex from '../pages/billing/professionalclaim/billing-conversion/BillingConversionIndex'
import ClaimTemplateIndex from '../pages/billing/professionalclaim/claim-template/ClaimTemplateIndex'
import ExcelUploadIndex from '../pages/billing/professionalclaim/excel-upload/ExcelUploadIndex'
import ProfessionalClaimIndex from '../pages/billing/professionalclaim/professional-claim/ProfessionalClaimIndex'
import ServiceAuthorizationIndex from '../pages/billing/professionalclaim/service-authorization/ServiceAuthorizationIndex'
/*Admin Module Routes*/
import BillingAdmin from '../pages/admin/billing/AdminBilling'
import AttendanceTypeIndex from '../pages/admin/billing/attendance-type/AttendanceTypeIndex'
import BillingProviderIndex from '../pages/admin/billing/billing-provider/BillingProviderIndex'
import CarrierIndex from '../pages/admin/billing/carrier/CarrierIndex'
import CMS1500PrintCalibrationIndex from '../pages/admin/billing/cms-1500-print-calibration/CMS1500PrintCalibrationIndex'
import CostCenterTypeIndex from '../pages/admin/billing/cost-center-type/CostCenterTypeIndex'
import CustomAttendancePDFConfigurationIndex from '../pages/admin/billing/custom-attendance-pdf-configuration/CustomAttendancePDFConfigurationIndex'
import CustomPDFInvoiceIndex from '../pages/admin/billing/custom-pdf-invoice/CustomPDFInvoiceIndex'
import DescriptionCodeIndex from '../pages/admin/billing/description-code/DescriptionCodeIndex'
import FundingSourceIndex from '../pages/admin/billing/funding-source/FundingSourceIndex'
import LeaveRuleIndex from '../pages/admin/billing/leave-rule/LeaveRuleIndex'
import PayersSettingIndex from '../pages/admin/billing/payers-setting/PayersSettingIndex'
import PolicyHolderIndex from '../pages/admin/billing/policy-holder/PolicyHolderIndex'
import ProfessionalClaimServiceAuthorizationIndex from '../pages/admin/billing/professional-claim-service-authorization/ProfessionalClaimServiceAuthorizationIndex'
import ProfessionalTemplateGroupIndex from '../pages/admin/billing/professional-template-group/ProfessionalTemplateGroupIndex'
import TaxonomyCodeIndex from '../pages/admin/billing/taxonomy-code/TaxonomyCodeIndex'
import UnitCalculationRuleIndex from '../pages/admin/billing/unit-calculation-rule/UnitCalculationRuleIndex'

import CareAdmin from '../pages/admin/care/AdminCare'
// import BehaviorAntecedentInterventionIndex from '../pages/admin/care/behavior-antecedent-intervention/BehaviorAntecedentInterventionIndex'
// import BehaviorAntecedentInterventionCategoriesIndex from '../pages/admin/care/behavior-antecedent-intervention-categories/BehaviorAntecedentInterventionCategoriesIndex'
// import BehaviorIntensityConfigurationIndex from '../pages/admin/care/behavior-intensity-configuration/BehaviorIntensityConfigurationIndex'
import BehaviorIndex from '../pages/admin/care/behavior/BehaviorIndex'
import ContactIndex from '../pages/admin/care/contact/ContactIndex'
import EnrollmentIndex from '../pages/admin/care/enrollment/EnrollmentIndex'
import AdminIndividualDemographicsIndex from '../pages/admin/care/individual-demographics/AdminIndividualDemographicsIndex'
import IndividualIntakeIndex from '../pages/admin/care/individual-intake/IndividualIntakeIndex'
import InsuranceIndex from '../pages/admin/care/insurance/InsuranceIndex'
import ISPProgramScoringMethodIndex from '../pages/admin/care/isp-program-scoring-method/ISPProgramScoringMethodIndex'
import DataDrivenOutcome from '../pages/admin/datadrivenoutcome/DataDrivenOutcome'
import OutcomeMeasureTypesIndex from '../pages/admin/datadrivenoutcome/outcome-measure-types/OutcomeMeasureTypesIndex'
import ISPProgramTemplateMappingIndex from '../pages/admin/datadrivenoutcome/isp-program-template-mapping/ISPProgramTemplateMappingIndex'

import GeneralAdmin from '../pages/admin/general/General'
import ActivityTrackingIndex from '../pages/admin/general/activity-tracking/ActivityTrackingIndex'
import CaseLoadIndex from '../pages/admin/general/caseload/CaseLoadIndex'
import ChangePasswordIndex from '../pages/admin/general/change-password/ChangePasswordIndex'
import PrivilegesIndex from '../pages/admin/general/privileges/PrivilegesIndex'
import SharedContactIndex from '../pages/admin/general/shared-contact/SharedContactIndex'
import UserIndex from '../pages/admin/general/user/UserIndex'

import PersonalFinance from '../pages/admin/personalfinance/PersonalFinance'
import InstitutionIndex from '../pages/admin/personalfinance/institution/InstitutionIndex'
import MerchantIndex from '../pages/admin/personalfinance/merchant/MerchantIndex'
import TypesAndCategoriesIndex from '../pages/admin/personalfinance/types-and-categories/TypesAndCategoriesIndex'
/*Health  Routes*/
import CarePlan from '../pages/health/careplan/CarePlan'
import CarePlanTemplateIndex from '../pages/health/careplan/care-plan-template/CarePlanTemplateIndex'
import HealthTracking from '../pages/health/healthtracking/HealthTracking'
import AppointmentsIndex from '../pages/health/healthtracking/appointments/AppointmentsIndex'
import BloodGlucoseIndex from '../pages/health/healthtracking/blood-glucose/BloodGlucoseIndex'
import HealthCareReportsIndex from '../pages/health/healthtracking/health-care-reports/HealthCareReportsIndex'
import HealthTrackingReportsIndex from '../pages/health/healthtracking/health-tracking-reports/HealthTrackingReportsIndex'
import HealthTrackingUpdateHistoryIndex from '../pages/health/healthtracking/health-tracking-update-history/HealthTrackingUpdateHistoryIndex'
import HeightWeightIndex from '../pages/health/healthtracking/height-weight/HeightWeightIndex'
import ImmunizationIndex from '../pages/health/healthtracking/immunization/ImmunizationIndex'
import InfectionTrackingIndex from '../pages/health/healthtracking/infection-tracking/InfectionTrackingIndex'
import IntakeEiminationIndex from '../pages/health/healthtracking/intake-elimination/IntakeEiminationIndex'
import LabTestIndex from '../pages/health/healthtracking/lab-test/LabTestIndex'
import LabTestGroupIndex from '../pages/health/healthtracking/lab-test-group/LabTestGroupIndex'
import LabTestResultIndex from '../pages/health/healthtracking/lab-test-result/LabTestResultIndex'
import MedicationHistoryIndex from '../pages/health/healthtracking/medication-history/MedicationHistoryIndex'
import MedicationReviewIndex from '../pages/health/healthtracking/medication-review/MedicationReviewIndex'
import MensesIndex from '../pages/health/healthtracking/menses/MensesIndex'
import RespiratoryTreatmentIndex from '../pages/health/healthtracking/respiratory-treatment/RespiratoryTreatmentIndex'
import SeizuresIndex from '../pages/health/healthtracking/seizures/SeizuresIndex'
import SkinWoundIndex from '../pages/health/healthtracking/skin-wound/SkinWoundIndex'
import VitalSignsIndex from '../pages/health/healthtracking/vital-signs/VitalSignsIndex'
import MedicationAdministrationRecord from '../pages/health/medicationadministrationrecord/MedicationAdministrationRecord'
import HealthDataIndex from '../pages/health/medicationadministrationrecord/data/HealthDataIndex'
/*Settings  Routes*/
import { Settings } from '../pages/settings/Settings'
import { PersonalDetails } from '../pages/settings/personal-details/edit/Edit'
import { SuperAdminList } from '../pages/settings/super-admin-list/view/View'
import { Password } from '../pages/settings/password/change/Change'
import { SCommSettings } from '../pages/settings/scomm-settings/configure/Configure'
import { TestMode } from '../pages/settings/test-mode/on/On'


import AgencyWideDocumentStorage from '../pages/agency/agency-wide-document-storage/AgencyWideDocumentStorage'
import QuestionnaireForms from '../pages/agency/questionnaire-forms/QuestionnaireForms'
import DocumentStorageIndex from '../pages/agency/agency-wide-document-storage/document-storage/DocumentStorageIndex'
import StaffVisitorLogIndex from '../pages/agency/questionnaire-forms/staff-visitor-log/StaffVisitorLogIndex'


// import AddUser from '../modules/roles/AddUser'
import AddUser from '../pages/users/AddUser'
import Users from '../pages/users/Users'
import Clients from '../pages/clients/clients'
import ClientDetails from '../pages/clients/ClientDetails'
import CaregiversPage from '../pages/caregiver/caregiver'


export function PrivateRoutes() {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))


  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>

        <Route path="/roles" component={Roles} />
        <Route path="/viewrole" component={ViewRole} />
        <Route path="/editrole" component={EditRole} />
        <Route path="/users" component={Users} />
        {/* <Route path="/add-user" component={AddUser} /> */}
        <Route path="/add-user" component={AddUser} />
        <Route path="/admin/billing" component={BillingAdmin} />
        <Route path="/billing/attendance-type" component={AttendanceTypeIndex} />
        <Route path="/billing/billing-provider" component={BillingProviderIndex} />
        <Route path="/billing/carrier" component={CarrierIndex} />
        <Route path="/billing/cms-1500-print-calibration" component={CMS1500PrintCalibrationIndex} />
        <Route path="/billing/cost-center-type" component={CostCenterTypeIndex} />
        <Route path="/billing/custom-attendance-pdf-configuration" component={CustomAttendancePDFConfigurationIndex} />
        <Route path="/billing/custom-pdf-invoice" component={CustomPDFInvoiceIndex} />
        <Route path="/billing/description-code" component={DescriptionCodeIndex} />
        <Route path="/billing/funding-source" component={FundingSourceIndex} />
        <Route path="/billing/leave-rule" component={LeaveRuleIndex} />
        <Route path="/billing/payers-setting" component={PayersSettingIndex} />
        <Route path="/billing/policy-holder" component={PolicyHolderIndex} />
        <Route path="/billing/professional-claim-service-authorization" component={ProfessionalClaimServiceAuthorizationIndex} />
        <Route path="/billing/professional-template-group" component={ProfessionalTemplateGroupIndex} />
        <Route path="/billing/taxonomy-code" component={TaxonomyCodeIndex} />
        <Route path="/billing/unit-calculation-rule" component={UnitCalculationRuleIndex} />

        <Route path="/admin/care" component={CareAdmin} />
        {/* <Route path="/care/behavior-antecedent-intervention" component={BehaviorAntecedentInterventionIndex} />
        <Route path="/care/behavior-antecedent-intervention-categories" component={BehaviorAntecedentInterventionCategoriesIndex} />
        <Route path="/care/behavior-intensity-configuration" component={BehaviorIntensityConfigurationIndex} /> */}
        <Route path="/care/behavior" component={BehaviorIndex} />
        <Route path="/care/contact" component={ContactIndex} />
        <Route path="/care/enrollment" component={EnrollmentIndex} />
        <Route path="/care/admin-individual-demographics" component={AdminIndividualDemographicsIndex} />
        <Route path="/care/individual-intake" component={IndividualIntakeIndex} />
        <Route path="/care/insurance" component={InsuranceIndex} />
        <Route path="/care/isp-program-scoring-method" component={ISPProgramScoringMethodIndex} />
        <Redirect from="/care" exact={true} to='/care/individual-intake/list' />

        <Route path="/admin/datadrivenoutcome" component={DataDrivenOutcome} />
        <Route path="/datadrivenoutcome/outcome-measure-types" component={OutcomeMeasureTypesIndex} />
        <Route path="/datadrivenoutcome/isp-program-template-mapping" component={ISPProgramTemplateMappingIndex} />

        <Route path="/admin/general" component={GeneralAdmin} />
        <Route path="/general/activity-tracking" component={ActivityTrackingIndex} />
        <Route path="/general/caseload" component={CaseLoadIndex} />
        <Route path="/general/change-password" component={ChangePasswordIndex} />
        <Route path="/general/privileges" component={PrivilegesIndex} />
        <Route path="/general/shared-contact" component={SharedContactIndex} />
        <Route path="/general/user" component={UserIndex} />

        <Route path="/admin/personalfinance" component={PersonalFinance} />
        <Route path="/personalfinance/institution" component={InstitutionIndex} />
        <Route path="/personalfinance/merchant" component={MerchantIndex} />
        <Route path="/personalfinance/types-and-categories" component={TypesAndCategoriesIndex} />


        <Route path="/individual/care" component={Care} />
        <Route path="/care/t-log" component={TLog} />
        <Route path="/care/general-event-report" component={GERIndex} />
        <Route path="/care/ger-resolution" component={GERResolutionIndex} />
        <Route path="/care/witness" component={WitnessIndex} />
        <Route path="/care/event-summaries" component={EventSummariesIndex} />
        <Route path="/care/isp-data" component={ISPDataIndex} />
        <Route path="/care/isp-program" component={ISPProgramIndex} />
        <Route path="/care/isp-program-template-liabrary" component={ISPProgramTemplateLiabraryIndex} />
        <Route path="/care/global-template-library" component={GlobalTemplateLibraryIndex} />
        <Route path="/care/individual-demographics" component={IndividualDemographicsIndex} />
        <Route path="/care/individual-medical-information" component={IndividualMedicalInformationIndex} />
        <Route path="/care/consent-and-authorization" component={ConsentAndAuthorizationIndex} />
        <Route path="/care/ipop-general-information" component={IPOPGeneralInformationIndex} />
        <Route path="/care/ipop-residential-information" component={IPOPResidentialInformationIndex} />
        <Route path="/care/ipop-day-program" component={IPOPDayProgramIndex} />
        <Route path="/care/ipop-supported-employment" component={IPOPSupportedEmploymentIndex} />
        <Route path="/care/ipop-work-center" component={IPOPWorkCenterIndex} />
        <Route path="/care/ipop-individualized-services" component={IPOPIndividualizedServicesIndex} />

        <Route path="/individual/individualplans" component={IndividualPlans} />
        <Route path="/individualplans/individual-plan" component={IndividuaPlansIndex} />
        <Route path="/individualplans/individual-plan-agenda" component={IndividualPlanAgendaIndex} />
        <Route path="/individualplans/personal-focus-worksheet" component={PersonalFocusWorksheetIndex} />


        <Route path="/agency/agency-wide-document-storage" component={AgencyWideDocumentStorage} />
        <Route path="/agency-wide-document-storage/document-storage" component={DocumentStorageIndex} />

        <Route path="/agency/questionnaire-forms" component={QuestionnaireForms} />
        <Route path="/questionnaire-forms/staff-visitor-log" component={StaffVisitorLogIndex} />


        <Route path="/billing/attendance" component={Attendance} />
        <Route path="/billing/attendance-card/attendance" component={AttendanceIndex} />
        <Route path="/billing/professionalclaim" component={ProfessionalClaim} />
        <Route path="/professionalclaim/agency-based-reports" component={AgencyBasedReportsIndex} />
        <Route path="/professionalclaim/billing-conversion" component={BillingConversionIndex} />
        <Route path="/professionalclaim/claim-template" component={ClaimTemplateIndex} />
        <Route path="/professionalclaim/excel-upload" component={ExcelUploadIndex} />
        <Route path="/professionalclaim/professional-claim" component={ProfessionalClaimIndex} />
        <Route path="/professionalclaim/service-authorization" component={ServiceAuthorizationIndex} />

        <Route path="/health/careplan" component={CarePlan} />
        <Route path="/careplan/care-plan-template" component={CarePlanTemplateIndex} />
        <Route path="/health/healthtracking" component={HealthTracking} />
        <Route path="/healthtracking/appointments" component={AppointmentsIndex} />
        <Route path="/healthtracking/blood-glucose" component={BloodGlucoseIndex} />
        <Route path="/healthtracking/health-care-reports" component={HealthCareReportsIndex} />
        <Route path="/healthtracking/health-tracking-reports" component={HealthTrackingReportsIndex} />
        <Route path="/healthtracking/health-tracking-update-history" component={HealthTrackingUpdateHistoryIndex} />
        <Route path="/healthtracking/height-weight" component={HeightWeightIndex} />
        <Route path="/healthtracking/immunization" component={ImmunizationIndex} />
        <Route path="/healthtracking/infection-tracking" component={InfectionTrackingIndex} />
        <Route path="/healthtracking/intake-elimination" component={IntakeEiminationIndex} />
        <Route path="/healthtracking/lab-test" component={LabTestIndex} />
        <Route path="/healthtracking/lab-test-group" component={LabTestGroupIndex} />
        <Route path="/healthtracking/lab-test-result" component={LabTestResultIndex} />
        <Route path="/healthtracking/medication-history" component={MedicationHistoryIndex} />
        <Route path="/healthtracking/medication-review" component={MedicationReviewIndex} />
        <Route path="/healthtracking/menses" component={MensesIndex} />
        <Route path="/healthtracking/respiratory-treatment" component={RespiratoryTreatmentIndex} />
        <Route path="/healthtracking/seizures" component={SeizuresIndex} />
        <Route path="/healthtracking/skin-wound" component={SkinWoundIndex} />
        <Route path="/healthtracking/vital-signs" component={VitalSignsIndex} />
        <Route path="/health/medicationadministrationrecord" component={MedicationAdministrationRecord} />
        <Route path="/medicationadministrationrecord/data" component={HealthDataIndex} />

        <Route path="/settings" component={Settings} />
        <Route path="/personal-details" component={PersonalDetails} />
        <Route path="/super-admin-list" component={SuperAdminList} />
        <Route path="/password" component={Password} />
        <Route path="/scomm-settings" component={SCommSettings} />
        <Route path="/test-mode" component={TestMode} />


        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/builder' component={BuilderPageWrapper} />
        <Route path='/crafted/pages/profile' component={ProfilePage} />
        <Route path='/crafted/pages/wizards' component={WizardsPage} />
        <Route path='/crafted/widgets' component={WidgetsPage} />
        <Route path='/crafted/account' component={AccountPage} />
        <Route path='/apps/chat' component={ChatPage} />
        <Route path='/menu-test' component={MenuTestPage} />
        <Route path="/clients" component={Clients} />
        <Route path="/clientdetails" component={ClientDetails} />
        <Route path="/caregivers" component={CaregiversPage} />
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}

