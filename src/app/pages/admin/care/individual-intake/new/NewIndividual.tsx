import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const registrationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required("First Name is required"),
    lastName: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required("Last Name is required"),
    gender: Yup.string()
        .required('Gender is required'),
})

function NewIndividual() {
    const [showResAddr, setShowResAddr] = useState(false)
    const [showMailingAddr, setShowMailingAddr] = useState(false)
    const [showIsGuardian, setShowIsGuardian] = useState(false)
    const [sameAsPrimary, setSameAsPrimary] = useState(false)

    const history = useHistory()
    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{
                    title: '',
                    gender: '',
                    firstName: '',
                    lastName: '',
                    birthday: '',
                    goesby: '',
                    ssn: '',
                    medicaidNumber: '',
                    email: '',
                    phoneNumber: '',
                    race: '',
                    ethnicity: '',
                    classMemebership: '',
                    inCareOf: '',
                    addrAddress: '',
                    addrCity: '',
                    addrState: '',
                    addrZipCode: '',
                    addrCountry: '',
                    addrLocation: '',
                    addrPrimaryPhone: '',
                    addrSecondaryPhone: '',
                    addrAdditionalPhone: '',
                    residentialCountyState: '',
                    residentialCounty: '',
                    serviceCountyState: '',
                    serviceCounty: '',
                    mailingInCareOf: '',
                    mailingaddress: '',
                    mailingCity: '',
                    mailingState: '',
                    mailingCountry: '',
                    mailingZipCode: '',
                    mailingPrimaryPhone: '',
                    mailingSecondaryPhone: '',
                    mailingAdditionalPhone: ''
                }}
                validationSchema={registrationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(values)
                        // setSubmitting(false)
                        // alert(JSON.stringify(values, null, 2));
                        history.push('/care/individual-intake/list')
                    }, 400);
                }}
            >
                <Form>
                    <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                        <div className='card-body'>
                            <h1 className='mb-5'>Individual Demographic Form (IDF) (New)</h1>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>Image</label>
                                    <input
                                        type='file'
                                        name='user_name'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder=''
                                    ></input>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>Title</label>
                                    <Field as="select" name="title" className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                        <option hidden>Select Title</option>
                                        <option value='Mr'>Mr</option>
                                        <option value='Miss'>Miss</option>
                                        <option value='Mrs'>Mrs</option>
                                        <option value='Ms'>Ms</option>
                                        <option value='MX'>Mx</option>
                                    </Field>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>Gender</label>
                                    <Field as="select" name="gender" className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                        <option hidden>Select Title</option>
                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>
                                        <option value='Unknown'>Unknown</option>
                                    </Field>
                                    <ErrorMessage name="gender" component="div" className='text-danger' />
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>First Name</label>
                                    <Field
                                        type='text'
                                        name='firstName'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='First Name'
                                        required
                                    ></Field>
                                    <ErrorMessage name="firstName" component="div" className='text-danger' />
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>Last Name</label>
                                    <Field
                                        type='text'
                                        name='lastName'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='Last Name'
                                    ></Field>
                                    <ErrorMessage name="lastName" component="div" className='text-danger' />
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
                                    <label className='fw-bold fs-6 mb-2'>Birth Date</label>
                                    <Field
                                        type='date'
                                        name='birthday'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder=''
                                    ></Field>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>Goes By</label>
                                    <Field
                                        type='text'
                                        name='goesby'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='Goes By'
                                    ></Field>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>SSN</label>
                                    <Field
                                        type='number'
                                        name='ssn'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='xxxxxxxxx'
                                    ></Field>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>Medicaid Number</label>
                                    <Field
                                        type='text'
                                        name='medicaidNumber'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='Medicaid Number'
                                    ></Field>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>Email</label>
                                    <Field
                                        type='email'
                                        name='email'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='Email'
                                    ></Field>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>Phone Number</label>
                                    <Field
                                        type='number'
                                        name='phoneNumber'
                                        className='form-control form-control-solid mb-3 mb-lg-0'
                                        placeholder='Phone Number'
                                    ></Field>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>Race</label>
                                    <Field as="select" name="race" className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                        <option value=''>Select Race</option>
                                        <option value=''>American Indian/Alaskan Native</option>
                                        <option value=''>Asian</option>
                                        <option value=''>Asian Indian</option>
                                        <option value=''>Black/African American</option>
                                        <option value=''>Chinese</option>
                                        <option value=''>Declined</option>
                                        <option value=''>Filipino</option>
                                        <option value=''>Guamanian or chamorro</option>
                                        <option value=''>Japanese</option>
                                        <option value=''>Korean</option>
                                        <option value=''>Multiracial</option>
                                        <option value=''>Native Hawaiian/Other Pacific Islander</option>
                                        <option value=''>Samoan</option>
                                        <option value=''>Undetermined</option>
                                        <option value=''>Unknown</option>
                                        <option value=''>Vietnamese</option>
                                        <option value=''>White</option>
                                        <option value=''>Other</option>
                                    </Field>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>Ethnicity / Hispanic Origin</label>
                                    <Field as="select" name="ethnicity" className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                        <option value=''>Select Ethnicity / Hispanic Origin</option>
                                        <option value=''>Bengali</option>
                                        <option value=''>Central American</option>
                                        <option value=''>Chakma</option>
                                        <option value=''>Chinese</option>
                                        <option value=''>Cuban</option>
                                        <option value=''>Hispanic</option>
                                        <option value=''>Indian</option>
                                        <option value=''>Magar</option>
                                        <option value=''>Malays</option>
                                        <option value=''>Marma</option>
                                        <option value=''>Mexican</option>
                                        <option value=''>Moor</option>
                                        <option value=''>Newar</option>
                                        <option value=''>Not Hispanic or Latino</option>
                                        <option value=''>Other Spanish Origin</option>
                                        <option value=''>Puerto Rican</option>
                                        <option value=''>Sinhalese</option>
                                        <option value=''>South American</option>
                                        <option value=''>Tamang</option>
                                        <option value=''>Tamil</option>
                                        <option value=''>Tharu</option>
                                        <option value=''>Unable to determine</option>
                                    </Field>
                                </div>
                                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                                    <label className=' fw-bold fs-6 mb-2'>Class Membership</label>
                                    <Field as="select" name="classMembership" className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                        <option value=''>Select Class Membership</option>
                                    </Field>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className='d-flex justify-content-center my-1'>
                                    <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20 mt-3">
                                        Residential Address
                                        <input type="checkbox" name="residentialAddr" className="mx-2"
                                            onChange={() => {
                                                if (showResAddr) {
                                                    setShowMailingAddr(false)
                                                    setShowResAddr(false)
                                                } else {
                                                    setShowResAddr(true)
                                                }
                                            }} />
                                    </label>
                                </div>
                            </div>
                            {showResAddr ?
                                <div className='row'>
                                    <h3 className='mt-5 mb-5 text-primary display-7'>Residential Address</h3>
                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                        <label className=' fw-bold fs-6 mb-2'>Attention or in care of</label>
                                        <Field
                                            type='text'
                                            name='inCareOf'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder='Attention or in care of'
                                        ></Field>
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
                                                // onChange
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
                                                <Field
                                                    type='text'
                                                    name='addrCity'
                                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                                    placeholder='City'
                                                ></Field>
                                            </div>
                                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                                <Field as="select" name="addrState" className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                                    <option value=''>Select State</option>
                                                </Field>
                                            </div>
                                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                                <Field
                                                    type='number'
                                                    name='addrZipCode'
                                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                                    placeholder='Zip Code'
                                                ></Field>
                                            </div>
                                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                                <Field as="select" name="addrCountry" className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                                    <option value=''>Select Country</option>
                                                </Field>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                                        <label className=' fw-bold fs-6 mb-2'>Location</label>
                                        <input
                                            type='location'
                                            name='addrLocation'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder=''
                                        ></input>
                                    </div>

                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                        <label className=' fw-bold fs-6 mb-2'>Primary Phone</label>
                                        <Field
                                            type='number'
                                            name='addrPrimaryPhone'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder=''
                                        ></Field>
                                    </div>

                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                        <label className=' fw-bold fs-6 mb-2'>Secondary Phone</label>
                                        <Field
                                            type='number'
                                            name='addrSecondaryPhone'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder=''
                                        ></Field>
                                    </div>

                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                        <label className=' fw-bold fs-6 mb-2'>Additional Phone</label>
                                        <Field
                                            type='text'
                                            name='addrAdditionalPhone'
                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                            placeholder=''
                                        ></Field>
                                    </div>


                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                        <label className=' fw-bold fs-6 mb-2'>Residential County State</label>
                                        <Field as="select" name="residentialCountyState" className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                            <option value=''>Select Residential County State</option>
                                        </Field>
                                    </div>

                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                        <label className=' fw-bold fs-6 mb-2'>Residential County</label>
                                        <Field as="select" name="residentialCounty" className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                            <option value=''>Select Residential County</option>
                                        </Field>
                                    </div>

                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                        <label className=' fw-bold fs-6 mb-2'>Service County State</label>
                                        <Field as="select" name="serviceCountyState" className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                            <option value=''>Select Service County State</option>
                                        </Field>
                                    </div>

                                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                                        <label className=' fw-bold fs-6 mb-2'>Service County</label>
                                        <Field as="select" name="serviceCounty" className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                            <option value=''>Select Service County</option>
                                        </Field>
                                    </div>

                                    <div className="d-flex">
                                        <div className='w-50'>
                                            <h6>Is Mailing Address the same as Residential?</h6>
                                        </div>
                                        <div className='d-flex'>
                                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20 mt-3">
                                                Yes
                                                <input type="radio" name="mailingAddr" className="mx-2"
                                                    onChange={() => { setShowMailingAddr(false) }} />
                                            </label>
                                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20 mt-3">
                                                No
                                                <input type="radio" name="mailingAddr" className="mx-2"
                                                    onChange={() => { setShowMailingAddr(true) }} />
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                : null
                            }
                        </div>
                        {
                            showMailingAddr ?
                                <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                                    <div className='card-body'>
                                        <div className='row'>
                                            <h3 className='mb-5 text-primary display-7'>Mailing Address</h3>

                                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                                                <label className=' fw-bold fs-6 mb-2'>Attention or in care of</label>
                                                <div className='row'>
                                                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                                        <Field
                                                            type='text'
                                                            name='mailingInCareOf'
                                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                                            placeholder='Attention or in care of'
                                                        ></Field>
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
                                                        <Field as="select" name="mailingState" className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                                            <option value=''>Select State</option>
                                                        </Field>
                                                    </div>
                                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                                        <Field
                                                            type='number'
                                                            name='mailingZipCode'
                                                            className='form-control form-control-solid mb-3 mb-lg-0'
                                                            placeholder='Zip Code'
                                                        ></Field>
                                                    </div>
                                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                                                        <Field as="select" name="mailingCountry" className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                                            <option value=''>Select Country</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                                <label className=' fw-bold fs-6 mb-2'>Primary Phone</label>
                                                <Field
                                                    type='number'
                                                    name='mailingPrimaryPhone'
                                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                                    placeholder=''
                                                ></Field>
                                            </div>


                                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                                <label className=' fw-bold fs-6 mb-2'>Secondary Phone</label>
                                                <Field
                                                    type='number'
                                                    name='mailingSecondaryPhone'
                                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                                    placeholder=''
                                                ></Field>
                                            </div>

                                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                                                <label className=' fw-bold fs-6 mb-2'>Additional Phone</label>
                                                <Field
                                                    type='text'
                                                    name='mailingAdditionalPhone'
                                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                                    placeholder=''
                                                ></Field>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : null
                        }
                    </div>
                    <div className='d-flex flex-stack'>
                        <div>
                            <Link to='/care/individual-intake/list'>
                                <button className='btn btn-primary mt-4 me-4'>Cancel</button>
                            </Link>
                            <Link to='/care/individual-intake/list'>
                                <button className='btn btn-primary mt-4'>Back</button>
                            </Link>
                        </div>
                        <div>
                            <button className='btn btn-primary mt-4  '>Save</button>
                        </div>
                    </div>
                </Form>

            </Formik>
        </div >
    )
}

export default NewIndividual