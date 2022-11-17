import { useState, useEffect, Fragment } from 'react'
import * as Yup from 'yup'
import data from "../../program-mock-data.json"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import ProgramRow from './ProgramRow'
/**
 * Validator for adding contacts
 */
const registrationSchema = Yup.object().shape({
    programName: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required("Program Name is required"),
    siteName: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required("Site Name is required"),
    programType: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required("Program Type is required"),
    programCostCenterNumber: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required("Program Cost Center Number is required"),
    status: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required("Status is required"),
    timeZone: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required("Time Zone is required"),
    createDate: Yup.string()
        .required("Create Date is required"),
})

const ListPrograms = () => {
    const [deleteProgramId, setDeleteProgramId] = useState('')
    const [programs, setPrograms] = useState<{
        _id: string; programName: string; siteName: string;
        programType: string; programCostCenterNumber: string; status: string; createDate: string;
        timeZone: string; formID: string;
    }[]>(data)
    const [editProgramData, setEditProgramData] = useState({
        _id: '',
        programName: '',
        siteName: '',
        programType: '',
        programCostCenterNumber: '',
        status: '',
        createDate: '',
        timeZone: '',
        formID: '',
    })

    useEffect(() => {
        //get data
    })

    const onDeleteProgram = () => {
        // let tempObj = {
        //     deleteID: deleteProgramId
        // }
        // axios.delete('contacts/deleteContact', {
        //     data: tempObj
        // })
        // .then(() => {
        setPrograms((prevState) =>
            prevState.filter((program) => program._id !== deleteProgramId)
        );
        // }).catch(err => {
        //     console.log((err))
        // })
    }

    return (
        <div>
            <div className='card mb-5 col-mb-10' id='kt_content'>
                <div className='post d-flex flex-column-fluid' id='kt_post'>
                    <div id='kt_content_container' className='container-xxl'>
                        <div className='card'>
                            <h2 className='mt-6 mb-0'>Program Search</h2>
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
                                            placeholder='Search Program'
                                        />
                                    </div>
                                </div>

                                {/* <div>
                                    <Link to={''} className='btn btn-primary btn-active-secondary'>+ Add Program</Link>
                                </div> */}
                            </div>
                            <div className='card-body table-responsive pt-0'>
                                <table
                                    className='table align-middle table-row-dashed fs-6 gy-5'
                                    id='kt_program_table'
                                >
                                    <thead>
                                        <tr className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                                            <th className="min-w-200px">Form ID</th>
                                            <th className="min-w-200px">Program Name</th>
                                            <th className="min-w-200px">Site Name</th>
                                            <th className="min-w-100px">Status</th>
                                            <th className="min-w-80px">Create Date</th>
                                            <th className="min-w-80px">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {programs.map((program, index) => (
                                            <Fragment key={index}>
                                                <ProgramRow program={program} setEditProgramData={setEditProgramData} setDeleteProgramId={setDeleteProgramId} />
                                            </Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*MODAL FOR DELETING PROGRAM*/}
            <div className='modal fade' id="kt_modal_delete_program" tabIndex={-1} aria-hidden="true">
                {/*begin::Modal dialog*/}
                <div className="modal-dialog modal-dialog-centered mw-500px mh-100px">
                    {/*begin::Modal content*/}
                    <div className="modal-content">
                        {/*begin::Modal header*/}
                        <div className="modal-header d-flex justify-content-center">
                            {/*begin::Modal title*/}
                            <h2 className="fw-bolder">ARE YOU SURE YOU WANT TO DELETE THIS PROGRAM?</h2>
                            {/*end::Modal title*/}
                        </div>
                        {/*end::Modal header*/}
                        {/*begin::Modal body*/}
                        <div className='modal-body scroll-y mx-lg-5 my-7'>
                            <div className='d-flex justify-content-center'>
                                <button className='btn btn-light me-3'
                                    data-bs-dismiss="modal" aria-label="Close" onClick={onDeleteProgram}>Confirm
                                </button>
                                <button className='btn btn-light me-3' data-bs-dismiss="modal"
                                    aria-label="Close">Discard
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*MODAL FOR EDITING PROGRAM*/}
            <div className='modal fade' id="kt_modal_edit_program" tabIndex={-1} aria-hidden="true">
                {/*begin::Modal dialog*/}
                <div className="modal-dialog modal-dialog-centered mw-900px">
                    {/*begin::Modal content*/}
                    <div className="modal-content">
                        {/*begin::Modal header*/}
                        <div className="modal-header d-flex justify-content-between">
                            {/*begin::Modal title*/}
                            <h2 className="fw-bolder">Edit Program</h2>
                            {/*end::Modal title*/}
                            {/*begin::Close*/}
                            <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-program-modal-action="close"
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
                                _id: editProgramData._id,
                                programName: editProgramData.programName,
                                siteName: editProgramData.siteName,
                                programType: editProgramData.programType,
                                programCostCenterNumber: editProgramData.programCostCenterNumber,
                                status: editProgramData.status,
                                createDate: editProgramData.createDate,
                                timeZone: editProgramData.timeZone,
                                formID: editProgramData.formID,
                            }}
                            validationSchema={registrationSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    let idKey = "_id"
                                    setPrograms((prevState) =>
                                        prevState.map((program) => program[idKey as keyof Object] === values[idKey as keyof Object] ? values : program)
                                    )
                                    setSubmitting(false)
                                }, 400);
                            }}
                        >
                            {({ isSubmitting, resetForm }) => (
                                <div className="card-body d-flex justify-content-center pt-1">
                                    <Form className='form w-75 fv-plugins-bootstrap5 fv-plugins-framework'>
                                        <div className='d-flex justify-content-center my-2'>
                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Form ID</label>
                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="text" name="formID" autoComplete='off' disabled={true} />
                                        </div>
                                        <div className='d-flex justify-content-center my-1'>
                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Program Name</label>
                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="text" name="programName" autoComplete='off' />
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <ErrorMessage name="programName" component="div" className='text-danger' />
                                        </div>
                                        <div className='d-flex justify-content-center my-1'>
                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Site Name</label>
                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="text" name="siteName" autoComplete='off' />
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <ErrorMessage name="siteName" component="div" className='text-danger' />
                                        </div>
                                        <div className='d-flex justify-content-center my-1'>
                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Program Type</label>
                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="text" name="programType" autoComplete='off' />
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <ErrorMessage name="programType" component="div" className='text-danger' />
                                        </div>
                                        <div className='d-flex justify-content-center my-1'>
                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Program Cost Center Number</label>
                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="number" name="programCostCenterNumber" autoComplete='off' />
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <ErrorMessage name="programCostCenterNumber" component="div" className='text-danger' />
                                        </div>
                                        <div className='d-flex justify-content-center my-1'>
                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Status</label>
                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="text" name="status" autoComplete='off' />
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <ErrorMessage name="status" component="div" className='text-danger' />
                                        </div>
                                        <div className='d-flex justify-content-center my-1'>
                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Create Date</label>
                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="date" name="createDate" autoComplete='off' />
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <ErrorMessage name="createDate" component="div" className='text-danger' />
                                        </div>
                                        <div className='d-flex justify-content-center my-1'>
                                            <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Time Zone</label>
                                            <Field className='w-75 form-control form-control-lg form-control-solid' type="text" name="timeZone" autoComplete='off' />
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <ErrorMessage name="timeZone" component="div" className='text-danger' />
                                        </div>
                                        <div className="d-flex justify-content-center my-4 pb-5">
                                            <button type="submit" className='btn btn-primary btn-active-secondary mx-2' disabled={isSubmitting}
                                                data-bs-dismiss="modal"
                                                aria-label="Close">Update Program</button>
                                            <button type="reset" className="btn btn-primary btn-active-secondary" onClick={() => resetForm()}>Reset</button>
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

export default ListPrograms;