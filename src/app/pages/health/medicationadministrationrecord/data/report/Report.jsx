/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

function Report() {
    return (
        <div>

            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>MAR Report Criteria Form</h1>
                    <div className='row'>
                        <h3 className='mb-5 mt-5 text-primary display-7'>MAR Report Criteria</h3>

                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Include Records with unspecified schedule </label>
                            <div className='form-check mt-2 mb-4'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='exampleRadios'
                                    id='exampleRadios1'
                                    value='option1'

                                />
                                <label className='form-check-label' for='exampleRadios1'>
                                    Custom
                                </label>
                            </div>
                            <div className='form-check mt-2 mb-4'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='exampleRadios'
                                    id='exampleRadios3'
                                    value='option3'
                                />
                                <label className='form-check-label' for='exampleRadios3'>
                                    Detailed
                                </label>
                            </div>
                            <div className='form-check mt-2 mb-4'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='exampleRadios'
                                    id='exampleRadios3'
                                    value='option3'
                                />
                                <label className='form-check-label' for='exampleRadios3'>
                                    PRN Follow-up
                                </label>
                            </div>
                        </div>



                        <div className='separator border-gray-200 mt-8'></div>
                        <h3 className='mb-5 mt-5 text-primary display-7'>* Output Columns</h3>
                        <div className='separator border-gray-200 mb-3'></div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Individual
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

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
                                            Medication Type
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
                            </div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
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
                                            Dose
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

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Total Dose
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
                                            Total Count
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

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
                                            Administer Time
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Scheduled Time
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
                                            Administer Date
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Administered By
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Record Type
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Record Date
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
                                            Recorded By
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>

                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Prescriber
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='separator border-gray-200 mt-8 mb-8'></div>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>* Date From</label>
                                <input
                                    type='date'
                                    name='user_name'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder=''
                                    required
                                ></input>
                            </div>

                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Date To</label>
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
                                <label className=' fw-bold fs-6 mb-2'>* Individuals</label>
                                <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example' required>
                                    <option value=''>Select Individuals</option>
                                </select>
                            </div>

                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Medication(s)</label>
                                <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                    <option value=''>Select Medication(s)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                        <label className=' fw-bold fs-6 mb-2'>Administered By</label>
                        <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                            <option value=''>Select Administered By</option>
                        </select>
                    </div>

                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3 mt-5'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>Record Type</label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Administered
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Missed
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Refused
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            On Hold
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Deleted
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                        <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            LOA
                                        </span>
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                            </div>

                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-3'>
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
                                            PRN (Medication)
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

                            </div>
                        </div>

                    </div>

                    <div className='d-flex flex-stack'>
                        <div>
                            <Link to='/health/medicationadministrationrecord'>
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

export default Report