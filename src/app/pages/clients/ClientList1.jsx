/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import {nanoid} from '@reduxjs/toolkit'
import {useState, Fragment} from 'react'
import data from '../../../mock-data.json'
import EditableRow from './EditableRow'
import ReadOnlyRow from './ReadOnlyRow'
export default function ClientList1() {
  const [contacts, setContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({
    name: '',
    gender: '',
    address: '',
    admission: '',
    status: '',
    clienttype: '',
  })

  const [editFormData, setEditFormData] = useState({
    name: '',
    gender: '',
    address: '',
    admission: '',
    status: '',
    clienttype: '',
  })

  const [editContactId, setEditContactId] = useState(null)

  const handleAddFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = {...addFormData}
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

  const handleEditFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = {...editFormData}
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault()

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      gender: addFormData.gender,
      address: addFormData.address,
      admission: addFormData.admission,
      status: addFormData.status,
      clienttype: addFormData.clienttype,
    }

    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const editedContact = {
      id: editContactId,
      name: addFormData.name,
      gender: addFormData.gender,
      address: addFormData.address,
      admission: addFormData.admission,
      status: addFormData.status,
      clienttype: addFormData.clienttype,
    }

    const newContacts = [...contacts]

    const index = contacts.findIndex((contact) => contact.id === editContactId)

    newContacts[index] = editedContact

    setContacts(newContacts)
    setEditContactId(null)
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault()
    setEditContactId(contact.id)

    const formValues = {
      name: contact.name,
      gender: contact.gender,
      address: contact.address,
      admission: contact.admission,
      status: contact.status,
      clienttype: contact.clienttype,
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditContactId(null)
  }

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts]

    const index = contacts.findIndex((contact) => contact.id === contactId)

    newContacts.splice(index, 1)

    setContacts(newContacts)
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
              Client List
            </h1>
            <span className='h-20px border-gray-300 border-start mx-4' />
            <ul className='breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1'>
              <li className='breadcrumb-item text-muted'>
                <a href='/dashboard' className='text-muted text-hover-primary'>
                  Home
                </a>
              </li>

              <li className='breadcrumb-item'>
                <span className='bullet bg-gray-300 w-5px h-2px' />
              </li>
              <li className='breadcrumb-item text-dark'>Client Listing</li>
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
                    data-kt-customer-table-filter='search'
                    className='form-control form-control-solid w-250px ps-15'
                    placeholder='Search Customers'
                  />
                </div>
              </div>
              <div className='card-toolbar'>
                <div className='d-flex justify-content-end' data-kt-customer-table-toolbar='base'>
                  <button
                    type='button'
                    className='btn btn-light-primary me-3'
                    data-bs-toggle='modal'
                    data-bs-target='#kt_customers_export_modal'
                  >
                    <span className='svg-icon svg-icon-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                      >
                        <rect
                          opacity='0.3'
                          x='12.75'
                          y='4.25'
                          width={12}
                          height={2}
                          rx={1}
                          transform='rotate(90 12.75 4.25)'
                          fill='black'
                        />
                        <path
                          d='M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z'
                          fill='black'
                        />
                        <path
                          d='M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z'
                          fill='#C4C4C4'
                        />
                      </svg>
                    </span>
                    Export
                  </button>
                  <button
                type='button'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_add_customer'
              >
                Add Client
              </button>
              <div className='modal fade' id='kt_modal_add_customer' tabindex='-1' aria-hidden='true'>
                <div className='modal-dialog modal-dialog-centered mw-650px'>
                  <div className='modal-content'>
                    <form
                      onSubmit={handleAddFormSubmit}
                      className='form'
                      action='#'
                      id='kt_modal_add_customer_form'
                      data-kt-redirect='../../demo1/dist/apps/customers/list.html'
                    >
                      <div className='modal-header' id='kt_modal_add_customer_header'>
                        <h2 className='fw-bolder'>Add a Client</h2>
                        <div
                          id='kt_modal_add_customer_close'
                          className='btn btn-icon btn-sm btn-active-icon-primary'
                        >
                          <span className='svg-icon svg-icon-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.5'
                                x='6'
                                y='17.3137'
                                width='16'
                                height='2'
                                rx='1'
                                transform='rotate(-45 6 17.3137)'
                                fill='black'
                              />
                              <rect
                                x='7.41422'
                                y='6'
                                width='16'
                                height='2'
                                rx='1'
                                transform='rotate(45 7.41422 6)'
                                fill='black'
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className='modal-body py-10 px-lg-17'>
                        <div
                          className='scroll-y me-n7 pe-7'
                          id='kt_modal_add_customer_scroll'
                          data-kt-scroll='true'
                          data-kt-scroll-activate='{default: false, lg: true}'
                          data-kt-scroll-max-height='auto'
                          data-kt-scroll-dependencies='#kt_modal_add_customer_header'
                          data-kt-scroll-wrappers='#kt_modal_add_customer_scroll'
                          data-kt-scroll-offset='300px'
                        >
                          <div className='fv-row mb-7'>
                            <label className='fs-6 fw-bold mb-2'>Name</label>
                            <input
                              type='text'
                              className='form-control form-control-solid'
                              placeholder=''
                              name='name'
                              onChange={handleAddFormChange}
                            />
                          </div>
                          <div className='fv-row mb-7'>
                            <label className=' fs-6 fw-bold mb-2'>Gender</label>
                            <input
                              type='text'
                              className='form-control form-control-solid'
                              placeholder=''
                              name='gender'
                              onChange={handleAddFormChange}
                            />
                          </div>
                          <div className='fv-row mb-7'>
                            <label className='required fs-6 fw-bold mb-2'>Address Line</label>
                            <input
                              type='text'
                              className='form-control form-control-solid'
                              placeholder=''
                              name='address'
                              onChange={handleAddFormChange}
                            />
                          </div>

                          <div className='fv-row mb-7'>
                            <label className='required fs-6 fw-bold mb-2'>Addmission Type</label>
                            <input
                              type='text'
                              className='form-control form-control-solid'
                              placeholder=''
                              name='admission'
                              onChange={handleAddFormChange}
                            />
                          </div>
                          <div className='fv-row mb-7'>
                            <label className=' fs-6 fw-bold mb-2'>Status</label>
                            <input
                              type='text'
                              className='form-control form-control-solid'
                              placeholder=''
                              name='status'
                              onChange={handleAddFormChange}
                            />
                          </div>
                          <div className='fv-row mb-7'>
                            <label className='required fs-6 fw-bold mb-2'>Client Type</label>
                            <input
                              type='text'
                              className='form-control form-control-solid'
                              placeholder=''
                              name='clienttype'
                              onChange={handleAddFormChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='modal-footer flex-center'>
                        <button
                          type='reset'
                          id='kt_modal_add_customer_cancel'
                          className='btn btn-light me-3'
                        >
                          Discard
                        </button>
                        <button
                          type='submit'
                          id='kt_modal_add_customer_submit'
                          className='btn btn-primary'
                        >
                          <span className='indicator-label'>Submit</span>
                          <span className='indicator-progress'>
                            Please wait...
                            <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
                </div>
                <div
                  className='d-flex justify-content-end align-items-center d-none'
                  data-kt-customer-table-toolbar='selected'
                >
                  <div className='fw-bolder me-5'>
                    <span className='me-2' data-kt-customer-table-select='selected_count' />
                    Selected
                  </div>
                  <button
                    type='button'
                    className='btn btn-danger'
                    data-kt-customer-table-select='delete_selected'
                  >
                    Delete Selected
                  </button>
                </div>
              </div>
            </div>
            <div className='card-body pt-0'>
              <table
                className='table align-middle table-row-dashed fs-6 gy-5'
                id='kt_customers_table'
              >
                <thead>
                  <tr className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                    <th className='w-10px pe-2'>
                      <div className='form-check form-check-sm form-check-custom form-check-solid me-3'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          data-kt-check='true'
                          data-kt-check-target='#kt_customers_table .form-check-input'
                          defaultValue={1}
                        />
                      </div>
                    </th>
                    <th className='min-w-150px'>Name</th>
                    <th className='min-w-140px'>Gender</th>
                    <th className='min-w-120px'>Address Line</th>
                    <th className='min-w-120px'>Addmission Type</th>
                    <th className='min-w-120px'>Status</th>
                    <th className='min-w-120px'>Client Type</th>
                    <th className='min-w-100px text-end'>Edit</th>
                  </tr>
                </thead>
                <tbody className='fw-bold text-gray-600'>
                  {contacts.map((contact) => (
                    <Fragment>
                      {editContactId === contact.id ? (
                        <EditableRow
                          editFormData={editFormData}
                          handleEditFormChange={handleEditFormChange}
                          handleCancelClick={handleCancelClick}
                        />
                      ) : (
                        <ReadOnlyRow
                          contact={contact}
                          handleEditClick={handleEditClick}
                          handleDeleteClick={handleDeleteClick}
                        />
                      )}
                    </Fragment>
                  ))}
                </tbody>
                {/*end::Table body*/}
              </table>
              {/*end::Table*/}
            </div>
            {/*end::Card body*/}
          </div>
          {/*end::Card*/}
          {/*begin::Modals*/}
          {/*begin::Modal - Customers - Add*/}
          <div className='modal fade' id='kt_modal_add_customer' tabIndex={-1} aria-hidden='true'>
            {/*begin::Modal dialog*/}
            <div className='modal-dialog modal-dialog-centered mw-650px'>
              {/*begin::Modal content*/}
              <div className='modal-content'>
                {/*begin::Form*/}
                <form
                  className='form'
                  action='#'
                  id='kt_modal_add_customer_form'
                  data-kt-redirect='../../demo1/dist/apps/customers/list.html'
                >
                  {/*begin::Modal header*/}
                  <div className='modal-header' id='kt_modal_add_customer_header'>
                    {/*begin::Modal title*/}
                    <h2 className='fw-bolder'>Add a Client</h2>
                    {/*end::Modal title*/}
                    {/*begin::Close*/}
                    <div
                      id='kt_modal_add_customer_close'
                      className='btn btn-icon btn-sm btn-active-icon-primary'
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                      <span className='svg-icon svg-icon-1'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                        >
                          <rect
                            opacity='0.5'
                            x={6}
                            y='17.3137'
                            width={16}
                            height={2}
                            rx={1}
                            transform='rotate(-45 6 17.3137)'
                            fill='black'
                          />
                          <rect
                            x='7.41422'
                            y={6}
                            width={16}
                            height={2}
                            rx={1}
                            transform='rotate(45 7.41422 6)'
                            fill='black'
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </div>
                    {/*end::Close*/}
                  </div>
                  {/*end::Modal header*/}
                  {/*begin::Modal body*/}
                  <div className='modal-body py-10 px-lg-17'>
                    {/*begin::Scroll*/}
                    <div
                      className='scroll-y me-n7 pe-7'
                      id='kt_modal_add_customer_scroll'
                      data-kt-scroll='true'
                      data-kt-scroll-activate='{default: false, lg: true}'
                      data-kt-scroll-max-height='auto'
                      data-kt-scroll-dependencies='#kt_modal_add_customer_header'
                      data-kt-scroll-wrappers='#kt_modal_add_customer_scroll'
                      data-kt-scroll-offset='300px'
                    >
                      {/*begin::Input group*/}
                      <div className='fv-row mb-7'>
                        {/*begin::Label*/}
                        <label className='required fs-6 fw-bold mb-2'>Name</label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          type='text'
                          className='form-control form-control-solid'
                          placeholder
                          name='name'
                          defaultValue='Sean Bean'
                        />
                        {/*end::Input*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className='fv-row mb-7'>
                        {/*begin::Label*/}
                        <label className='fs-6 fw-bold mb-2'>
                          <span className='required'>Email</span>
                          <i
                            className='fas fa-exclamation-circle ms-1 fs-7'
                            data-bs-toggle='tooltip'
                            title='Email address must be active'
                          />
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          type='email'
                          className='form-control form-control-solid'
                          placeholder
                          name='email'
                          defaultValue='sean@dellito.com'
                        />
                        {/*end::Input*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className='fv-row mb-15'>
                        {/*begin::Label*/}
                        <label className='fs-6 fw-bold mb-2'>Description</label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          type='text'
                          className='form-control form-control-solid'
                          placeholder
                          name='description'
                        />
                        {/*end::Input*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Billing toggle*/}
                      <div
                        className='fw-bolder fs-3 rotate collapsible mb-7'
                        data-bs-toggle='collapse'
                        href='#kt_modal_add_customer_billing_info'
                        role='button'
                        aria-expanded='false'
                        aria-controls='kt_customer_view_details'
                      >
                        Shipping Information
                        <span className='ms-2 rotate-180'>
                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                          <span className='svg-icon svg-icon-3'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <path
                                d='M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z'
                                fill='black'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                      </div>
                      {/*end::Billing toggle*/}
                      {/*begin::Billing form*/}
                      <div id='kt_modal_add_customer_billing_info' className='collapse show'>
                        {/*begin::Input group*/}
                        <div className='d-flex flex-column mb-7 fv-row'>
                          {/*begin::Label*/}
                          <label className='required fs-6 fw-bold mb-2'>Address Line 1</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            className='form-control form-control-solid'
                            placeholder
                            name='address1'
                            defaultValue='101, Collins Street'
                          />
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className='d-flex flex-column mb-7 fv-row'>
                          {/*begin::Label*/}
                          <label className='fs-6 fw-bold mb-2'>Address Line 2</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            className='form-control form-control-solid'
                            placeholder
                            name='address2'
                            defaultValue
                          />
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className='d-flex flex-column mb-7 fv-row'>
                          {/*begin::Label*/}
                          <label className='required fs-6 fw-bold mb-2'>Town</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            className='form-control form-control-solid'
                            placeholder
                            name='city'
                            defaultValue='Melbourne'
                          />
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className='row g-9 mb-7'>
                          {/*begin::Col*/}
                          <div className='col-md-6 fv-row'>
                            {/*begin::Label*/}
                            <label className='required fs-6 fw-bold mb-2'>State / Province</label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <input
                              className='form-control form-control-solid'
                              placeholder
                              name='state'
                              defaultValue='Victoria'
                            />
                            {/*end::Input*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className='col-md-6 fv-row'>
                            {/*begin::Label*/}
                            <label className='required fs-6 fw-bold mb-2'>Post Code</label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <input
                              className='form-control form-control-solid'
                              placeholder
                              name='postcode'
                              defaultValue={3000}
                            />
                            {/*end::Input*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className='d-flex flex-column mb-7 fv-row'>
                          {/*begin::Label*/}
                          <label className='fs-6 fw-bold mb-2'>
                            <span className='required'>Country</span>
                            <i
                              className='fas fa-exclamation-circle ms-1 fs-7'
                              data-bs-toggle='tooltip'
                              title='Country of origination'
                            />
                          </label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <select
                            name='country'
                            aria-label='Select a Country'
                            data-control='select2'
                            data-placeholder='Select a Country...'
                            data-dropdown-parent='#kt_modal_add_customer'
                            className='form-select form-select-solid fw-bolder'
                          >
                            <option value>Select a Country...</option>
                            <option value='AF'>Afghanistan</option>
                            <option value='AX'>Aland Islands</option>
                            <option value='AL'>Albania</option>
                            <option value='DZ'>Algeria</option>
                            <option value='AS'>American Samoa</option>
                            <option value='AD'>Andorra</option>
                            <option value='AO'>Angola</option>
                            <option value='AI'>Anguilla</option>
                            <option value='AG'>Antigua and Barbuda</option>
                            <option value='AR'>Argentina</option>
                            <option value='AM'>Armenia</option>
                            <option value='AW'>Aruba</option>
                            <option value='AU'>Australia</option>
                            <option value='AT'>Austria</option>
                            <option value='AZ'>Azerbaijan</option>
                            <option value='BS'>Bahamas</option>
                            <option value='BH'>Bahrain</option>
                            <option value='BD'>Bangladesh</option>
                            <option value='BB'>Barbados</option>
                            <option value='BY'>Belarus</option>
                            <option value='BE'>Belgium</option>
                            <option value='BZ'>Belize</option>
                            <option value='BJ'>Benin</option>
                            <option value='BM'>Bermuda</option>
                            <option value='BT'>Bhutan</option>
                            <option value='BO'>Bolivia, Plurinational State of</option>
                            <option value='BQ'>Bonaire, Sint Eustatius and Saba</option>
                            <option value='BA'>Bosnia and Herzegovina</option>
                            <option value='BW'>Botswana</option>
                            <option value='BR'>Brazil</option>
                            <option value='IO'>British Indian Ocean Territory</option>
                            <option value='BN'>Brunei Darussalam</option>
                            <option value='BG'>Bulgaria</option>
                            <option value='BF'>Burkina Faso</option>
                            <option value='BI'>Burundi</option>
                            <option value='KH'>Cambodia</option>
                            <option value='CM'>Cameroon</option>
                            <option value='CA'>Canada</option>
                            <option value='CV'>Cape Verde</option>
                            <option value='KY'>Cayman Islands</option>
                            <option value='CF'>Central African Republic</option>
                            <option value='TD'>Chad</option>
                            <option value='CL'>Chile</option>
                            <option value='CN'>China</option>
                            <option value='CX'>Christmas Island</option>
                            <option value='CC'>Cocos (Keeling) Islands</option>
                            <option value='CO'>Colombia</option>
                            <option value='KM'>Comoros</option>
                            <option value='CK'>Cook Islands</option>
                            <option value='CR'>Costa Rica</option>
                            <option value='CI'>Côte d'Ivoire</option>
                            <option value='HR'>Croatia</option>
                            <option value='CU'>Cuba</option>
                            <option value='CW'>Curaçao</option>
                            <option value='CZ'>Czech Republic</option>
                            <option value='DK'>Denmark</option>
                            <option value='DJ'>Djibouti</option>
                            <option value='DM'>Dominica</option>
                            <option value='DO'>Dominican Republic</option>
                            <option value='EC'>Ecuador</option>
                            <option value='EG'>Egypt</option>
                            <option value='SV'>El Salvador</option>
                            <option value='GQ'>Equatorial Guinea</option>
                            <option value='ER'>Eritrea</option>
                            <option value='EE'>Estonia</option>
                            <option value='ET'>Ethiopia</option>
                            <option value='FK'>Falkland Islands (Malvinas)</option>
                            <option value='FJ'>Fiji</option>
                            <option value='FI'>Finland</option>
                            <option value='FR'>France</option>
                            <option value='PF'>French Polynesia</option>
                            <option value='GA'>Gabon</option>
                            <option value='GM'>Gambia</option>
                            <option value='GE'>Georgia</option>
                            <option value='DE'>Germany</option>
                            <option value='GH'>Ghana</option>
                            <option value='GI'>Gibraltar</option>
                            <option value='GR'>Greece</option>
                            <option value='GL'>Greenland</option>
                            <option value='GD'>Grenada</option>
                            <option value='GU'>Guam</option>
                            <option value='GT'>Guatemala</option>
                            <option value='GG'>Guernsey</option>
                            <option value='GN'>Guinea</option>
                            <option value='GW'>Guinea-Bissau</option>
                            <option value='HT'>Haiti</option>
                            <option value='VA'>Holy See (Vatican City State)</option>
                            <option value='HN'>Honduras</option>
                            <option value='HK'>Hong Kong</option>
                            <option value='HU'>Hungary</option>
                            <option value='IS'>Iceland</option>
                            <option value='IN'>India</option>
                            <option value='ID'>Indonesia</option>
                            <option value='IR'>Iran, Islamic Republic of</option>
                            <option value='IQ'>Iraq</option>
                            <option value='IE'>Ireland</option>
                            <option value='IM'>Isle of Man</option>
                            <option value='IL'>Israel</option>
                            <option value='IT'>Italy</option>
                            <option value='JM'>Jamaica</option>
                            <option value='JP'>Japan</option>
                            <option value='JE'>Jersey</option>
                            <option value='JO'>Jordan</option>
                            <option value='KZ'>Kazakhstan</option>
                            <option value='KE'>Kenya</option>
                            <option value='KI'>Kiribati</option>
                            <option value='KP'>Korea, Democratic People's Republic of</option>
                            <option value='KW'>Kuwait</option>
                            <option value='KG'>Kyrgyzstan</option>
                            <option value='LA'>Lao People's Democratic Republic</option>
                            <option value='LV'>Latvia</option>
                            <option value='LB'>Lebanon</option>
                            <option value='LS'>Lesotho</option>
                            <option value='LR'>Liberia</option>
                            <option value='LY'>Libya</option>
                            <option value='LI'>Liechtenstein</option>
                            <option value='LT'>Lithuania</option>
                            <option value='LU'>Luxembourg</option>
                            <option value='MO'>Macao</option>
                            <option value='MG'>Madagascar</option>
                            <option value='MW'>Malawi</option>
                            <option value='MY'>Malaysia</option>
                            <option value='MV'>Maldives</option>
                            <option value='ML'>Mali</option>
                            <option value='MT'>Malta</option>
                            <option value='MH'>Marshall Islands</option>
                            <option value='MQ'>Martinique</option>
                            <option value='MR'>Mauritania</option>
                            <option value='MU'>Mauritius</option>
                            <option value='MX'>Mexico</option>
                            <option value='FM'>Micronesia, Federated States of</option>
                            <option value='MD'>Moldova, Republic of</option>
                            <option value='MC'>Monaco</option>
                            <option value='MN'>Mongolia</option>
                            <option value='ME'>Montenegro</option>
                            <option value='MS'>Montserrat</option>
                            <option value='MA'>Morocco</option>
                            <option value='MZ'>Mozambique</option>
                            <option value='MM'>Myanmar</option>
                            <option value='NA'>Namibia</option>
                            <option value='NR'>Nauru</option>
                            <option value='NP'>Nepal</option>
                            <option value='NL'>Netherlands</option>
                            <option value='NZ'>New Zealand</option>
                            <option value='NI'>Nicaragua</option>
                            <option value='NE'>Niger</option>
                            <option value='NG'>Nigeria</option>
                            <option value='NU'>Niue</option>
                            <option value='NF'>Norfolk Island</option>
                            <option value='MP'>Northern Mariana Islands</option>
                            <option value='NO'>Norway</option>
                            <option value='OM'>Oman</option>
                            <option value='PK'>Pakistan</option>
                            <option value='PW'>Palau</option>
                            <option value='PS'>Palestinian Territory, Occupied</option>
                            <option value='PA'>Panama</option>
                            <option value='PG'>Papua New Guinea</option>
                            <option value='PY'>Paraguay</option>
                            <option value='PE'>Peru</option>
                            <option value='PH'>Philippines</option>
                            <option value='PL'>Poland</option>
                            <option value='PT'>Portugal</option>
                            <option value='PR'>Puerto Rico</option>
                            <option value='QA'>Qatar</option>
                            <option value='RO'>Romania</option>
                            <option value='RU'>Russian Federation</option>
                            <option value='RW'>Rwanda</option>
                            <option value='BL'>Saint Barthélemy</option>
                            <option value='KN'>Saint Kitts and Nevis</option>
                            <option value='LC'>Saint Lucia</option>
                            <option value='MF'>Saint Martin (French part)</option>
                            <option value='VC'>Saint Vincent and the Grenadines</option>
                            <option value='WS'>Samoa</option>
                            <option value='SM'>San Marino</option>
                            <option value='ST'>Sao Tome and Principe</option>
                            <option value='SA'>Saudi Arabia</option>
                            <option value='SN'>Senegal</option>
                            <option value='RS'>Serbia</option>
                            <option value='SC'>Seychelles</option>
                            <option value='SL'>Sierra Leone</option>
                            <option value='SG'>Singapore</option>
                            <option value='SX'>Sint Maarten (Dutch part)</option>
                            <option value='SK'>Slovakia</option>
                            <option value='SI'>Slovenia</option>
                            <option value='SB'>Solomon Islands</option>
                            <option value='SO'>Somalia</option>
                            <option value='ZA'>South Africa</option>
                            <option value='KR'>South Korea</option>
                            <option value='SS'>South Sudan</option>
                            <option value='ES'>Spain</option>
                            <option value='LK'>Sri Lanka</option>
                            <option value='SD'>Sudan</option>
                            <option value='SR'>Suriname</option>
                            <option value='SZ'>Swaziland</option>
                            <option value='SE'>Sweden</option>
                            <option value='CH'>Switzerland</option>
                            <option value='SY'>Syrian Arab Republic</option>
                            <option value='TW'>Taiwan, Province of China</option>
                            <option value='TJ'>Tajikistan</option>
                            <option value='TZ'>Tanzania, United Republic of</option>
                            <option value='TH'>Thailand</option>
                            <option value='TG'>Togo</option>
                            <option value='TK'>Tokelau</option>
                            <option value='TO'>Tonga</option>
                            <option value='TT'>Trinidad and Tobago</option>
                            <option value='TN'>Tunisia</option>
                            <option value='TR'>Turkey</option>
                            <option value='TM'>Turkmenistan</option>
                            <option value='TC'>Turks and Caicos Islands</option>
                            <option value='TV'>Tuvalu</option>
                            <option value='UG'>Uganda</option>
                            <option value='UA'>Ukraine</option>
                            <option value='AE'>United Arab Emirates</option>
                            <option value='GB'>United Kingdom</option>
                            <option value='US' selected='selected'>
                              United States
                            </option>
                            <option value='UY'>Uruguay</option>
                            <option value='UZ'>Uzbekistan</option>
                            <option value='VU'>Vanuatu</option>
                            <option value='VE'>Venezuela, Bolivarian Republic of</option>
                            <option value='VN'>Vietnam</option>
                            <option value='VI'>Virgin Islands</option>
                            <option value='YE'>Yemen</option>
                            <option value='ZM'>Zambia</option>
                            <option value='ZW'>Zimbabwe</option>
                          </select>
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className='fv-row mb-7'>
                          {/*begin::Wrapper*/}
                          <div className='d-flex flex-stack'>
                            {/*begin::Label*/}
                            <div className='me-5'>
                              {/*begin::Label*/}
                              <label className='fs-6 fw-bold'>Use as a billing adderess?</label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <div className='fs-7 fw-bold text-muted'>
                                If you need more info, please check budget planning
                              </div>
                              {/*end::Input*/}
                            </div>
                            {/*end::Label*/}
                            {/*begin::Switch*/}
                            <label className='form-check form-switch form-check-custom form-check-solid'>
                              {/*begin::Input*/}
                              <input
                                className='form-check-input'
                                name='billing'
                                type='checkbox'
                                defaultValue={1}
                                id='kt_modal_add_customer_billing'
                                defaultChecked='checked'
                              />
                              {/*end::Input*/}
                              {/*begin::Label*/}
                              <span
                                className='form-check-label fw-bold text-muted'
                                htmlFor='kt_modal_add_customer_billing'
                              >
                                Yes
                              </span>
                              {/*end::Label*/}
                            </label>
                            {/*end::Switch*/}
                          </div>
                          {/*begin::Wrapper*/}
                        </div>
                        {/*end::Input group*/}
                      </div>
                      {/*end::Billing form*/}
                    </div>
                    {/*end::Scroll*/}
                  </div>
                  {/*end::Modal body*/}
                  {/*begin::Modal footer*/}
                  <div className='modal-footer flex-center'>
                    {/*begin::Button*/}
                    <button
                      type='reset'
                      id='kt_modal_add_customer_cancel'
                      className='btn btn-light me-3'
                    >
                      Discard
                    </button>
                    {/*end::Button*/}
                    {/*begin::Button*/}
                    <button
                      type='submit'
                      id='kt_modal_add_customer_submit'
                      className='btn btn-primary'
                    >
                      <span className='indicator-label'>Submit</span>
                      <span className='indicator-progress'>
                        Please wait...
                        <span className='spinner-border spinner-border-sm align-middle ms-2' />
                      </span>
                    </button>
                    {/*end::Button*/}
                  </div>
                  {/*end::Modal footer*/}
                </form>
                {/*end::Form*/}
              </div>
            </div>
          </div>
          {/*end::Modal - Customers - Add*/}
          {/*begin::Modal - Adjust Balance*/}
          <div
            className='modal fade'
            id='kt_customers_export_modal'
            tabIndex={-1}
            aria-hidden='true'
          >
            {/*begin::Modal dialog*/}
            <div className='modal-dialog modal-dialog-centered mw-650px'>
              {/*begin::Modal content*/}
              <div className='modal-content'>
                {/*begin::Modal header*/}
                <div className='modal-header'>
                  {/*begin::Modal title*/}
                  <h2 className='fw-bolder'>Export Client List</h2>
                  <div
                    id='kt_customers_export_close'
                    className='btn btn-icon btn-sm btn-active-icon-primary'
                  >
                    <span className='svg-icon svg-icon-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                      >
                        <rect
                          opacity='0.5'
                          x={6}
                          y='17.3137'
                          width={16}
                          height={2}
                          rx={1}
                          transform='rotate(-45 6 17.3137)'
                          fill='black'
                        />
                        <rect
                          x='7.41422'
                          y={6}
                          width={16}
                          height={2}
                          rx={1}
                          transform='rotate(45 7.41422 6)'
                          fill='black'
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className='modal-body scroll-y mx-5 mx-xl-15 my-7'>
                  <form id='kt_customers_export_form' className='form' action='#'>
                    <div className='fv-row mb-10'>
                      <label className='fs-5 fw-bold form-label mb-5'>Select Export Format:</label>
                      <select
                        data-control='select2'
                        data-placeholder='Select a format'
                        data-hide-search='true'
                        name='format'
                        className='form-select form-select-solid'
                      >
                        <option value='excell'>Excel</option>
                        <option value='pdf'>PDF</option>
                        <option value='cvs'>CVS</option>
                        <option value='zip'>ZIP</option>
                      </select>
                    </div>
                  
                   
                    <div className='text-center'>
                      <button
                        type='reset'
                        id='kt_customers_export_cancel'
                        className='btn btn-light me-3'
                      >
                        Discard
                      </button>
                      <button
                        type='submit'
                        id='kt_customers_export_submit'
                        className='btn btn-primary'
                      >
                        <span className='indicator-label'>Export</span>
                        <span className='indicator-progress'>
                          Please wait...
                          <span className='spinner-border spinner-border-sm align-middle ms-2' />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
