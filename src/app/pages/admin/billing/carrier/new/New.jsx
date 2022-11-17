import React from 'react'
import { Link } from 'react-router-dom'

function Archive() {
    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>Carrier</h1>
                    <div className='row'>
                    <h3 className='mb-5 mt-5 text-primary display-7'>Details</h3>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Name</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Name'
                                required
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Code</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Code'
                                required
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Insurance Type</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option value=''>Select Insurance Type</option>
                                <option value=''>Other Non-Federal Programs</option>
                                <option value=''>Preferred Provider Organization (PPO)</option>
                                <option value=''>Point of Service (POS)</option>
                                <option value=''>Exclusive Provider Organization (EPO)</option>
                                <option value=''>Indemnity Insurance</option>
                                <option value=''>Health Maintenance Organization(HMO) Medicare Risk</option>
                                <option value=''>Dental Maintenance Organization</option>
                                <option value=''>Automobile Medical</option>
                                <option value=''>Blue Cross/Blue Shield</option>
                                <option value=''>Champus</option>
                                <option value=''>Commercial Insurance Co.</option>
                                <option value=''>Disability</option>
                                <option value=''>Federal Employee Program</option>
                                <option value=''>Health Maintenance Organization</option>
                                <option value=''>Liability Medical</option>
                                <option value=''>Medicare Part A</option>
                                <option value=''>Medicare Part B</option>
                                <option value=''>Medicaid</option>
                                <option value=''>Other Federal Program</option>
                                <option value=''>Title V</option>
                                <option value=''>Veterans Affairs Plan</option>
                                <option value=''>Workers Compensation Health Claim</option>
                                <option value=''>Mutually Defined</option>
                            </select>
                        </div>

                        <div className='d-flex flex-stack'>
                            <div>
                                <Link to='/billing/carrier'>
                                    <button className='btn btn-primary mt-4'>Cancel</button>
                                </Link>
                            </div>
                            <div className=''>
                                <button className='btn btn-primary mt-4  '>Save</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Archive