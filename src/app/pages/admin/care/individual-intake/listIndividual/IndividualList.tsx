import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import IndividualRow from './IndividualRow'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import data from '../../individual-mock-data.json'

/**
 * Validator for adding individual
 */
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

const IndividualList = () => {
    const [deleteIndividualId, setDeleteIndividualId] = useState('')
    const [showResAddr, setShowResAddr] = useState<boolean>(false)
    const [showMailingAddr, setShowMailingAddr] = useState<boolean>(false)
    const [sameAsPrimary, setSameAsPrimary] = useState(false)
    const [individuals, setIndividuals] = useState<{
        _id: string; individual: string; socialSecurityNumber: string;
        medicaidNumber: string; email: string; status: string; birthday: string;
        goesby: string; ssn: string; phoneNumber: string; race: string;
        ethnicity: string; classMemebership: string; inCareOf: string;
        addrAddress: string; addrCity: string; addrState: string;
        addrZipCode: string; addrCountry: string; addrLocation: string;
        addrPrimaryPhone: string; addrSecondaryPhone: string; addrAdditionalPhone: string;
        residentialCountyState: string; residentialCounty: string; serviceCountyState: string;
        serviceCounty: string; mailingInCareOf: string; mailingaddress: string;
        mailingCity: string; mailingState: string; mailingCountry: string;
        mailingZipCode: string; mailingPrimaryPhone: string; mailingSecondaryPhone: string;
        mailingAdditionalPhone: string; medicareNumber: string; birthDate: string;
        caseStatus: string; enteredBy: string; admittedBy: string; lastUpdatedBy: string;
        admissionDate: string; individualIDNumber: string; formID: string; residentialAddr: boolean;
        mailingAddr: boolean; title: string; firstName: string; lastName: string; gender: string
    }[]>(data)
    const [editIndividualData, setEditIndividualData] = useState({
        _id: '',
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
        mailingAdditionalPhone: '',
        residentialAddr: false,
        mailingAddr: false
    })

    useEffect(() => {
        // axios.get('/contacts/getContacts')
        //     .then((res) => {
        //         setContacts(res.data)
        //     })
        // return setIndividuals(data)
    }, [])

    useEffect(() => {
        setShowResAddr(editIndividualData.residentialAddr)
        setShowMailingAddr(editIndividualData.mailingAddr)
    }, [editIndividualData])

    const onDeleteIndividual = () => {
        console.log(deleteIndividualId)
        // let tempObj = {
        //     deleteID: deleteContactId
        // }
        // axios.delete('contacts/deleteContact', {
        //     data: tempObj
        // })
        // .then(() => {
        setIndividuals((prevState) =>
            prevState.filter((ind) => ind._id !== deleteIndividualId)
        );
        // }).catch(err => {
        //     console.log((err))
        // })
    }

    const changeResidential = () => {

        // if(showResAddr === undefined){
        //     setShowResAddr(editIndividualData.residentialAddr)
        // }
        setShowResAddr(checked => !checked)
    }
    console.log(showResAddr)
    return (
        <div>
            <div className='card mb-5 col-mb-10' id='kt_content'>
                <div className='post d-flex flex-column-fluid' id='kt_post'>
                    <div id='kt_content_container' className='container-xxl'>
                        <div className='card'>
                            <h2 className='mt-6 mb-0'>Individual Search</h2>
                            <div className='card-header border-0 pt-6'>
                                <div className='card-title'>
                                    <div className='d-flex align-items-center position-relative overflow-auto my-1'>
                                        <span className='svg-icon svg-icon-1 position-absolute ms-6'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width={24}
                                                height={24}
                                                viewBox='0 0 24 24'
                                                fill='none'
                                            >
                                                <rect
                                                    opacity='0.5'
                                                    x='17.0365'
                                                    y='15.1223'
                                                    width='8.15546'
                                                    height={2}
                                                    rx={1}
                                                    transform='rotate(45 17.0365 15.1223)'
                                                    fill='black'
                                                />
                                                <path
                                                    d='M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z'
                                                    fill='black'
                                                />
                                            </svg>
                                        </span>
                                        <input
                                            type='text'
                                            data-kt-customer-table-filter='search'
                                            className='form-control form-control-solid w-250px ps-15'
                                            placeholder='Search Individual'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='card-body table-responsive pt-0'>
                                <table
                                    className='table align-middle table-row-dashed fs-6 gy-5'
                                    id='kt_individual_table'
                                >
                                    <thead>
                                        <tr className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                                            <th className="min-w-100px">Form ID</th>
                                            <th className="min-w-200px">Individual</th>
                                            <th className="min-w-200px">Social Security Number</th>
                                            <th className="min-w-200px">Status</th>
                                            <th className='min-w-100px'>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {individuals.map((individual, index) => (
                                            <Fragment key={index}>
                                                <IndividualRow individual={individual} setShowResAddr={setShowResAddr} setShowMailingAddr={setShowMailingAddr} setEditIndividualData={setEditIndividualData} setDeleteIndividualId={setDeleteIndividualId} />
                                            </Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL FOR DELETING INDIVIDUAL */}
            <div className='modal fade' id="kt_modal_delete_individual" tabIndex={-1} aria-hidden="true">
                {/*begin::Modal dialog*/}
                <div className="modal-dialog modal-dialog-centered mw-500px mh-100px">
                    {/*begin::Modal content*/}
                    <div className="modal-content">
                        {/*begin::Modal header*/}
                        <div className="modal-header d-flex justify-content-center">
                            {/*begin::Modal title*/}
                            <h2 className="fw-bolder">ARE YOU SURE YOU WANT TO DELETE THIS INDIVIDUAL?</h2>
                            {/*end::Modal title*/}
                        </div>
                        {/*end::Modal header*/}
                        {/*begin::Modal body*/}
                        <div className='modal-body scroll-y mx-lg-5 my-7'>
                            <div className='d-flex justify-content-center'>
                                <button className='btn btn-light me-3'
                                    data-bs-dismiss="modal" aria-label="Close" onClick={onDeleteIndividual}>Confirm
                                </button>
                                <button className='btn btn-light me-3' data-bs-dismiss="modal"
                                    aria-label="Close">Discard
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*MODAL FOR EDITING INDIVIDUAL*/}
            <div className='modal fade' id="kt_modal_edit_individual" tabIndex={-1} aria-hidden="true">
                {/*begin::Modal dialog*/}
                <div className="modal-dialog modal-dialog-centered mw-900px">
                    {/*begin::Modal content*/}
                    <div className="modal-content">
                        {/*begin::Modal header*/}
                        <div className="modal-header d-flex justify-content-between">
                            {/*begin::Modal title*/}
                            <h2 className="fw-bolder">Edit Individual</h2>
                            {/*end::Modal title*/}
                            {/*begin::Close*/}
                            <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-individual-modal-action="close"
                                data-bs-dismiss="modal"
                                aria-label="Close">
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                <span className="svg-icon svg-icon-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="black" />
                                        <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="black" />
                                    </svg>
                                </span>
                                {/*end::Svg Icon*/}
                            </div>
                            {/*end::Close*/}
                        </div>
                        {/*end::Modal header*/}
                        <Formik
                            enableReinitialize
                            initialValues={{
                                _id: editIndividualData._id,
                                title: editIndividualData.title,
                                gender: editIndividualData.gender,
                                firstName: editIndividualData.firstName,
                                lastName: editIndividualData.lastName,
                                birthday: editIndividualData.birthday,
                                goesby: editIndividualData.goesby,
                                ssn: editIndividualData.ssn,
                                medicaidNumber: editIndividualData.medicaidNumber,
                                email: editIndividualData.email,
                                phoneNumber: editIndividualData.phoneNumber,
                                race: editIndividualData.race,
                                ethnicity: editIndividualData.ethnicity,
                                classMemebership: editIndividualData.classMemebership,
                                inCareOf: editIndividualData.inCareOf,
                                addrAddress: editIndividualData.addrAddress,
                                addrCity: editIndividualData.addrCity,
                                addrState: editIndividualData.addrState,
                                addrZipCode: editIndividualData.addrZipCode,
                                addrCountry: editIndividualData.addrCountry,
                                addrLocation: editIndividualData.addrLocation,
                                addrPrimaryPhone: editIndividualData.addrPrimaryPhone,
                                addrSecondaryPhone: editIndividualData.addrSecondaryPhone,
                                addrAdditionalPhone: editIndividualData.addrAdditionalPhone,
                                residentialCountyState: editIndividualData.residentialCountyState,
                                residentialCounty: editIndividualData.residentialCounty,
                                serviceCountyState: editIndividualData.serviceCountyState,
                                serviceCounty: editIndividualData.serviceCounty,
                                mailingInCareOf: editIndividualData.mailingInCareOf,
                                mailingaddress: editIndividualData.mailingaddress,
                                mailingCity: editIndividualData.mailingCity,
                                mailingState: editIndividualData.mailingState,
                                mailingCountry: editIndividualData.mailingCountry,
                                mailingZipCode: editIndividualData.mailingZipCode,
                                mailingPrimaryPhone: editIndividualData.mailingPrimaryPhone,
                                mailingSecondaryPhone: editIndividualData.mailingSecondaryPhone,
                                mailingAdditionalPhone: editIndividualData.mailingAdditionalPhone,
                            }}
                            validationSchema={registrationSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                console.log(values)
                                // setTimeout(() => {
                                // axios.put("contacts/updateContact", values)
                                //     .then(() => {
                                //         let idKey = "_id"
                                // setIndividuals((prevState) =>
                                //     prevState.map((ind) => ind[idKey as keyof Object] === values[idKey as keyof Object] ? values : ind)
                                // )
                                // setSubmitting(false);
                                // }).catch((err) => {
                                //     console.log(err)
                                //     throw new Error(err);
                                // })
                                // }, 400);
                            }}
                        >
                            {({ isSubmitting, resetForm, values }) => (
                                <div className="card-body d-flex justify-content-center pt-1  scroll-y" data-kt-scroll="true"
                                    data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto"
                                    data-kt-scroll-dependencies="#kt_modal_update_individual_header"
                                    data-kt-scroll-wrappers="#kt_modal_update_individual_scroll" data-kt-scroll-offset="120px">
                                    <Form>
                                        <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                                            <div className='card-body'>
                                                <h1 className='mb-5'>Individual Demographic Form (IDF) (Edit)</h1>
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
                                                        <Field as="select" name="race" className='form-select form-select-lg mb-3'
                                                            aria-label='.form-select-lg example'>
                                                            <option value=''>Select Race</option>
                                                            <option value=''>American Indian/Alaskan Native</option>+
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
                                                            <input type="checkbox" className="mx-2" checked={showResAddr}
                                                                onChange={() => {
                                                                    setShowResAddr(checked => !checked)
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

                                                        <div className='d-flex my-1'>
                                                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20 mt-3">
                                                                Is Mailing Address same as Residential Address
                                                                <input type="checkbox" className="mx-2" checked={showMailingAddr}
                                                                    onChange={() => {
                                                                        setShowMailingAddr(checked => !checked)
                                                                    }} />
                                                            </label>
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
                                                    : null
                                                }
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-center'>
                                            <div>
                                                <button className='btn btn-primary mt-4 me-4'>Cancel</button>
                                            </div>
                                            <div>
                                                <button className='btn btn-primary mt-4  '>Save</button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualList