import { useHistory, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios'
import * as Yup from 'yup'
import { useEffect, useState } from 'react';
import Inddata from '../../individual-mock-data.json'

/**
 * Validator for adding contacts
 */
const registrationSchema = Yup.object().shape({
    individualSelect: Yup.string()
        .required("Selection of Individual is required!"),
    firstName: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required("First Name is required"),
    lastName: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required("Last Name is required"),
    //   agency: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required("Agency is required"),
    relaiontoind: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required("Relaion to individual is required"),
    //   emergencyCont: Yup.string()
    //   .required("Status is required"),
    //   mailingCont: Yup.string()
    //   .required("Birth Date is required"),
    comments: Yup.string()
        //   .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 400 symbols'),
    //   .required("Case Status is required"),
    //   isGuardian: Yup.string()
    //   .required("Entered By is required"),
    //   addrInCareOf: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required("Admitted By is required"),
    //   address: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required("Last Updated By is required"),
    //   zipCode: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required("Individual ID Number is required"),
    //   country: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required("Individual ID Number is required"),
    //   primaryPhone: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required("Individual ID Number is required"),
    //   additionalPhone: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required("Individual ID Number is required"),
    //   faxNumber: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required("Individual ID Number is required"),
    email: Yup.string()
        .email('Wrong email format')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols'),
    //   .required("Individual ID Number is required"),
    //   webAddress: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required("Individual ID Number is required"),
    //   mailingInCareOf: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required("Individual ID Number is required"),
    //   mailingAddr: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required("Individual ID Number is required"),
    //   mailingZipCode: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required("Individual ID Number is required"),
    //   mailingCountry: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required("Individual ID Number is required"),
    //   mailingPriPhone: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required("Individual ID Number is required"),
    //   mailingAddPhone: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required("Individual ID Number is required"),
    //   mailingfaxNumber: Yup.string()
    //   .min(3, 'Minimum 3 symbols')
    //   .max(50, 'Maximum 50 symbols')
    //   .required("Individual ID Number is required"),
})
const ContactNew = () => {
    const [showAddress, setShowAddress] = useState(false)
    const [showMailAddress, setShowMailAddress] = useState(false)
    const [showIsGuardian, setShowIsGuardian] = useState(false)
    const [individualList, setIndividualList] = useState<{individualIDNumber: string; individual: string;}[]>([])

    useEffect(() => {
        setIndividualList(Inddata)
    },[])
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className='card card-flush h-md-100 w-100'>
                    <div className="d-flex justify-content-center w-100">
                        <div className="card-header w-75">
                            <div className="card-title">
                                <h2 className="fw-bolder">Add New Contact</h2>
                            </div>
                            <div className="btn btn-icon btn-sm btn-active-icon-primary mt-6">
                                <Link to={'/care/contact/list'} className="btn btn-light btn-active-primary my-1 me-2" >Individuals</Link>
                            </div>
                        </div>
                    </div>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            individualSelect: '',
                            firstName: '',
                            lastName: '',
                            agency: '',
                            relaiontoind: '',
                            emergencyCont: false,
                            mailingCont: false,
                            comments: '',
                            guardianType: '',
                            guardianAuthority: '',
                            guardianCounty: '',
                            guardianCountyState: '',
                            guardianEstablishDate: '',
                            guardianEstablishEndDate: '',
                            addrInCareOf: '',
                            addrSt1: '',
                            addrSt2: '',
                            addrCity: '',
                            addrState: '',
                            zipCode: '',
                            country: '',
                            primaryPhone: '',
                            secondaryPhone: '',
                            additionalPhone: '',
                            faxNumber: '',
                            email: '',
                            webAddress: '',
                            mailingInCareOf: '',
                            mailingSt1: '',
                            mailingSt2: '',
                            mailingCity: '',
                            mailingState: '',
                            mailingZipCode: '',
                            mailingCountry: '',
                            mailingPriPhone: '',
                            mailingSecPhone: '',
                            mailingAddPhone: '',
                            mailingfaxNumber: '',
                        }}
                        validationSchema={registrationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                console.log(values)
                                // setSubmitting(false)
                                // alert(JSON.stringify(values, null, 2));
                            }, 400);
                        }}
                    >
                        {({ isSubmitting, resetForm }) => (
                            <div className="card-body d-flex justify-content-center py-1">
                                <Form className='form w-75 fv-plugins-bootstrap5 fv-plugins-framework'>
                                    <div className="d-flex">
                                        <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Select Individual</label>
                                        <Field className='w-50 form-control form-control-lg form-control-solid form-select my-4' as="select" name="individualSelect" autoComplete='off'>
                                            <option hidden>Select Individual</option>
                                            {individualList.map((ind, index) => 
                                                <option key={index} value={ind.individualIDNumber}>{ind.individual}</option>
                                            )}
                                        </Field>
                                    </div>
                                    <ErrorMessage name="individualSelect" component="div" className='text-danger' />
                                    <div className="d-flex justify-content-center mt-3">
                                        <div className='mx-1 w-50'>
                                            <div className='d-flex justify-content-center my-1'>
                                                <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">First Name</label>
                                                <Field className='w-75 form-control form-control-lg form-control-solid' type="text" name="firstName" autoComplete='off' placeholder="Enter First Name here" />
                                            </div>
                                            <ErrorMessage name="firstName" component="div" className='text-danger' />
                                        </div>
                                        <div className='mx-1 w-50'>
                                            <div className='d-flex justify-content-center my-1'>
                                                <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Last Name</label>
                                                <Field className='w-75 form-control form-control-lg form-control-solid' type="text" name="lastName" autoComplete='off' placeholder="Enter Last Name here" />
                                            </div>
                                            <ErrorMessage name="lastName" component="div" className='text-danger' />
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <label className="w-100 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20 mt-4">Relationship to the Individual</label>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <Field className='w-50 form-control form-control-lg form-control-solid form-select my-4' as="select" name="relaiontoind" autoComplete='off'>
                                            <option hidden>Select Relation to Individual</option>
                                            <option value="advocate">Advocate</option>
                                            <option value="caretaker">Care Take</option>
                                            <option value="parent">Parent</option>
                                        </Field>
                                        <div className='mx-1 w-50'>
                                            <div className='d-flex justify-content-center my-4'>
                                                <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Agency</label>
                                                <Field className='w-75 form-control form-control-lg form-control-solid' type="text" name="agency" autoComplete='off' />
                                            </div>
                                        </div>
                                    </div>
                                    <ErrorMessage name="relaiontoind" component="div" className='text-danger' />
                                    <div className="d-flex justify-content-center my-4">
                                        <div className='mx-1 w-100'>
                                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20 mt-3">
                                                Is Guardian
                                                <input type="checkbox" className="mx-2"
                                                    onChange={() => {
                                                        if (showIsGuardian) {
                                                            setShowIsGuardian(false)
                                                        } else {
                                                            setShowIsGuardian(true)
                                                        }
                                                    }} />
                                            </label>
                                        </div>
                                    </div>
                                    {showIsGuardian ?
                                        <div>
                                            <div className="d-flex justify-content-center mt-3">
                                                <div className='mx-1 w-50'>
                                                    <div className='d-flex justify-content-center my-1'>
                                                        <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Guardian Type</label>
                                                        <Field className='w-75 form-control form-control-lg form-control-solid form-select ' as="select" name="guardianType" autoComplete='off' placeholder="Select Guardian Type">
                                                            <option>Value 1</option>
                                                            <option>Value 2</option>
                                                            <option>Value 3</option>
                                                            <option>Value 4</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className='mx-1 w-50'>
                                                    <div className='d-flex justify-content-center my-1'>
                                                        <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Guardian Authority</label>
                                                        <Field className='w-75 form-control form-control-lg form-control-solid form-select ' as="select" name="guardianAuthority" autoComplete='off' placeholder="Select Guardian Authority">
                                                            <option>Value 1</option>
                                                            <option>Value 2</option>
                                                            <option>Value 3</option>
                                                            <option>Value 4</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mt-3">
                                                <div className='mx-1 w-50'>
                                                    <div className='d-flex justify-content-center my-1'>
                                                        <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Guardian County</label>
                                                        <Field className='w-75 form-control form-control-lg form-control-solid form-select ' as="select" name="guardianCounty" autoComplete='off' placeholder="Select Guardian County">
                                                            <option>Value 1</option>
                                                            <option>Value 2</option>
                                                            <option>Value 3</option>
                                                            <option>Value 4</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className='mx-1 w-50'>
                                                    <div className='d-flex justify-content-center my-1'>
                                                        <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Guardian County State</label>
                                                        <Field className='w-75 form-control form-control-lg form-control-solid form-select ' as="select" name="guardianCountyState" autoComplete='off' placeholder="Select Guardian County State">
                                                            <option>Value 1</option>
                                                            <option>Value 2</option>
                                                            <option>Value 3</option>
                                                            <option>Value 4</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mt-3">
                                                <div className='mx-1 w-50'>
                                                    <div className='d-flex justify-content-center my-1'>
                                                        <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Guardian Establish Date</label>
                                                        <Field className='w-75 form-control form-control-lg form-control-solid' type="date" name="guardianEstablishDate" autoComplete='off' placeholder="Select Establish Date" />
                                                    </div>
                                                </div>
                                                <div className='mx-1 w-50'>
                                                    <div className='d-flex justify-content-center my-1'>
                                                        <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Guardian Establish End Date</label>
                                                        <Field className='w-75 form-control form-control-lg form-control-solid' type="date" name="guardianEstablishEndDate" autoComplete='off' placeholder="Select Establish End Date" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        : null}
                                    <div>
                                        <label className="w-100 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Comments</label>
                                        <Field className="form-control form-control-lg form-control-solid" as="textarea" rows="6" name="comments" placeholder="comments here" />
                                    </div>
                                    <ErrorMessage name="comments" component="div" className="text-danger" />
                                    <div className="d-flex mt-4">
                                        <h6>Add Address?</h6>
                                        <input type="checkbox" className='mx-5' onChange={() => {
                                            if (showAddress === false) {
                                                setShowMailAddress(false)
                                                setShowAddress(true)
                                            } else {
                                                setShowAddress(false)
                                            }
                                        }} />
                                    </div>
                                    {
                                        showAddress ?
                                            <div>
                                                <div className="d-flex justify-content-center mt-1">
                                                    <div className='mx-1 w-50'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Street 1</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="text" autoComplete='off' placeholder="Enter Street 1 here..." name="addrSt1" />
                                                        </div>
                                                    </div>
                                                    <div className='mx-1 w-50'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Street 2</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="text" autoComplete='off' placeholder="Enter Street 2 here... " name="addrSt2" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-1">
                                                    <div className='mx-1 w-50'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">City</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' autoComplete='off' placeholder="Select City here..." name="addrCity" />
                                                        </div>
                                                    </div>
                                                    <div className='mx-1 w-50'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">State</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' autoComplete='off' placeholder="Enter State here..." name="addrState" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-1">
                                                    <div className='mx-1 w-50'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Zip Code</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="number" name="zipCode" autoComplete='off' placeholder="Enter Zip Code here..." />
                                                        </div>
                                                    </div>
                                                    <div className='mx-1 w-50'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Country</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="text" autoComplete='off' placeholder="Enter Country here..." name="country" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-1">
                                                    <div className='mx-1 w-100'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Primary Phone</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="number" name="primaryPhone" autoComplete='off' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-1">
                                                    <div className='mx-1 w-100'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Secondary Phone</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="number" name="secondaryPhone" autoComplete='off' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-1">
                                                    <div className='mx-1 w-100'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Additional Phone</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="number" name="additionalPhone" autoComplete='off' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-1">
                                                    <div className='mx-1 w-100'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Fax Number</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="number" name="faxNumber" autoComplete='off' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-1">
                                                    <div className='mx-1 w-50'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Email</label>
                                                            <Field className='form-control form-control-lg form-control-solid' type="email" name="email" autoComplete='off' />
                                                        </div>
                                                    </div>
                                                    <div className='mx-1 w-50'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-75 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Web Address</label>
                                                            <Field className='form-control form-control-lg form-control-solid' type="text" autoComplete='off' name="webAddress" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-4">
                                                    <div className='w-50'>
                                                        <h6>Is Mailing Address the same as Residential?</h6>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20 mt-3">
                                                            Yes
                                                            <input type="radio" name="mailingAddr" className="mx-2"
                                                                onChange={() => { setShowMailAddress(false) }} />
                                                        </label>
                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20 mt-3">
                                                            No
                                                            <input type="radio" name="mailingAddr" className="mx-2"
                                                                onChange={() => { setShowMailAddress(true) }} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            : null
                                    }

                                    {
                                        showMailAddress ?
                                            <div>
                                                <div className="d-flex justify-content-center mt-1">
                                                    <div className='mx-1 w-50'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Street 1</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="text" autoComplete='off' placeholder="Enter Street 1 here..." name="mailingSt1" />
                                                        </div>
                                                    </div>
                                                    <div className='mx-1 w-50'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Street 2</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="text" autoComplete='off' placeholder="Enter Street 2 here..." name="mailingSt2" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-1">
                                                    <div className='mx-1 w-50'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">City</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' autoComplete='off' placeholder="Select City here..." name="mailingCity" />
                                                        </div>
                                                    </div>
                                                    <div className='mx-1 w-50'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">State</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' autoComplete='off' placeholder="Enter State here..." name="mailingState" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-1">
                                                    <div className='mx-1 w-50'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Zip Code</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="number" name="mailingZipCode" autoComplete='off' placeholder="Enter Zip Code here..." />
                                                        </div>
                                                    </div>
                                                    <div className='mx-1 w-50'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Country</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="text" name="mailingCountry" autoComplete='off' placeholder="Enter Country here..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-1">
                                                    <div className='mx-1 w-100'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Primary Phone</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="number" name="mailingPriPhone" autoComplete='off' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-1">
                                                    <div className='mx-1 w-100'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Secondary Phone</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="number" name="mailingSecPhone" autoComplete='off' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-1">
                                                    <div className='mx-1 w-100'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Additional Phone</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="number" name="mailingAddPhone" autoComplete='off' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-1">
                                                    <div className='mx-1 w-100'>
                                                        <div className='d-flex justify-content-center my-1'>
                                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Fax Number</label>
                                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="number" name="mailingfaxNumber" autoComplete='off' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            : null
                                    }
                                    <div className="d-flex justify-content-center mt-2">
                                        <button type="submit" className='btn btn-primary btn-active-secondary mx-2'>Add Contact</button>
                                        <button type="reset" className="btn btn-primary btn-active-secondary" onClick={() => resetForm()}>Reset</button>
                                    </div>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default ContactNew