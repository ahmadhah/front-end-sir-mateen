/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import {nanoid} from '@reduxjs/toolkit'
import {useState, Fragment} from 'react'
import data from '../../../mock-data.json'
export default function ClientDetails() {
  
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
    <>
      <h3>Client Details</h3>

      <div className='d-flex flex-column flex-root'>
        <div className='content d-flex flex-column flex-column-fluid' id='kt_content'>
          {/*begin::Toolbar*/}
          <div className='toolbar' id='kt_toolbar'>
            {/*begin::Container*/}
            <div id='kt_toolbar_container' className='container-fluid d-flex flex-stack'>
              {/*begin::Page title*/}
              <div
                data-kt-swapper='true'
                data-kt-swapper-mode='prepend'
                data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                className='page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0'
              >
                {/*begin::Title*/}
                <h1 className='d-flex align-items-center text-dark fw-bolder fs-3 my-1'>
                  Client Details
                </h1>
                {/*end::Title*/}
                {/*begin::Separator*/}
                <span className='h-20px border-gray-300 border-start mx-4' />
                {/*end::Separator*/}
                {/*begin::Breadcrumb*/}
                <ul className='breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1'>
                  {/*begin::Item*/}
                  <li className='breadcrumb-item text-muted'>
                    <a href='/dashboard' className='text-muted text-hover-primary'>
                      Home
                    </a>
                  </li>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <li className='breadcrumb-item'>
                    <span className='bullet bg-gray-300 w-5px h-2px' />
                  </li>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <li className='breadcrumb-item text-muted'>Client List</li>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <li className='breadcrumb-item'>
                    <span className='bullet bg-gray-300 w-5px h-2px' />
                  </li>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <li className='breadcrumb-item text-dark'>Client Details</li>
                  {/*end::Item*/}
                </ul>
                {/*end::Breadcrumb*/}
              </div>
            </div>
            {/*end::Container*/}
          </div>
          {/*end::Toolbar*/}
          {/*begin::Post*/}
          <div className='post d-flex flex-column-fluid' id='kt_post'>
            {/*begin::Container*/}
            <div id='kt_content_container' className='container-xl'>
              {/*begin::Layout*/}
              <div className='d-flex flex-row flex-md-row'>
                {/*begin::Sidebar*/}
                <div className='flex-column flex-lg-row-auto w-100 w-xl-450px mb-10'>
                  {/*begin::Card*/}

                  {/*begin::Card body*/}
                  <div className='card-body pt-1'>
                    {/*begin::Summary*/}
                    <div className='d-flex  flex-row flex-start mb-9'>
                    <div className='d-flex  flex-column flex-start md-5'>
                      {/*begin::Avatar*/}
                      <div className='symbol symbol-75px symbol-circle  '>
                        <img
                          src='https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
                          alt='image'
                        />
                      </div>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Name*/}
                      <div className='d-flex  flex-column flex-start md-5'>
                        <div className='d-flex  flex-row flex-start'>
                          <a
                            href='#'
                            className='fs-4 text-gray-800 text-hover-primary fw-bolder mb-1'
                          >
                            Emma Smith
                          </a>
                          <span style={{marginTop:"5px",marginLeft:"2px"}} className='fs-7 text-gray-800 '>22 years</span>
                        </div>
                        <span className='fs-7 text-gray-600 '>
                        <span className='svg-icon svg-icon-primary svg-icon-2x'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            xlink='http://www.w3.org/1999/xlink'
                            width='24px'
                            height='24px'
                            viewBox='0 0 32 32'
                            version='1.1'
                          >
                            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                              <rect x='0' y='0' width='24' height='24' />
                              <path
                                d='M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z'
                                fill='#000000'
                                fillRule='nonzero'
                              />
                            </g>
                          </svg>
                        </span> Rochester, ROCHESTER, New York,1406</span>   <span className='fs-8 text-gray-800  mb-1'>Emergency Contact: N/A</span>
                        <span className='fs-7 text-gray-600 '>
                          {' '}
                          <span className='svg-icon svg-icon-primary svg-icon-2x'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              style={{marginTop: '2px'}}
                              viewBox='0 0 32 32'
                              version='1.1'
                            >
                              <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                                <rect x='0' y='0' width='20' height='24' />
                                <path
                                  d='M5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z'
                                  fill='#000000'
                                />
                              </g>
                            </svg>
                          </span>{' '}
                          smith@yopmail.com{' '}
                        </span>

                     
                      </div>

                      {/*end::Name*/}
                      {/*begin::Position*/}

                      {/*end::Position*/}
                      {/*begin::Info*/}

                      {/*end::Info*/}
                    </div>
                    {/*end::Summary*/}
                    {/*begin::Details toggle*/}
                    <div className='d-flex flex-stack fs-4 py-3'>
                      <div
                        className='fw-bolder rotate collapsible'
                        data-bs-toggle='collapse'
                        ref='#kt_customer_view_details'
                        role='button'
                        aria-expanded='false'
                        aria-controls='kt_customer_view_details'
                      >
                        Details
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
                      <span
                        data-bs-toggle='tooltip'
                        data-bs-trigger='hover'
                        title='Edit customer details'
                      >
                        <a
                          href='#'
                          className='btn btn-sm btn-light-primary'
                          data-bs-toggle='modal'
                          data-bs-target='#kt_modal_update_customer'
                        >
                          Edit
                        </a>
                      </span>
                    </div>
                    {/*end::Details toggle*/}
                    <div className='separator separator-dashed my-3' />
                    {/*begin::Details content*/}
                    <div id='kt_customer_view_details' className='collapse show'>
                      <div className='py-5 fs-6'>
                        {/*begin::Badge*/}
                        <div className='badge badge-light-info d-inline'>Premium user</div>
                        {/*begin::Badge*/}
                        {/*begin::Details item*/}
                        <div className='fw-bolder mt-5'>Account ID</div>
                        <div className='text-gray-600'>ID-45453423</div>
                        {/*begin::Details item*/}
                        {/*begin::Details item*/}
                        <div className='fw-bolder mt-5'>Billing Email</div>
                        <div className='text-gray-600'>
                          <a href='#' className='text-gray-600 text-hover-primary'>
                            info@keenthemes.com
                          </a>
                        </div>
                        {/*begin::Details item*/}
                        {/*begin::Details item*/}
                        <div className='fw-bolder mt-5'>Billing Address</div>
                        <div className='text-gray-600'>
                          101 Collin Street,
                          <br />
                          Melbourne 3000 VIC
                          <br />
                          Australia
                        </div>
                        {/*begin::Details item*/}
                        {/*begin::Details item*/}
                        <div className='fw-bolder mt-5'>Language</div>
                        <div className='text-gray-600'>English</div>
                        {/*begin::Details item*/}
                        {/*begin::Details item*/}
                        <div className='fw-bolder mt-5'>Upcoming Invoice</div>
                        <div className='text-gray-600'>54238-8693</div>
                        {/*begin::Details item*/}
                        {/*begin::Details item*/}
                        <div className='fw-bolder mt-5'>Tax ID</div>
                        <div className='text-gray-600'>TX-8674</div>
                        {/*begin::Details item*/}
                      </div>
                    </div>
                    {/*end::Details content*/}
                  </div>
                  {/*end::Card body*/}
                </div>
              </div>

              <div
                className='modal fade'
                id='kt_modal_add_payment'
                tabIndex={-1}
                aria-hidden='true'
              >
                {/*begin::Modal dialog*/}
                <div className='modal-dialog mw-650px'>
                  {/*begin::Modal content*/}
                  <div className='modal-content'>
                    {/*begin::Modal header*/}
                    <div className='modal-header'>
                      {/*begin::Modal title*/}
                      <h2 className='fw-bolder'>Add a Payment Record</h2>
                      {/*end::Modal title*/}
                      {/*begin::Close*/}
                      <div
                        id='kt_modal_add_payment_close'
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
                    <div className='modal-body scroll-y mx-5 mx-xl-15 my-7'>
                      {/*begin::Form*/}
                      <form id='kt_modal_add_payment_form' className='form' action='#'>
                        {/*begin::Input group*/}
                        <div className='fv-row mb-7'>
                          {/*begin::Label*/}
                          <label className='fs-6 fw-bold form-label mb-2'>
                            <span className='required'>Invoice Number</span>
                            <i
                              className='fas fa-exclamation-circle ms-1 fs-7'
                              data-bs-toggle='tooltip'
                              title='The invoice number must be unique.'
                            />
                          </label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            type='text'
                            className='form-control form-control-solid'
                            name='invoice'
                            defaultValue
                          />
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className='fv-row mb-7'>
                          {/*begin::Label*/}
                          <label className='required fs-6 fw-bold form-label mb-2'>Status</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <select
                            className='form-select form-select-solid fw-bolder'
                            name='status'
                            data-control='select2'
                            data-placeholder='Select an option'
                            data-hide-search='true'
                          >
                            <option />
                            <option value={0}>Approved</option>
                            <option value={1}>Pending</option>
                            <option value={2}>Rejected</option>
                            <option value={3}>In progress</option>
                            <option value={4}>Completed</option>
                          </select>
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className='fv-row mb-7'>
                          {/*begin::Label*/}
                          <label className='required fs-6 fw-bold form-label mb-2'>
                            Invoice Amount
                          </label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            type='text'
                            className='form-control form-control-solid'
                            name='amount'
                            defaultValue
                          />
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className='fv-row mb-15'>
                          {/*begin::Label*/}
                          <label className='fs-6 fw-bold form-label mb-2'>
                            <span className='required'>Additional Information</span>
                            <i
                              className='fas fa-exclamation-circle ms-1 fs-7'
                              data-bs-toggle='tooltip'
                              title='Information such as description of invoice or product purchased.'
                            />
                          </label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <textarea
                            className='form-control form-control-solid rounded-3'
                            name='additional_info'
                            defaultValue={''}
                          />
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Actions*/}
                        <div className='text-center'>
                          <button
                            type='reset'
                            id='kt_modal_add_payment_cancel'
                            className='btn btn-light me-3'
                          >
                            Discard
                          </button>
                          <button
                            type='submit'
                            id='kt_modal_add_payment_submit'
                            className='btn btn-primary'
                          >
                            <span className='indicator-label'>Submit</span>
                            <span className='indicator-progress'>
                              Please wait...
                              <span className='spinner-border spinner-border-sm align-middle ms-2' />
                            </span>
                          </button>
                        </div>
                        {/*end::Actions*/}
                      </form>
                      {/*end::Form*/}
                    </div>
                    {/*end::Modal body*/}
                  </div>
                  {/*end::Modal content*/}
                </div>
                {/*end::Modal dialog*/}
              </div>
              {/*end::Modal - New Card*/}
              {/*begin::Modal - Adjust Balance*/}
              <div
                className='modal fade'
                id='kt_modal_adjust_balance'
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
                      <h2 className='fw-bolder'>Adjust Balance</h2>
                      {/*end::Modal title*/}
                      {/*begin::Close*/}
                      <div
                        id='kt_modal_adjust_balance_close'
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
                    <div className='modal-body scroll-y mx-5 mx-xl-15 my-7'>
                      {/*begin::Balance preview*/}
                      <div className='d-flex text-center mb-9'>
                        <div className='w-50 border border-dashed border-gray-300 rounded mx-2 p-4'>
                          <div className='fs-6 fw-bold mb-2 text-muted'>Current Balance</div>
                          <div className='fs-2 fw-bolder' kt-modal-adjust-balance='current_balance'>
                            US$ 32,487.57
                          </div>
                        </div>
                        <div className='w-50 border border-dashed border-gray-300 rounded mx-2 p-4'>
                          <div className='fs-6 fw-bold mb-2 text-muted'>
                            New Balance
                            <i
                              className='fas fa-exclamation-circle ms-1 fs-7'
                              data-bs-toggle='tooltip'
                              title='Enter an amount to preview the new balance.'
                            />
                          </div>
                          <div className='fs-2 fw-bolder' kt-modal-adjust-balance='new_balance'>
                            --
                          </div>
                        </div>
                      </div>
                      {/*end::Balance preview*/}
                      {/*begin::Form*/}
                      <form id='kt_modal_adjust_balance_form' className='form' action='#'>
                        {/*begin::Input group*/}
                        <div className='fv-row mb-7'>
                          {/*begin::Label*/}
                          <label className='required fs-6 fw-bold form-label mb-2'>
                            Adjustment type
                          </label>
                          {/*end::Label*/}
                          {/*begin::Dropdown*/}
                          <select
                            className='form-select form-select-solid fw-bolder'
                            name='adjustment'
                            aria-label='Select an option'
                            data-control='select2'
                            data-dropdown-parent='#kt_modal_adjust_balance'
                            data-placeholder='Select an option'
                            data-hide-search='true'
                          >
                            <option />
                            <option value={1}>Credit</option>
                            <option value={2}>Debit</option>
                          </select>
                          {/*end::Dropdown*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className='fv-row mb-7'>
                          {/*begin::Label*/}
                          <label className='required fs-6 fw-bold form-label mb-2'>Amount</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            id='kt_modal_inputmask'
                            type='text'
                            className='form-control form-control-solid'
                            name='amount'
                            defaultValue
                          />
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className='fv-row mb-7'>
                          {/*begin::Label*/}
                          <label className='fs-6 fw-bold form-label mb-2'>
                            Add adjustment note
                          </label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <textarea
                            className='form-control form-control-solid rounded-3 mb-5'
                            defaultValue={''}
                          />
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Disclaimer*/}
                        <div className='fs-7 text-muted mb-15'>
                          Please be aware that all manual balance changes will be audited by the
                          financial team every fortnight. Please maintain your invoices and receipts
                          until then. Thank you.
                        </div>
                        {/*end::Disclaimer*/}
                        {/*begin::Actions*/}
                        <div className='text-center'>
                          <button
                            type='reset'
                            id='kt_modal_adjust_balance_cancel'
                            className='btn btn-light me-3'
                          >
                            Discard
                          </button>
                          <button
                            type='submit'
                            id='kt_modal_adjust_balance_submit'
                            className='btn btn-primary'
                          >
                            <span className='indicator-label'>Submit</span>
                            <span className='indicator-progress'>
                              Please wait...
                              <span className='spinner-border spinner-border-sm align-middle ms-2' />
                            </span>
                          </button>
                        </div>
                        {/*end::Actions*/}
                      </form>
                      {/*end::Form*/}
                    </div>
                    {/*end::Modal body*/}
                  </div>
                  {/*end::Modal content*/}
                </div>
                {/*end::Modal dialog*/}
              </div>
              {/*end::Modal - New Card*/}
              {/*begin::Modal - New Address*/}
              <div
                className='modal fade'
                id='kt_modal_update_customer'
                tabIndex={-1}
                aria-hidden='true'
              >
                {/*begin::Modal dialog*/}
                <div className='modal-dialog modal-dialog-centered mw-650px'>
                  {/*begin::Modal content*/}
                  <div className='modal-content'>
                    {/*begin::Form*/}
                    <form className='form' action='#' id='kt_modal_update_customer_form'>
                      {/*begin::Modal header*/}
                      <div className='modal-header' id='kt_modal_update_customer_header'>
                        {/*begin::Modal title*/}
                        <h2 className='fw-bolder'>Update Customer</h2>
                        {/*end::Modal title*/}
                        {/*begin::Close*/}
                        <div
                          id='kt_modal_update_customer_close'
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
                          className='d-flex flex-column scroll-y me-n7 pe-7'
                          id='kt_modal_update_customer_scroll'
                          data-kt-scroll='true'
                          data-kt-scroll-activate='{default: false, lg: true}'
                          data-kt-scroll-max-height='auto'
                          data-kt-scroll-dependencies='#kt_modal_update_customer_header'
                          data-kt-scroll-wrappers='#kt_modal_update_customer_scroll'
                          data-kt-scroll-offset='300px'
                        >
                          {/*begin::Notice*/}
                          {/*begin::Notice*/}
                        
                          {/*end::Notice*/}
                          {/*end::Notice*/}
                          {/*begin::User toggle*/}
                          <div
                            className='fw-bolder fs-3 rotate collapsible mb-7'
                            data-bs-toggle='collapse'
                            href='#kt_modal_update_customer_user_info'
                            role='button'
                            aria-expanded='false'
                            aria-controls='kt_modal_update_customer_user_info'
                          >
                            User Information
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
                          {/*end::User toggle*/}
                          {/*begin::User form*/}
                          <div id='kt_modal_update_customer_user_info' className='collapse show'>
                            {/*begin::Input group*/}
                            <div className='mb-7'>
                              {/*begin::Label*/}
                              <label className='fs-6 fw-bold mb-2'>
                                <span>Update Avatar</span>
                                <i
                                  className='fas fa-exclamation-circle ms-1 fs-7'
                                  data-bs-toggle='tooltip'
                                  title='Allowed file types: png, jpg, jpeg.'
                                />
                              </label>
                              {/*end::Label*/}
                              {/*begin::Image input wrapper*/}
                              <div className='mt-1'>
                                {/*begin::Image input*/}
                                <div
                                  className='image-input image-input-outline'
                                  data-kt-image-input='true'
                                  style={{
                                    backgroundImage: 'url("assets/media/svg/avatars/blank.svg")',
                                  }}
                                >
                                  {/*begin::Preview existing avatar*/}
                                  <div
                                    className='image-input-wrapper w-125px h-125px'
                                    style={{
                                      backgroundImage: 'url(assets/media/avatars/300-1.jpg)',
                                    }}
                                  />
                                  {/*end::Preview existing avatar*/}
                                  {/*begin::Edit*/}
                                  <label
                                    className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                                    data-kt-image-input-action='change'
                                    data-bs-toggle='tooltip'
                                    title='Change avatar'
                                  >
                                    <i className='bi bi-pencil-fill fs-7' />
                                    {/*begin::Inputs*/}
                                    <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
                                    <input type='hidden' name='avatar_remove' />
                                    {/*end::Inputs*/}
                                  </label>
                                  {/*end::Edit*/}
                                  {/*begin::Cancel*/}
                                  <span
                                    className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                                    data-kt-image-input-action='cancel'
                                    data-bs-toggle='tooltip'
                                    title='Cancel avatar'
                                  >
                                    <i className='bi bi-x fs-2' />
                                  </span>
                                  {/*end::Cancel*/}
                                  {/*begin::Remove*/}
                                  <span
                                    className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                                    data-kt-image-input-action='remove'
                                    data-bs-toggle='tooltip'
                                    title='Remove avatar'
                                  >
                                    <i className='bi bi-x fs-2' />
                                  </span>
                                  {/*end::Remove*/}
                                </div>
                                {/*end::Image input*/}
                              </div>
                              {/*end::Image input wrapper*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className='fv-row mb-7'>
                              {/*begin::Label*/}
                              <label className='fs-6 fw-bold mb-2'>Name</label>
                             
                              <input
            type='text'
            className='form-control form-control-solid'
            placeholder='Enter a name...'
            name='name'
            value={editFormData.name}
            onChange={handleEditFormChange}
          ></input>
                            </div>
                            <div className='fv-row mb-7'>
                              {/*begin::Label*/}
                              <label className='fs-6 fw-bold mb-2'>
                                <span>Gender</span>
                                
                              </label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <input
            type='text'
            className='form-control form-control-solid'
            placeholder='Enter '
            name='gender'
            value={editFormData.gender}
            onChange={handleEditFormChange}
          ></input>
                              {/*end::Input*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className='fv-row mb-15'>
                              {/*begin::Label*/}
                              <label className='fs-6 fw-bold mb-2'>Address</label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <input
            type='text'
            className='form-control form-control-solid'
            placeholder='Enter a phone number...'
            name='address'
            value={editFormData.address}
            onChange={handleEditFormChange}
          ></input>
                              {/*end::Input*/}
                            </div>
                            {/*end::Input group*/}
                          </div>
                       
                        </div>
                        {/*end::Scroll*/}
                      </div>
                      {/*end::Modal body*/}
                      {/*begin::Modal footer*/}
                      <div className='modal-footer flex-center'>
                        {/*begin::Button*/}
                        <button
                          type='reset'
                          id='kt_modal_update_customer_cancel'
                          className='btn btn-light me-3'
                        >
                          Discard
                        </button>
                        {/*end::Button*/}
                        {/*begin::Button*/}
                        <button
                          type='submit'
                          id='kt_modal_update_customer_submit'
                          className='btn btn-primary'
                        >
                          <span className='indicator-label'>Update</span>
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
              {/*end::Modal - New Address*/}
              {/*begin::Modal - New Card*/}
              <div className='modal fade' id='kt_modal_new_card' tabIndex={-1} aria-hidden='true'>
                {/*begin::Modal dialog*/}
                <div className='modal-dialog modal-dialog-centered mw-650px'>
                  {/*begin::Modal content*/}
                  <div className='modal-content'>
                    {/*begin::Modal header*/}
                    <div className='modal-header'>
                      {/*begin::Modal title*/}
                      <h2>Add New Card</h2>
                      {/*end::Modal title*/}
                      {/*begin::Close*/}
                      <div
                        className='btn btn-sm btn-icon btn-active-color-primary'
                        data-bs-dismiss='modal'
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
                    <div className='modal-body scroll-y mx-5 mx-xl-15 my-7'>
                      {/*begin::Form*/}
                      <form id='kt_modal_new_card_form' className='form' action='#'>
                        {/*begin::Input group*/}
                        <div className='d-flex flex-column mb-7 fv-row'>
                          {/*begin::Label*/}
                          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                            <span className='required'>Name On Card</span>
                            <i
                              className='fas fa-exclamation-circle ms-2 fs-7'
                              data-bs-toggle='tooltip'
                              title="Specify a card holder's name"
                            />
                          </label>
                          {/*end::Label*/}
                          <input
                            type='text'
                            className='form-control form-control-solid'
                            placeholder
                            name='card_name'
                            defaultValue='Max Doe'
                          />
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className='d-flex flex-column mb-7 fv-row'>
                          {/*begin::Label*/}
                          <label className='required fs-6 fw-bold form-label mb-2'>
                            Card Number
                          </label>
                          {/*end::Label*/}
                          {/*begin::Input wrapper*/}
                          <div className='position-relative'>
                            {/*begin::Input*/}
                            <input
                              type='text'
                              className='form-control form-control-solid'
                              placeholder='Enter card number'
                              name='card_number'
                              defaultValue='4111 1111 1111 1111'
                            />
                            {/*end::Input*/}
                            {/*begin::Card logos*/}
                            <div className='position-absolute translate-middle-y top-50 end-0 me-5'>
                              <img
                                src='assets/media/svg/card-logos/visa.svg'
                                alt=''
                                className='h-25px'
                              />
                              <img
                                src='assets/media/svg/card-logos/mastercard.svg'
                                alt=''
                                className='h-25px'
                              />
                              <img
                                src='assets/media/svg/card-logos/american-express.svg'
                                alt=''
                                className='h-25px'
                              />
                            </div>
                            {/*end::Card logos*/}
                          </div>
                          {/*end::Input wrapper*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className='row mb-10'>
                          {/*begin::Col*/}
                          <div className='col-md-8 fv-row'>
                            {/*begin::Label*/}
                            <label className='required fs-6 fw-bold form-label mb-2'>
                              Expiration Date
                            </label>
                            {/*end::Label*/}
                            {/*begin::Row*/}
                            <div className='row fv-row'>
                              {/*begin::Col*/}
                              <div className='col-6'>
                                <select
                                  name='card_expiry_month'
                                  className='form-select form-select-solid'
                                  data-control='select2'
                                  data-hide-search='true'
                                  data-placeholder='Month'
                                >
                                  <option />
                                  <option value={1}>1</option>
                                  <option value={2}>2</option>
                                  <option value={3}>3</option>
                                  <option value={4}>4</option>
                                  <option value={5}>5</option>
                                  <option value={6}>6</option>
                                  <option value={7}>7</option>
                                  <option value={8}>8</option>
                                  <option value={9}>9</option>
                                  <option value={10}>10</option>
                                  <option value={11}>11</option>
                                  <option value={12}>12</option>
                                </select>
                              </div>
                              {/*end::Col*/}
                              {/*begin::Col*/}
                              <div className='col-6'>
                                <select
                                  name='card_expiry_year'
                                  className='form-select form-select-solid'
                                  data-control='select2'
                                  data-hide-search='true'
                                  data-placeholder='Year'
                                >
                                  <option />
                                  <option value={2021}>2021</option>
                                  <option value={2022}>2022</option>
                                  <option value={2023}>2023</option>
                                  <option value={2024}>2024</option>
                                  <option value={2025}>2025</option>
                                  <option value={2026}>2026</option>
                                  <option value={2027}>2027</option>
                                  <option value={2028}>2028</option>
                                  <option value={2029}>2029</option>
                                  <option value={2030}>2030</option>
                                  <option value={2031}>2031</option>
                                </select>
                              </div>
                              {/*end::Col*/}
                            </div>
                            {/*end::Row*/}
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className='col-md-4 fv-row'>
                            {/*begin::Label*/}
                            <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                              <span className='required'>CVV</span>
                              <i
                                className='fas fa-exclamation-circle ms-2 fs-7'
                                data-bs-toggle='tooltip'
                                title='Enter a card CVV code'
                              />
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input wrapper*/}
                            <div className='position-relative'>
                              {/*begin::Input*/}
                              <input
                                type='text'
                                className='form-control form-control-solid'
                                minLength={3}
                                maxLength={4}
                                placeholder='CVV'
                                name='card_cvv'
                              />
                              {/*end::Input*/}
                              {/*begin::CVV icon*/}
                              <div className='position-absolute translate-middle-y top-50 end-0 me-3'>
                                {/*begin::Svg Icon | path: icons/duotune/finance/fin002.svg*/}
                                <span className='svg-icon svg-icon-2hx'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                  >
                                    <path d='M22 7H2V11H22V7Z' fill='black' />
                                    <path
                                      opacity='0.3'
                                      d='M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z'
                                      fill='black'
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </div>
                              {/*end::CVV icon*/}
                            </div>
                            {/*end::Input wrapper*/}
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className='d-flex flex-stack'>
                          {/*begin::Label*/}
                          <div className='me-5'>
                            <label className='fs-6 fw-bold form-label'>
                              Save Card for further billing?
                            </label>
                            <div className='fs-7 fw-bold text-muted'>
                              If you need more info, please check budget planning
                            </div>
                          </div>
                          {/*end::Label*/}
                          {/*begin::Switch*/}
                          <label className='form-check form-switch form-check-custom form-check-solid'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              defaultValue={1}
                              defaultChecked='checked'
                            />
                            <span className='form-check-label fw-bold text-muted'>Save Card</span>
                          </label>
                          {/*end::Switch*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Actions*/}
                        <div className='text-center pt-15'>
                          <button
                            type='reset'
                            id='kt_modal_new_card_cancel'
                            className='btn btn-light me-3'
                          >
                            Discard
                          </button>
                          <button
                            type='submit'
                            id='kt_modal_new_card_submit'
                            className='btn btn-primary'
                          >
                            <span className='indicator-label'>Update</span>
                            <span className='indicator-progress'>
                              Please wait...
                              <span className='spinner-border spinner-border-sm align-middle ms-2' />
                            </span>
                          </button>
                        </div>
                        {/*end::Actions*/}
                      </form>
                      {/*end::Form*/}
                    </div>
                    {/*end::Modal body*/}
                  </div>
                  {/*end::Modal content*/}
                </div>
                {/*end::Modal dialog*/}
              </div>
              {/*end::Modal - New Card*/}
              {/*end::Modals*/}
            </div>
            {/*end::Container*/}
          </div>
        </div>
      </div>

      <div id='kt_scrolltop' className='scrolltop' data-kt-scrolltop='true'>
        {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
        <span className='svg-icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
          >
            <rect
              opacity='0.5'
              x={13}
              y={6}
              width={13}
              height={2}
              rx={1}
              transform='rotate(90 13 6)'
              fill='black'
            />
            <path
              d='M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z'
              fill='black'
            />
          </svg>
        </span>
        {/*end::Svg Icon*/}
      </div>
    </>
  )
}
