import React from 'react'
import { Link } from 'react-router-dom'

function ImportFromExcel() {
    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>Medication History Excel Import</h1>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Program Name</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example' required>
                                <option value=''>Select Program Name</option>
                                <option value=''>Adult Day Training (Guardian Haven Academy)</option>
                                <option value=''>Transportation (Guardian Haven Academy)</option>
                            </select>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Individual Name</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example' required>
                                <option value=''>Select Individual Name</option>
                            </select>
                        </div>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
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
                            <div><b>Download a sample excel file (with supported format and help)</b></div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='d-flex flex-stack'>
                <div>
                    <Link to='/health/healthtracking'>
                        <button className='btn btn-primary mt-4'>Cancel</button>
                    </Link>
                </div>
                <div>
                    <button className='btn btn-primary mt-4 me-4'>Import</button>
                </div>
            </div>

        </div>
    )
}

export default ImportFromExcel