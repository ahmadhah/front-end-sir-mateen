/* eslint-disable */
import React , {useState} from 'react'
import { Link } from 'react-router-dom'

function New() {
    const [serviceRate, setServiceRate] = useState("")
    const [billingData, setBillingData] = useState("Note: Billing Data will be generated for each day.")
    const [billingNonCoveredDays, setBillingNonCoveredDays] = useState("Note: No Billing Data will be generated.")
    
    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>Leave Rule</h1>
                    <div className='row'>
                        <h3 className='mb-5 mt-5 text-primary display-7'>Details</h3>
                        <div style={{ backgroundColor: "BlanchedAlmond" }} className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <p className='mt-3'>Leave Rules having 'Revenue Code' as Billing options can only be used for Institutional Claim. For Professional Claim, Billing Data cannot be generated from Attendance for Leave Rules having 'Revenue Code' as Billing option.</p>
                        </div>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Rule Name</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Rule Name'
                                required
                            ></input>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Monthly Maximum Leave Days</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Monthly Maximum Leave Days'
                            ></input>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Yearly Maximum Leave Days</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Yearly Maximum Leave Days'
                            ></input>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Maximum Consecutive Leave Days Per Year</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Maximum Consecutive Leave Days Per Year'
                            ></input>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Yearly Maximum Leave Days</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Yearly Maximum Leave Days'
                                required
                            ></input>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Calculate Leave Days using</label>
                            <div className='form-check mt-2 mb-4'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='calendaryear'
                                    id='calendaryear'
                                    value='calendaryear'
                                    defaultChecked
                                    required
                                />
                                <label className='form-check-label' for='calendaryear'>
                                Calendar Year
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
                                    Fiscal Year
                                </label>
                            </div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Rate Source</label>
                            <div className='form-check mt-2 mb-4'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='servicerate'
                                    id='servicerate'
                                    value='servicerate'
                                    defaultChecked
                                    required
                                />
                                <label className='form-check-label' for='servicerate'>
                                Service Rate
                                </label>
                                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3' style={{ backgroundColor: "LightBlue" }}><p className='mt-3'>Note: 'Default Unit Rate ($)' specified in the Service form will be used to generate billing data.</p></div>
                            </div>
                            <div className='form-check mt-2 mb-4'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='unitratehistory'
                                    id='unitratehistory'
                                    value='unitratehistory'
                                //     onClick={setServiceRate("Note: Rate History defined in Service Form or Service Description/Code will be used to generate billing data. If no Rate History is found, then 'Default Unit Rate ($)' of the Service form will be used.")}
                                />
                                <label className='form-check-label' for='unitratehistory'>
                                Unit Rate History
                                </label>
                                {serviceRate ? <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 mt-3 my-3' style={{ backgroundColor: "LightBlue" }}><p className='mt-3'>{serviceRate}</p></div> : ""}
                            </div>
                            <div className='form-check mt-2 mb-4'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='defineratebelow'
                                    id='defineratebelow'
                                    value='defineratebelow'
                                />
                                <label className='form-check-label' for='defineratebelow'>
                                Define Rate Below
                                </label>
                            </div>
                            <div className='form-check mt-2 mb-4'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='percentageservicerate'
                                    id='percentageservicerate'
                                    value='percentageservicerate'
                                />
                                <label className='form-check-label' for='percentageservicerate'>
                                Percentage of Service Rate
                                </label>
                            </div>
                            <div className='form-check mt-2 mb-4'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='definerateservice'
                                    id='definerateservice'
                                    value='definerateservice'
                                />
                                <label className='form-check-label' for='definerateservice'>
                                Define Rate In Service
                                </label>
                            </div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Billing Data Grouping Type</label>
                            <div className='form-check mt-2 mb-4'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='perday'
                                    id='perday'
                                    value='perday'
                                    defaultChecked
                                    required
                                />
                                <label className='form-check-label' for='perday'>
                                Per Day
                                </label>
                                {billingData ? <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 mt-3 my-3' style={{ backgroundColor: "LightBlue" }}><p className='mt-3'>{billingData}</p></div> : ""}
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
                                Group Per Option
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
                                Group Per Continuous Option
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
                                Group Per Revenue Code
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
                                Group Per Continuous Revenue Code
                                </label>
                            </div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'> Billing for Non Covered Days</label>
                            <div className='form-check mt-2 mb-4'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='nobillingdata'
                                    id='nobillingdata'
                                    value='nobillingdata'
                                    defaultChecked
                                    required
                                />
                                <label className='form-check-label' for='nobillingdata'>
                                No Billing Data
                                </label>
                                {billingNonCoveredDays ? <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3 mt-3 my-3' style={{ backgroundColor: "LightBlue" }}><p className='mt-3'>{billingNonCoveredDays}</p></div> : ""}
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
                                Billing Data with non-billable units
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
                                Billing Data with non-billable units and Revenue Code
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
                                Billing Data with billable units and Revenue Code
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className='d-flex flex-stack'>
                <div className=''>
                    <Link to='/billing/leave-rule'>
                        <button className='btn btn-primary mt-4'>Cancel</button>
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