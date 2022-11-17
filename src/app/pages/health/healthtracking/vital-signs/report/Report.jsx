import React from 'react'
import { Link } from 'react-router-dom'

function Report() {
    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>Vital Signs Report Criteria</h1>
                    <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Individual</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placaeholder='Individual'
                                required
                            ></input>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Begin Date</label>
                            <input
                                type='date'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                                required
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* End Date</label>
                            <input
                                type='date'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                                required
                            ></input>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Column(s)</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example' required>
                                <option value=''>Select Column(s)</option>
                                <option value=''>Temperature</option>
                                <option value=''>Pulse</option>
                                <option value=''>Oxygen Saturation</option>
                                <option value=''>Respiration</option>
                                <option value=''>Blood Presure</option>
                            </select>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Format</label>
                            <div className='form-check mt-2 mb-4'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='exampleRadios'
                                    id='exampleRadios1'
                                    value='option1'

                                />
                                <label className='form-check-label' for='exampleRadios1'>
                                    Table
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
                                    Graph
                                </label>
                            </div>
                        </div>

                        <div className='d-flex flex-stack'>
                            <div>
                                <Link to='/health/healthtracking'>
                                    <button className='btn btn-primary mt-4'>Cancel</button>
                                </Link>
                            </div>
                            <div className=''>
                                <button className='btn btn-primary mt-4  '>Generate</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report