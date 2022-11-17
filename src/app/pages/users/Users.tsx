import { Fragment, useEffect, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ReadOnlyRow from './ReadOnlyRow'

/**
 * validator for editing form
 */
const registrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('First name is required'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  lastName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Last name is required'),
  role: Yup.string()
    .required('Role is required'),
})

const Users = () => {
  const [usersList, setUsersList] = useState<{ _id: string; firstName: string; lastName: string; role: string; email: string; }[]>([])
  const [tableHeaders, setTableHeaders] = useState<string[]>([])
  const [deleteUserId, setDeleteUserId] = useState('')
  const [roleNames, setRoleNames] = useState([])
  const [editFormData, setEditFormData] = useState({
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  })

  useEffect(() => {
    axios.get('/user/users')
      .then((users) => {
        // Headers are filtered out to only show the table headers we need and all users are set in their state
        let tempHeaders = Object.keys(users.data[0])
        tempHeaders.unshift("Name")
        tempHeaders.push("Edit")
        tempHeaders = tempHeaders.filter(header => header !== "_id" && header !== "register_date"
          && header !== 'updatedAt' && header !== "firstName" && header !== "lastName")
        setTableHeaders(tempHeaders)
        setUsersList(users.data)
      })
  }, [])

  useEffect(() => {
    axios.get('/role/getRoles')
      .then((roles) => {
        let rolesList = roles.data.map((role: { roleName: any }) => role.roleName)
        rolesList = rolesList.filter((role: string) => role !== editFormData.role)
        setRoleNames(rolesList)
      })
  }, [])

  /**
   * Handle deletion of users and updating in DB as well.
   */
  const onDeleteUser = () => {
    let tempObj = {
      deleteID: deleteUserId
    }
    axios.delete('user/deleteUser', {
      data: tempObj
    })
      .then(() => {
        setUsersList((prevState) =>
          prevState.filter((user) => user._id !== deleteUserId)
        );
      }).catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='content d-flex flex-column flex-column-fluid' id='kt_content'>
      <div className='toolbar' id='kt_toolbar'>
        <div id='kt_toolbar_container' className='container-fluid d-flex flex-stack'>
          <div
            data-kt-swapper='true'
            data-kt-swapper-mode='prepend'
            data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
            className='page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0'
          >
            <h1 className='d-flex align-items-center text-dark fw-bolder fs-3 my-1'>
              Users List
            </h1>
            <span className='h-20px border-gray-300 border-start mx-4' />
            <ul className='breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1'>
              <li className='breadcrumb-item text-muted'>
                <Link to={'/dashboard'} className='text-muted text-hover-primary'>
                  Home
                </Link>
              </li>

              <li className='breadcrumb-item'>
                <span className='bullet bg-gray-300 w-5px h-2px' />
              </li>
              <li className='breadcrumb-item text-dark'>Users Listing</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='post d-flex flex-column-fluid' id='kt_post'>
        <div id='kt_content_container' className='container-xxl'>
          <div className='card'>
            <div className='card-header border-0 pt-6'>
              <div className='card-title'>
                <div className='d-flex align-items-center position-relative my-1'>
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
                    data-kt-users-table-filter='search'
                    className='form-control form-control-solid w-250px ps-15'
                    placeholder='Search Users'
                  />
                </div>
              </div>
              <div className='card-toolbar'>
                <div className='d-flex justify-content-end' data-kt-users-table-toolbar='base'>
                  <Link
                    className='btn btn-primary'
                    to={"/add-user"}
                  >
                    Add User
                  </Link>
                </div>
              </div>
            </div>
            <div className='card-body pt-0'>
              <table
                className='table align-middle table-row-dashed fs-6 gy-5'
                id='kt_users_table'
              >
                <thead>
                  <tr className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                    <th className='w-10px pe-2'>
                      <div className='form-check form-check-sm form-check-custom form-check-solid me-3'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          data-kt-check='true'
                          data-kt-check-target='#kt_users_table .form-check-input'
                          defaultValue={1}
                        />
                      </div>
                    </th>
                    {tableHeaders.map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {usersList.map((user, index) => (
                    <Fragment key={index}>
                      <ReadOnlyRow user={user} setDeleteUserId={setDeleteUserId} setEditFormData={setEditFormData} />
                    </Fragment>
                  ))}
                </tbody>
              </table>

              {/*MODAL FOR DELETING USER*/}
              <div className='modal fade' id="kt_modal_delete_user" tabIndex={-1} aria-hidden="true">
                {/*begin::Modal dialog*/}
                <div className="modal-dialog modal-dialog-centered mw-750px">
                  {/*begin::Modal content*/}
                  <div className="modal-content">
                    {/*begin::Modal header*/}
                    <div className="modal-header d-flex justify-content-center">
                      {/*begin::Modal title*/}
                      <h2 className="fw-bolder">ARE YOU SURE YOU WANT TO DELETE THIS USER?</h2>
                      {/*end::Modal title*/}
                    </div>
                    {/*end::Modal header*/}
                    {/*begin::Modal body*/}
                    <div className='modal-body scroll-y mx-lg-5 my-7'>
                      <div className='d-flex justify-content-center'>
                        <button className='btn btn-light me-3' onClick={onDeleteUser}
                          data-bs-dismiss="modal" aria-label="Close">Confirm
                        </button>
                        <button className='btn btn-light me-3' data-bs-dismiss="modal"
                          aria-label="Close">Discard
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*MODAL FOR EDITING USER*/}
              <div className='modal fade' id="kt_modal_edit_user" tabIndex={-1} aria-hidden="true">
                {/*begin::Modal dialog*/}
                <div className="modal-dialog modal-dialog-centered mw-750px">
                  {/*begin::Modal content*/}
                  <div className="modal-content">
                    {/*begin::Modal header*/}
                    <div className="modal-header d-flex justify-content-center">
                      {/*begin::Modal title*/}
                      <h2 className="fw-bolder">Edit User</h2>
                      {/*end::Modal title*/}
                    </div>
                    {/*end::Modal header*/}
                    <Formik
                      enableReinitialize
                      initialValues={{
                        firstName: editFormData.firstName,
                        lastName: editFormData.lastName,
                        email: editFormData.email,
                        role: editFormData.role,
                      }}
                      validationSchema={registrationSchema}
                      onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                          let valuesKeys: string[] = Object.keys(values)
                          let tempState = editFormData
                          for (const element of valuesKeys) {
                            let tempkey: string = element
                            tempState[tempkey as keyof Object] = values[tempkey as keyof object]
                          }
                          axios.put('/user/editUser', tempState)
                            .then(() => {
                              let idKey = "_id"
                              let editKey = tempState[idKey as keyof Object]
                              setUsersList((prevState) =>
                                prevState.map((user) => user[idKey as keyof Object] !== editKey ? user : tempState)
                              )
                              setEditFormData(tempState)
                              setSubmitting(false);
                            }).catch((err) => {
                              console.log(err)
                            })
                        }, 400);
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        resetForm,
                        isSubmitting,
                      }) => (
                        <div className='modal-body scroll-y mx-lg-5 my-7'>
                          <div className='my-3'>
                            <form
                              className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
                              noValidate
                              id='kt_edit_user_form'
                              onSubmit={handleSubmit}>
                              <div className='d-flex justify-content-center my-1'>
                                <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">First Name</label>
                                <input className="w-75 form-control form-control-lg form-control-solid" placeholder='Enter First name here' type='text'
                                  autoComplete='off' name="firstName" onChange={handleChange} onBlur={handleBlur} value={values.firstName} />
                                <span role='alert' className='text-danger'>{errors.firstName && touched.firstName && errors.firstName}</span>
                              </div>
                              <div className='d-flex justify-content-center my-1'>
                                <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Last Name</label>
                                <input className=" w-75 form-control form-control-lg form-control-solid" placeholder='Enter Last name here' type='text'
                                  autoComplete='off' name="lastName" onChange={handleChange} onBlur={handleBlur} value={values.lastName} />
                                <span role='alert' className='text-danger'>{errors.lastName && touched.lastName && errors.lastName}</span>
                              </div>
                              <div className='d-flex justify-content-center my-1'>
                                <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Email</label>
                                <input className=" w-75 form-control form-control-lg form-control-solid" placeholder='Enter Email here' type='text'
                                  autoComplete='off' name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                <span role='alert' className='text-danger'>{errors.email && touched.email && errors.email}</span>
                              </div>
                              <div className='d-flex justify-content-center my-1'>
                                <label className="w-25 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Role</label>
                                <select className='w-75 form-control form-control-lg form-control-solid form-select'
                                  name="role" onChange={handleChange} onBlur={handleBlur}>
                                  <option value={values.role} hidden>{values.role}</option>
                                  {roleNames.map((role, index) => (
                                    <option key={index} value={role}>{role}</option>
                                  ))}
                                </select>
                                <span role='alert' className='text-danger'>{errors.role && touched.role && errors.role}</span>
                              </div>
                              <div className='d-flex justify-content-center'>
                                <button type="submit" disabled={isSubmitting} className='btn btn-primary me-3' data-bs-dismiss="modal" aria-label="Close">Confirm</button>
                                <button type='reset' className='btn btn-light me-3' data-bs-dismiss="modal" aria-label="Close" onClick={() => resetForm()} >Discard</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
                    </Formik>
                    {/*begin::Modal body*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users