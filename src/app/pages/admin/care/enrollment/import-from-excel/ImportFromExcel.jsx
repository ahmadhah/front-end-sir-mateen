import React from 'react'
import { Link } from 'react-router-dom'

function ImportFromExcel() {
    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>Import Program Enrollment</h1>
                    <div className='row'>
                        <div style={{ backgroundColor: "BlanchedAlmond" }} className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <ul>
                                <li className='mt-3'>The maximum file size allowed is 3 MB.</li>
                                <li>Maximum number of rows allowed is 200.</li>
                                <li>Please use Microsoft Excel Version 2007 or later to enter data into the Excel Template. Supported File Format: xlsx</li>
                            </ul>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>File</label>
                            <input
                                type='file'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
                        </div>
                    </div>
                </div>
            </div>


            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='row'>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-1'>
                        <Link to='#'>
                            <div><b>Download from Excel</b></div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='d-flex flex-stack'>
                <div>
                    <Link to='/admin/general'>
                        <button className='btn btn-primary mt-4'>Cancel</button>
                    </Link>
                </div>
                <div>
                    <button className='btn btn-primary mt-4 me-4'>Upload</button>
                </div>
            </div>

        </div>
    )
}

export default ImportFromExcel