/* eslint-disable */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AdminCareHeader from '../AdminCareHeader'

function AdminIndividualDemographicsHeader() {
    const location = useLocation()
  return (
    <div>
        <AdminCareHeader/>
        <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-9 pb-0'>
                    <p className='text-gray-800 fs-2 fw-bolder'>Admin Individual Demographics</p>
                    <div className='d-flex overflow-auto h-55px'>
                        <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/care/admin-individual-demographics/list' && 'active')
                                    }
                                    to='/care/admin-individual-demographics/list'
                                >
                                    List
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/care/admin-individual-demographics/search' && 'active')
                                    }
                                    to='/care/admin-individual-demographics/search'
                                >
                                    Search
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className={
                                        `nav-link text-active-primary me-6 ` +
                                        (location.pathname === '/care/admin-individual-demographics/custom-fields' && 'active')
                                    }
                                    to='/care/admin-individual-demographics/custom-fields'
                                >
                                    Custom Fields
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AdminIndividualDemographicsHeader