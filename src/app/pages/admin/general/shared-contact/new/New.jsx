import React from 'react'
import { Link } from 'react-router-dom'

function New() {
    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>Shared Contact (New)</h1>
                    <div className='row'>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Title</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Title'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>First Name</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='First Name'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Middle Name</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Middle Name'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Last Name</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Last Name'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Organization Name</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Login Name'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>NPI Number</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='NPI Number'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Type</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option value=''>Select Type</option>
                                <option value=''>Aunt</option>
                                <option value=''>Behaviour Analyst</option>
                                <option value=''>Behaviour Assistant</option>
                                <option value=''>Brother</option>
                                <option value=''>Grandfather</option>
                                <option value=''>Grandmother</option>
                                <option value=''>Grand Home Manager</option>
                                <option value=''>Grand Home Owner</option>
                                <option value=''>Parent</option>
                                <option value=''>Sister</option>
                            </select>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Specialty</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option value=''>Select Specialty</option>
                            </select>
                        </div>
                    </div>


                    <div className='row'>
                        <h3 className='mt-5 mb-5 text-primary display-7'>Primary Address</h3>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Attention or in care of</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Attention or in care of'
                            ></input>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Address</label>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='Street 1'
                                    ></input>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='Street 2'
                                    ></input>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='City'
                                    ></input>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                        <option value=''>Select State</option>
                                    </select>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='Zip Code'
                                    ></input>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                    <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                        <option value=''>Select Country</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-2'>
                            <label className=' fw-bold fs-6 mb-2'>Primary Phone</label>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder=''
                                    ></input>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='Extension'
                                    ></input>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-2'>
                            <label className=' fw-bold fs-6 mb-2'>Secondary Phone</label>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder=''
                                    ></input>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='Extension'
                                    ></input>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-2'>
                            <label className=' fw-bold fs-6 mb-2'>Additional Phone</label>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder=''
                                    ></input>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='Extension'
                                    ></input>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-3'>Email</label>
                            <input
                                type='email'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Email'
                            ></input>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-3'>Web Address</label>
                            <input
                                type='email'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Web Address'
                            ></input>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-3'>Fax</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Fax'
                            ></input>
                        </div>
                    </div>
                </div>


                <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                    <div className='card-body'>
                        <div className='row'>
                            <h3 className='mb-5 text-primary display-7'>Mailing Address</h3>

                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Attention or in care of</label>
                                <div className='row'>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder='Attention or in care of'
                                        ></input>
                                    </div>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                        <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                            <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                            Same as Primary Address
                                            </span>
                                            <input className='form-check-input' type='checkbox' value='' />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                                <div className='row'>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                        <label className=' fw-bold fs-6 mb-2'>Address</label>
                                        <input
                                            type='text'
                                            name='user_name'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder='Street 1'
                                        ></input>
                                    </div>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder='Street 2'
                                        ></input>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                                <div className='row'>
                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder='City'
                                        ></input>
                                    </div>
                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                        <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                            <option value=''>Select State</option>
                                        </select>
                                    </div>
                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder='Zip Code'
                                        ></input>
                                    </div>
                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                        <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                            <option value=''>Select Country</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-2'>
                                <label className=' fw-bold fs-6 mb-2'>Primary Phone</label>
                                <div className='row'>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder=''
                                        ></input>
                                    </div>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder='Extension'
                                        ></input>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-2'>
                                <label className=' fw-bold fs-6 mb-2'>Secondary Phone</label>
                                <div className='row'>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder=''
                                        ></input>
                                    </div>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder='Extension'
                                        ></input>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-2'>
                                <label className=' fw-bold fs-6 mb-2'>Additional Phone</label>
                                <div className='row'>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder=''
                                        ></input>
                                    </div>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder='Extension'
                                        ></input>
                                    </div>
                                </div>
                            </div>

                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-3'>Email</label>
                                <input
                                    type='email'
                                    name='user_name'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder='Email'
                                ></input>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-3'>Fax</label>
                                <input
                                    type='text'
                                    name='user_name'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder='Fax'
                                ></input>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='d-flex flex-stack'>
                <div>
                    <Link to='/admin/general'>
                        <button className='btn btn-primary mt-4 me-4'>Cancel</button>
                    </Link>
                    <Link to='/admin/general'>
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