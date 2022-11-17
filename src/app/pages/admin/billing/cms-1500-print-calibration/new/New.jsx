
import React from 'react'
import { Link } from 'react-router-dom'

function New() {
    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>CMS-1500 Print Calibration</h1>
                    <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Printer Name/Identifier</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Printer Name/Identifier'
                                required
                            ></input>
                        </div>
                        <div style={{ backgroundColor: "LightBlue" }} className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <p className='mt-3'>Printing Instruction: Before you print, please select None for Page Scaling and uncheck the Auto-Rotate and Center option from the print dialog box.</p>
                        </div>
                        <div style={{ backgroundColor: "LightBlue" }} className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <ul className='mt-3'><li>Step 1: Use the original CMS-1500 form and print the values using: CMS-1500 Before Calibration</li>
                            <li>If your form prints correctly, then skip step 2 & 3 and save the calibration.</li></ul>
                        </div>
                        <div style={{ backgroundColor: "LightBlue" }} className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <p className='mt-3'>Step 2: Adjust the following values to print the form correctly.</p>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Move Up/Down</label>
                            <input
                                type='number'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                                required
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Move Right/Left</label>
                            <input
                                type='number'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                                required
                            ></input>
                        </div>
                        <div style={{ backgroundColor: "LightBlue" }} className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <ul className='mt-3'><li>Step 3: Use the original CMS-1500 form and print the values using: CMS-1500 After Calibration.</li>
                            <li>Repeat step 2 & 3 until the form is printed correctly. Change 1 or 2 points at a time and check the positions after printing.</li></ul>
                        </div>

                        <div className='d-flex flex-stack'>
                            <div>
                                <Link to='/billing/cms-1500-print-calibration'>
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

export default New