import React from 'react'
import { Link } from 'react-router-dom'

function New() {
    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>Service Description/Code</h1>
                    <div className='row'>
                        <h3 className='mb-5 mt-5 text-primary display-7'>Service Description/Code</h3>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Service Description</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Service Description'
                                required
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Service Code</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Service Code'
                                required
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Account Number</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Account Number'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Unit of Measure (Label)</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Unit of Measure (Label)'
                                required
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Unit Rate ($)</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='0.00'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Claim Type </label>
                            <div className='form-check mt-2 mb-4'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='exampleRadios'
                                    id='exampleRadios1'
                                    defaultChecked
                                    value='option1'

                                />
                                <label className='form-check-label' for='exampleRadios1'>
                                    Professional Claim
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
                                    Institutional Claim
                                </label>
                            </div>
                        </div>


                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12'>
                                    <label className=' fw-bold fs-6 mb-2'>Procedure Modifiers</label>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='form-control form-control-solid mb-lg-0'
                                        placeholder=''
                                    ></input>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-5'>
                                    <div className='mt-3'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            className='form-control form-control-solid mb-lg-0'
                                            placeholder=''
                                        ></input>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-5'>
                                    <div className='mt-3'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            className='form-control form-control-solid mb-lg-0'
                                            placeholder=''
                                        ></input>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-5'>
                                    <div className='mt-3'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder=''
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>Primary Diagnosis Code</label>
                                    <p>ICD-10</p>
                                </div>
                                <div className='col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 my-3'>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='Lookup Diagnosis (Code/Description)'
                                    ></input>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12'>
                                    <label className=' fw-bold fs-6 mb-2'>Diagnosis Code Pointer</label>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='1'
                                    ></input>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-5'>
                                    <div className='mt-3'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder=''
                                        ></input>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-5'>
                                    <div className='mt-3'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder=''
                                        ></input>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-5'>
                                    <div className='mt-3'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder=''
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <div className='row'>
                        <h3 className='mb-5 text-primary display-7'>Electronic Billing</h3>
                        <div style={{ backgroundColor: "BlanchedAlmond" }} className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <p className='mt-5'>Do not change the Unit for Electronic Submission from Unit to Day or Minute unless its required by the State Medicaid System.</p>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Unit for Electronic Submission</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option value=''>Select Unit for Electronic Submission</option>
                                <option value=''>Unit</option>
                                <option value=''>Minute</option>
                                <option value=''>Day</option>
                            </select>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Procedure Qualifier</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option value=''>Select Procedure Qualifier</option>
                                <option value=''>HC - HCPCS</option>
                                <option value=''>ZZ - Mutually Defined</option>
                                <option value=''>ER - Jurisdiction Specific Procedure and Supply Codes</option>
                            </select>
                        </div>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack fw-bold fs-6'>
                                        Add Service Description in 837
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <div className='row'>
                        <h3 className='mb-5 text-primary display-7'>Rate History Information</h3>
                        <div style={{ backgroundColor: "BlanchedAlmond" }} className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <p className='mt-5'>Service Dates that do not fall under any of the following date ranges will use the default Unit Rate.</p>
                        </div>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack fw-bold fs-6'>
                                        Enable Rate History
                                        <input className='form-check-input' type='checkbox' value='' />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <div className='row'>
                        <h3 className='mb-5 text-primary display-7'>Validation for Total Billable Units</h3>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Validation for Total Billable Units</label>
                            <div className='form-check mt-2 mb-4'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='exampleRadios'
                                    id='exampleRadios1'
                                    defaultChecked
                                    value='option1'

                                />
                                <label className='form-check-label' for='exampleRadios1'>
                                    Restrict (Create Billing Data with available remaining Units. Any unit in excess of the Total Billable Units will be recorded as non-billable unit. No Billing Data will be generated if remaining unit is zero)
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
                                    Restrict & Continue (Create Billing Data with available remaining units. Any unit in excess of the Total Billable Units will be recorded as non-billable unit. Billing Data will be generated with non-billable unit if remaining unit is zero)
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
                                    Block (Block creation of any Billing Data if Total Billable Units is exceeded)
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <div className='row'>
                        <h3 className='mb-5 text-primary display-7'>Automatic Unit Calculation From Time In/Out</h3>
                        <div style={{ backgroundColor: "BlanchedAlmond" }} className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <p className='mt-5'>Please check <b>Billable Unit Calculator</b> to make sure you have chosen the desired settings for Automatic Unit Calculation From Time In/Out.</p>
                        </div>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Unit of Measure (Calculation)</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option value=''>Select Unit of Measure (Calculation)</option>
                                <option value=''>5 Minutes</option>
                                <option value=''>6 Minutes</option>
                                <option value=''>15 Minutes</option>
                                <option value=''>20 Minutes</option>
                                <option value=''>30 Minutes</option>
                                <option value=''>1 Hour</option>
                                <option value=''>2 Hours</option>
                            </select>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Rounding Algorithm</label>
                            <div className='row'>
                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            Half Up
                                        </label>
                                    </div>
                                </div>

                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            Half Down
                                        </label>
                                    </div>
                                </div>

                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            Up
                                        </label>
                                    </div>
                                </div>

                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            Down
                                        </label>
                                    </div>
                                </div>

                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            Quarter Up
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            Quarter Down
                                        </label>
                                    </div>
                                </div>

                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            Two Third Up
                                        </label>
                                    </div>
                                </div>

                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            Two Third Down
                                        </label>
                                    </div>
                                </div>

                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            Three Quarter Up
                                        </label>
                                    </div>
                                </div>

                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            Three Quarter Down
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-0'>
                                    <div className='form-check mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            None
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Smallest Allowed Increment</label>
                            <div className='row'>
                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            5 Minutes
                                        </label>
                                    </div>
                                </div>

                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            6 Minutes
                                        </label>
                                    </div>
                                </div>

                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            7.5 Minutes
                                        </label>
                                    </div>
                                </div>

                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            10 Minutes
                                        </label>
                                    </div>
                                </div>

                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            15 Minutes
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            20 Minutes
                                        </label>
                                    </div>
                                </div>

                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            30 Minutes
                                        </label>
                                    </div>
                                </div>

                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            45 Minutes
                                        </label>
                                    </div>
                                </div>

                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            60 Minutes
                                        </label>
                                    </div>
                                </div>

                                <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 my-3'>
                                    <div className='form-check mt-2 mb-4'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='exampleRadios'
                                            id='exampleRadios1'
                                            value='option1'

                                        />
                                        <label className='form-check-label' for='exampleRadios1'>
                                            120 Minutes
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            <div className='d-flex flex-stack'>
                <div className=''>
                    <Link to='/billing/funding-source'>
                        <button className='btn btn-primary mt-4'>Back</button>
                    </Link>
                </div>
                <div>
                    <button className='btn btn-primary mt-4  '>Save</button>
                </div>
            </div>

        </div>
    )
}

export default New