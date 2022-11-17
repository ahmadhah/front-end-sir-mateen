import React from 'react'
import { Link } from 'react-router-dom'

function PersonalDetails() {
    return (
        <div>

            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>Personal Details (Edit)</h1>
                    <div className='row'>
                        <h3 className='mb-5 mt-5 text-primary display-7'>Personal Information</h3>
                        <div className='separator border-gray-200'></div>
                        <h3 className='mb-5 mt-5 text-primary display-7'>Basic Information</h3>
                        <div className='separator border-gray-200'></div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Photo</label>
                            <input
                                type='image'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                alt='Image here'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>User Name</label>
                            <p>Dark Army Studios</p>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>User Initials</label>
                            <p>Das</p>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Title</label>
                            <p>Administration</p>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Gender</label>
                            <div className='form-check mt-2 mb-4'>
                                <input
                                    className='form-check-input'
                                    type='radio'
                                    name='exampleRadios'
                                    id='exampleRadios1'
                                    value='option1'

                                />
                                <label className='form-check-label'>
                                    Male
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
                                <label className='form-check-label'>
                                    Female
                                </label>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Date of Birth</label>
                            <input
                                type='date'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder=''
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>License Number</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='License Number'
                            ></input>
                        </div>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>SSN</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='SSN'
                            ></input>
                        </div>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>ID(s)</label>
                                    <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                        <option value=''>Select ID(s)</option>
                                        <option value=''>Payroll ID</option>
                                        <option value=''>State ID</option>
                                    </select>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <div className='mt-8'>
                                        <input
                                            type='text'
                                            name='user_name'
                                            className='form-control form-control-solid mb-lg-0'
                                            placeholder='ID Number'
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <button className='btn btn-primary'>+ Add</button>
                                </div>
                            </div>
                        </div>

                        <div className='separator border-gray-200 mt-8'></div>
                        <h3 className='mb-5 mt-5 text-primary display-7'>Contact Information</h3>
                        <div className='separator border-gray-200'></div>
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
                            <label className=' fw-bold fs-6 mb-2'>Phone Number</label>
                            <div className='row'>
                                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='Home'
                                    ></input>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='Mobile'
                                    ></input>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <input
                                        type='text'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='Temporary'
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
                            <label className=' fw-bold fs-6 mb-2'>Phone Number Comments</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Phone Number Comments'
                            ></input>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>E-Mail Address</label>
                            <input
                                type='email'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='E-Mail Address'
                            ></input>
                        </div>

                    </div>
                </div>
            </div>


            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h3 className='mb-5 mt-5 text-primary display-7'>Preferences</h3>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>* Time Zone</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option value=''>Select Time Zone</option>
                                <option value=''>US/Eastern</option>
                            </select>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                                <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                                    Enable Notification
                                </span>
                                <input className='form-check-input' type='checkbox' value='' />
                            </label>
                        </div>

                    </div>
                </div>
            </div>


            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h3 className='mb-5 mt-5 text-primary display-7'>Additional Contact Information</h3>

                    <div className='separator border-gray-200 mt-8'></div>
                    <h3 className='mb-5 mt-5 text-primary display-7'>Employer/Work Information</h3>
                    <div className='separator border-gray-200 mb-3'></div>

                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Work Phone Number</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Work Phone Number'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <div className='mt-8'>
                                <input
                                    type='text'
                                    name='user_name'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder='Extension'
                                ></input>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                        <label className=' fw-bold fs-6 mb-2'>Fax Number</label>
                        <input
                            type='text'
                            name='user_name'
                            className='form-control form-control-solid mb-3 mb-lg-0'
                            placeholder='Fax Number'
                        ></input>
                    </div>


                    <div className='separator border-gray-200 mt-9'></div>
                    <h3 className='mb-5 mt-5 text-primary display-7'>Emergency Contact 1</h3>
                    <div className='separator border-gray-200 mb-3'></div>

                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                        <label className=' fw-bold fs-6 mb-2'>Name</label>
                        <input
                            type='text'
                            name='user_name'
                            className='form-control form-control-solid mb-3 mb-lg-0'
                            placeholder='Name'
                        ></input>
                    </div>

                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Phone Number</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Phone Number'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <div className='mt-8'>
                                <input
                                    type='text'
                                    name='user_name'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder='Extension'
                                ></input>
                            </div>
                        </div>
                    </div>

                    <div className='separator border-gray-200 mt-8'></div>
                    <h3 className='mb-5 mt-5 text-primary display-7'>Emergency Contact 2</h3>
                    <div className='separator border-gray-200 mb-3'></div>


                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                        <label className=' fw-bold fs-6 mb-2'>Name</label>
                        <input
                            type='text'
                            name='user_name'
                            className='form-control form-control-solid mb-3 mb-lg-0'
                            placeholder='Name'
                        ></input>
                    </div>

                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Phone Number</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Phone Number'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <div className='mt-8'>
                                <input
                                    type='text'
                                    name='user_name'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder='Extension'
                                ></input>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h3 className='mb-5 mt-5 text-primary display-7'>EVV</h3>
                    <div className='row'>
                        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>EVV ID</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='EVV ID'
                            ></input>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                {/*start::Card*/}
                <div className='fv-row mb-7 p-5 card'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-1'>
                            <Link to='#'>
                                <div><b>Profile(s)</b></div>
                            </Link>
                            <Link to='#'>
                                <div><b>User Links</b></div>
                            </Link>
                        </div>
                    </div>
                </div>
                {/*end::Card*/}
            </div>

            <div className='d-flex flex-stack'>
                <div>
                    <Link to='/settings'>
                        <button className='btn btn-primary mt-4 me-4'>Cancel</button>
                    </Link>
                    <Link to='/settings'>
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

export { PersonalDetails }