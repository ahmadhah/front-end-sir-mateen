/* eslint-disable */
import React from 'react'
import { Link, useLocation, NavLink } from 'react-router-dom'

function AdminCareHeader() {
    const location = useLocation()
    return (
        <div>
            <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-3 pb-0'>
                    <div className='d-flex overflow-auto h-60px'>
                        <ul className='nav nav-stretch w-100 justify-content-between nav-line-tabs border-transparent fs-5 py-5'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link  text-active-primary fw-bolder ` +
                                        (location.pathname.startsWith('/care/individual') && 'active')
                                    }
                                    to='/care/individual-intake/list'
                                >
                                    Individuals
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary fw-bolder ` +
                                        (location.pathname.startsWith('/care/contact/') && 'active')
                                    }
                                    to='/care/contact/list'
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary fw-bolder ` +
                                        (location.pathname.startsWith('/care/enrollment/') && 'active')
                                    }
                                    to='/care/enrollment/by-individual'
                                >
                                    Enrollment
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary fw-bolder ` +
                                        (location.pathname.startsWith('/care/insurace/') && 'active')
                                    }
                                    to='/care/insurance/list'
                                >
                                    Insurance
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary fw-bolder ` + 
                                        (location.pathname.startsWith('/care/behavior/')  && 'active')
                                    }
                                    to="/care/behavior/behavior-antecedent-intervention/"
                                >
                                    Behavior Settings
                                </Link>
                            </li>
                            {/* <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-4` +
                                        (location.pathname === '/care/admin-individual-demographics/list' && 'active')
                                    }
                                    to='/care/admin-individual-demographics/list'
                                >
                                    Individual Demographics
                                </Link>
                            </li> */}
                            {/* <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary ` +
                                        (location.pathname === '/care/behavior-antecedent-intervention/add' && 'active')
                                    }
                                    to='/care/behavior-antecedent-intervention/add'
                                >
                                    Behavior Antecedent Intervention
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary ` +
                                        (location.pathname === '/care/behavior-antecedent-intervention-categories/add' && 'active')
                                    }
                                    to='/care/behavior-antecedent-intervention-categories/add'
                                >
                                    Behavior Antecedent Intervention Categories
                                </Link>
                            </li> */}
                            {/* <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary ` +
                                        (location.pathname === '/care/behavior-intensity-configuration/view' && 'active')
                                    }
                                    to='/care/behavior-intensity-configuration/view'
                                >
                                    Behavior Intensity Confiuration
                                </Link>
                            </li> */}
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary fw-bolder ` +
                                        (location.pathname.startsWith('/care/isp-program/') && 'active')
                                    }
                                    to='/care/isp-program-scoring-method/new'
                                >
                                    ISP Program Scoring Method
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCareHeader