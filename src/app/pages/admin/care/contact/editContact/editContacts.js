import { Link, useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
  relaiontoind: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required("Relaion to individual is required"),
  comments: Yup.string()
    .max(50, 'Maximum 400 symbols'),
  email: Yup.string()
    .email('Wrong email format'),
})

const EditContacts = ({ location }) => {
  const [showAddress, setShowAddress] = useState(undefined)
  const [showMailAddress, setShowMailAddress] = useState(undefined)
  const [showIsGuardian, setShowIsGuardian] = useState(undefined)
  const [individualList, setIndividualList] = useState([])
  const [contactData, setContactData] = useState({})

  const history = useHistory()
  useEffect(() => {
    if (location.state === undefined) {
      history.push('/care/contact/list')
    } else {
      if(location.state.isGuardian === true){
        setShowIsGuardian(true)
      }
      if(location.state.isAddress === true){
        setShowAddress(true)
      }
      if(location.state.isMailingAddress === true){
        setShowMailAddress(true)
      }
      setContactData(location.state)
      setIndividualList(Inddata)
    }
  }, [])

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className='card card-flush h-md-100 w-100'>
          <div className="d-flex justify-content-center w-100">
            <div className="card-header w-75">
              <div className="card-title">
                <h2 className="fw-bolder">Edit Contact Of: {contactData.name}</h2>
              </div>
            </div>
          </div>
          <Formik
            enableReinitialize
            initialValues={{
              individualSelect: contactData.individualSelect || '',
              firstName: contactData.firstName || '',
              lastName: contactData.lastName || '',
              agency: contactData.agency || '',
              relaiontoind: contactData.relaiontoind || '',
              emergencyCont: contactData.emergencyCont || '',
              mailingCont: contactData.mailingCont || '',
              comments: contactData.comments || '',
              guardianType: contactData.guardianType || '',
              guardianAuthority: contactData.guardianAuthority || '',
              guardianCounty: contactData.guardianCounty || '',
              guardianCountyState: contactData.guardianCountyState || '',
              guardianEstablishDate: contactData.guardianEstablishDate || '',
              guardianEstablishEndDate: contactData.guardianEstablishEndDate || '',
              addrInCareOf: contactData.addrInCareOf || '',
              addrSt1: contactData.addrSt1 || '',
              addrSt2: contactData.addrSt2 || '',
              addrCity: contactData.addrCity || '',
              addrState: contactData.addrState || '',
              zipCode: contactData.zipCode || '',
              country: contactData.country || '',
              primaryPhone: contactData.primaryPhone || '',
              secondaryPhone: contactData.secondaryPhone || '',
              additionalPhone: contactData.additionalPhone || '',
              faxNumber: contactData.faxNumber || '',
              email: contactData.email || '',
              webAddress: contactData.webAddress || '',
              mailingInCareOf: contactData.mailingInCareOf || '',
              mailingSt1: contactData.mailingSt1 || '',
              mailingSt2: contactData.mailingSt2 || '',
              mailingCity: contactData.mailingCity || '',
              mailingState: contactData.mailingState || '',
              mailingZipCode: contactData.mailingZipCode || '',
              mailingCountry: contactData.mailingCountry || '',
              mailingPriPhone: contactData.mailingPriPhone || '',
              mailingSecPhone: contactData.mailingSecPhone || '',
              mailingAddPhone: contactData.mailingAddPhone || '',
              mailingfaxNumber: contactData.mailingfaxNumber || '',
            }}
            validationSchema={registrationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(values)
              }, 400);
            }}
          >
            {({ isSubmitting, resetForm }) => (
              <div className="card-body d-flex justify-content-center py-1">
                <Form className='form w-75 fv-plugins-bootstrap5 fv-plugins-framework'>
                  <div className="d-flex">
                    <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Select Individual</label>
                    <Field className='w-50 form-control form-control-lg form-control-solid form-select my-4' as="select" name="individualSelect" autoComplete='off'>
                      {individualList.map((ind, index) =>
                        <option key={index} value={ind.individual}>{ind.individual}</option>
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
                      {/* <option hidden selected>{contactData.relaiontoind}</option> */}
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
                        <input type="checkbox" className="mx-2" defaultChecked={showIsGuardian}
                          onChange={() => setShowIsGuardian(checked => !checked)} />
                      </label>
                    </div>
                  </div>
                  {showIsGuardian ?
                    <div>
                      <div className="d-flex justify-content-center mt-3">
                        <div className='mx-1 w-50'>
                          <div className='d-flex justify-content-center my-1'>
                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Guardian Type</label>
                            <Field className='w-75 form-control form-control-lg form-control-solid form-select ' as="select" name="guardianType" autoComplete='off' >
                              {/* <option selected hidden>{contactData.guardianType}</option> */}
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
                            <Field className='w-75 form-control form-control-lg form-control-solid form-select ' as="select" name="guardianAuthority" autoComplete='off'>
                              {/* <option selected hidden>{contactData.guardianAuthority}</option> */}
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
                            <Field className='w-75 form-control form-control-lg form-control-solid form-select ' as="select" name="guardianCounty" autoComplete='off' >
                              {/* <option selected hidden>{contactData.guardianCounty}</option> */}
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
                            <Field className='w-75 form-control form-control-lg form-control-solid form-select ' as="select" name="guardianCountyState" autoComplete='off' >
                              {/* <option selected hidden>{contactData.guardianCountyState}</option> */}
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
                    <input type="checkbox" className='mx-5' defaultChecked={showAddress} onChange={() => {
                      if (showAddress === false) {
                        setShowMailAddress(false)
                      }
                      setShowAddress(checked => !checked)
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
                              <input type="radio" name="mailingAddr" className="mx-2" defaultChecked={showMailAddress}
                                onChange={() => { setShowMailAddress(false) }} />
                            </label>
                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20 mt-3">
                              No
                              <input type="radio" name="mailingAddr" className="mx-2" defaultChecked={showMailAddress}
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
                    <button type="submit" className='btn btn-primary btn-active-secondary mx-2'>Save Contact</button>
                    <Link to='/care/contact/listing/' className="btn btn-primary btn-active-secondary" >Back</Link>
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

export default EditContacts