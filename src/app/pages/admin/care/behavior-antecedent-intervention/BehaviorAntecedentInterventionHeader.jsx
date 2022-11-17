import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AdminCareHeader from '../AdminCareHeader'

function BehaviorAntecedentInterventionHeader() {
    const location = useLocation()
  return (
    <div>
        <AdminCareHeader/>
        <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-9 pb-0'>
                    <p className='text-gray-800 fs-2 fw-bolder'>Behavior Antecedent Intervention</p>
                    <div className='d-flex overflow-auto h-55px'>
                        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/care/behavior-antecedent-intervention/add' && 'active')
                                    }
                                    to='/care/behavior-antecedent-intervention/add'
                                >
                                    Add
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/care/behavior-antecedent-intervention/edit' && 'active')
                                    }
                                    to='/care/behavior-antecedent-intervention/edit'
                                >
                                    Edit
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default BehaviorAntecedentInterventionHeader