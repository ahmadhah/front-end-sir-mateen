import { useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';

/**
 * Validator for adding contacts
 */
const registrationSchema = Yup.object().shape({
  individual: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required("Individual is required"),
  socialSecurityNumber: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required("Social Security Number is required"),
  medicaidNumber: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required("Medicaid Number is required"),
  medicareNumber: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required("Medicare Number is required"),
  status: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required("Status is required"),
  birthDate: Yup.string()
    .required("Birth Date is required"),
  caseStatus: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required("Case Status is required"),
  enteredBy: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required("Entered By is required"),
  admittedBy: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required("Admitted By is required"),
  lastUpdatedBy: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required("Last Updated By is required"),
  admissionDate: Yup.string()
    .required("Admission Date is required"),
  individualIDNumber: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required("Individual ID Number is required"),
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

const NewContact = () => {
  const history = useHistory()
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
                <Link to={'/care/contact/list'} className="btn btn-light btn-active-primary my-1 me-2" >Back</Link>
              </div>
            </div>
          </div>
          <Formik
            initialValues={{
              individual: '',
              socialSecurityNumber: '',
              medicaidNumber: '',
              medicareNumber: '',
              status: '',
              birthDate: '',
              caseStatus: '',
              enteredBy: '',
              admittedBy: '',
              lastUpdatedBy: '',
              admissionDate: '',
              individualIDNumber: '',
            }}
            validationSchema={registrationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                let tempObj = values
                tempObj["formID"] = "CONTACT"+makeid(10)
                axios.post("contacts/addContact", tempObj)
                .then(() =>{
                  history.push('/care/contact/list')
                  setSubmitting(false);
                })
              }, 400);
            }}
          >
            {({ isSubmitting, resetForm }) => (
              <div className="card-body d-flex justify-content-center pt-1">
                <Form className='form w-75 fv-plugins-bootstrap5 fv-plugins-framework'>
                  <div className='d-flex justify-content-center my-1'>
                    <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Individual</label>
                    <Field className='w-75 form-control form-control-lg form-control-solid' type="text" name="individual" autoComplete='off' />
                  </div>
                  <div className='d-flex justify-content-end'>
                    <ErrorMessage name="individual" component="div" className='text-danger' />
                  </div>
                  <div className='d-flex justify-content-center my-1'>
                    <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Social Security Number</label>
                    <Field className='w-75 form-control form-control-lg form-control-solid' type="number" name="socialSecurityNumber" autoComplete='off' />
                  </div>
                  <div className='d-flex justify-content-end'>
                    <ErrorMessage name="socialSecurityNumber" component="div" className='text-danger' />
                  </div>
                  <div className='d-flex justify-content-center my-1'>
                    <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Medicaid Number</label>
                    <Field className='w-75 form-control form-control-lg form-control-solid' type="number" name="medicaidNumber" autoComplete='off' />
                  </div>
                  <div className='d-flex justify-content-end'>
                    <ErrorMessage name="medicaidNumber" component="div" className='text-danger' />
                  </div>
                  <div className='d-flex justify-content-center my-1'>
                    <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Medicare Number</label>
                    <Field className='w-75 form-control form-control-lg form-control-solid' type="number" name="medicareNumber" autoComplete='off' />
                  </div>
                  <div className='d-flex justify-content-end'>
                    <ErrorMessage name="medicareNumber" component="div" className='text-danger' />
                  </div>
                  <div className='d-flex justify-content-center my-1'>
                    <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Status</label>
                    <Field className='w-75 form-control form-control-lg form-control-solid' type="text" name="status" autoComplete='off' />
                  </div>
                  <div className='d-flex justify-content-end'>
                    <ErrorMessage name="status" component="div" className='text-danger' />
                  </div>
                  <div className='d-flex justify-content-center my-1'>
                    <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Birth Date</label>
                    <Field className='w-75 form-control form-control-lg form-control-solid' type="date" name="birthDate" autoComplete='off' />
                  </div>
                  <div className='d-flex justify-content-end'>
                    <ErrorMessage name="birthDate" component="div" className='text-danger' />
                  </div>
                  <div className='d-flex justify-content-center my-1'>
                    <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Case Status</label>
                    <Field className='w-75 form-control form-control-lg form-control-solid' type="text" name="caseStatus" autoComplete='off' />
                  </div>
                  <div className='d-flex justify-content-end'>
                    <ErrorMessage name="caseStatus" component="div" className='text-danger' />
                  </div>
                  <div className='d-flex justify-content-center my-1'>
                    <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Entered By</label>
                    <Field className='w-75 form-control form-control-lg form-control-solid' type="text" name="enteredBy" autoComplete='off' />
                  </div>
                  <div className='d-flex justify-content-end'>
                    <ErrorMessage name="enteredBy" component="div" className='text-danger' />
                  </div>
                  <div className='d-flex justify-content-center my-1'>
                    <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Admitted By</label>
                    <Field className='w-75 form-control form-control-lg form-control-solid' type="text" name="admittedBy" autoComplete='off' />
                  </div>
                  <div className='d-flex justify-content-end'>
                    <ErrorMessage name="admittedBy" component="div" className='text-danger' />
                  </div>
                  <div className='d-flex justify-content-center my-1'>
                    <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Last Updated By</label>
                    <Field className='w-75 form-control form-control-lg form-control-solid' type="text" name="lastUpdatedBy" autoComplete='off' />
                  </div>
                  <div className='d-flex justify-content-end'>
                    <ErrorMessage name="lastUpdatedBy" component="div" className='text-danger' />
                  </div>
                  <div className='d-flex justify-content-center my-1'>
                    <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Admission Date</label>
                    <Field className='w-75 form-control form-control-lg form-control-solid' type="date" name="admissionDate" autoComplete='off' />
                  </div>
                  <div className='d-flex justify-content-end'>
                    <ErrorMessage name="admissionDate" component="div" className='text-danger' />
                  </div>
                  <div className='d-flex justify-content-center my-1'>
                    <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Individual ID Number</label>
                    <Field className='w-75 form-control form-control-lg form-control-solid' type="number" name="individualIDNumber" autoComplete='off' />
                  </div>
                  <div className='d-flex justify-content-end'>
                    <ErrorMessage name="individualIDNumber" component="div" className='text-danger' />
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
    </div>
  )
}

export default NewContact