import { useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';

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

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const NewProgram = () => {
    const history = useHistory()
    return (
        <div className="d-flex justify-content-center">
            <div className='card card-flush h-md-100 w-100'>
                <div className="d-flex justify-content-center w-100">
                    <div className="card-header w-75">
                        <div className="card-title">
                            <h2 className="fw-bolder">Add New Program</h2>
                        </div>
                        <div className="btn btn-icon btn-sm btn-active-icon-primary mt-6">
                            <Link to={'/care/enrollment/by-program'} className="btn btn-light btn-active-primary my-1 me-2" >Back</Link>
                        </div>
                    </div>
                </div>
                <Formik
                    enableReinitialize
                    initialValues={{
                        programName: '',
                        siteName: '',
                        programType: '',
                        programCostCenterNumber: '',
                        status: '',
                        createDate: '',
                        timeZone: '',
                        formID: '',
                    }}
                    validationSchema={registrationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            let idKey = "_id"
                            let tempObj = values
                            tempObj.formID = "PROGRAM-"+ makeid(10)
                            alert(JSON.stringify(tempObj))
                            history.push('/care/enrollment/by-program')
                        }, 300);
                    }}
                >{({ isSubmitting, resetForm }) => (
                    <div className="card-body d-flex justify-content-center pt-1">
                        <Form className='form w-75 fv-plugins-bootstrap5 fv-plugins-framework'>
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
                            <div className="d-flex justify-content-center mt-2">
                                <button type="submit" className='btn btn-primary btn-active-secondary mx-2' disabled={isSubmitting}>Add Contact</button>
                                <button type="reset" className="btn btn-primary btn-active-secondary" onClick={() => resetForm()}>Reset</button>
                            </div>
                        </Form>
                    </div>
                )}

                </Formik>
            </div>
        </div>
    )
}

export default NewProgram