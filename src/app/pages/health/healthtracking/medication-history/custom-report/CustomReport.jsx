/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

function CustomReport() {
    return (
        <div>

            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>Medication History Report Criteria</h1>
                    <div className='row'>

                        <h3 className='mb-5 mt-5 text-primary display-7'>* Output Columns</h3>
                        <div className='separator border-gray-200 mb-3'></div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Medication Name
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Drug Code
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Drug Coding System
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Dose Form
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Route
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Strength
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Strength Unit
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Give Amount / Quantity
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Measurement Unit
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Frequency
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Indication/Purpose
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Begin Date
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            End Date
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Discontinued Date
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Discontinue Reason
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Total Count
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Prescriber
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Side Effects
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Instruction/Comments
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Status
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Program
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Medication Type
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Home Medication
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Prescription/OTC
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Medication Category
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Medication Subcategory
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Linked Diagnoses
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Notification Level
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Reporter
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Create Date
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Approve Date
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Effectiveness of Medication
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Time Zone
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='separator border-gray-200 mt-3'></div>
                    <h3 className='mb-5 mt-5 text-primary display-7'>Report Criteria</h3>
                    <div className='separator border-gray-200 mb-3'></div>

                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>* Individuals</label>
                                <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example' required>
                                    <option value=''>Select Individuals</option>
                                </select>
                            </div>

                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Program(s)</label>
                                <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                    <option value=''>Select Program(s)</option>
                                    <option value=''>Adult Day Training (Guardian Haven Academy)</option>
                                    <option value=''>Transportation (Guardian Haven Academy)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                        <label className=' fw-bold fs-6 mb-2'>Reporter(s)</label>
                        <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                            <option value=''>Select Reporter(s)</option>
                        </select>
                    </div>

                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Medication Begin Date From</label>
                                <input
                                    type='date'
                                    name='user_name'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder=''
                                    required
                                ></input>
                            </div>

                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Medication End Date To</label>
                                <input
                                    type='date'
                                    name='user_name'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder=''
                                    required
                                ></input>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Medication End Date From</label>
                                <input
                                    type='date'
                                    name='user_name'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder=''
                                    required
                                ></input>
                            </div>

                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Medication End Date To</label>
                                <input
                                    type='date'
                                    name='user_name'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder=''
                                    required
                                ></input>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                        <label className=' fw-bold fs-6 mb-2'>Form Status</label>
                        <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                            <option value=''>Select Form Status</option>
                            <option value=''>In Prep</option>
                            <option value=''>Approved</option>
                            <option value=''>Discontinued</option>
                            <option value=''>Deleted</option>
                        </select>
                    </div>


                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3 mt-5'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>Medication Type</label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Scheduled (Medication)
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Scheduled (Medication)
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Scheduled (Treatment)
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            PRN (Treatment)
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Other
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                            </div>

                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>Filter By</label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Prescription
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Over the Counter
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='d-flex flex-stack'>
                        <div>
                            <Link to='/health/healthtracking'>
                                <button className='btn btn-primary mt-4'>Cancel</button>
                            </Link>
                        </div>
                        <div className=''>
                            <button className='btn btn-primary mt-4  '>Search</button>
                        </div>
                    </div>


                </div>

            </div>

        </div >
    )
}

export default CustomReport