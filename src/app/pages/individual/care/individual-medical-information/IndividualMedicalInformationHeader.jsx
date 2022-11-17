import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import CareHeader from '../CareHeader'

function IndividualMedicalInformationHeader() {
    const location = useLocation()
    return (
        <div>
            <CareHeader />
            <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-9 pb-0'>
                    <p className='text-gray-800 fs-2 fw-bolder'> Individual Medical Information</p>
                    <div className='d-flex overflow-auto h-55px'>
                        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/care/individual-medical-information/diagnosis-list' && 'active')
                                    }
                                    to='/care/individual-medical-information/diagnosis-list'
                                >
                                    Diagnosis List
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/care/individual-medical-information/advance-directives' && 'active')
                                    }
                                    to='/care/individual-medical-information/advance-directives'
                                >
                                    Advance Directives
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/care/individual-medical-information/allergy-profile' && 'active')
                                    }
                                    to='/care/individual-medical-information/allergy-profile'
                                >
                                    Allergy Profile
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/care/individual-medical-information/medication-profile' && 'active')
                                    }
                                    to='/care/individual-medical-information/medication-profile'
                                >
                                    Medication Profile
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/care/individual-medical-information/medication-reconciliation' && 'active')
                                    }
                                    to='/care/individual-medical-information/medication-reconciliation'
                                >
                                    Medication Reconciliation
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/care/individual-medical-information/individual-history' && 'active')
                                    }
                                    to='/care/individual-medical-information/individual-history'
                                >
                                    Individual History
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualMedicalInformationHeader