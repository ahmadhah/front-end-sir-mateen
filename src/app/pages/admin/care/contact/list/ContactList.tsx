import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import ContactRow from './ContactRow'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import data from '../../individual-mock-data.json'
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

const ContactList = () => {
    const [deleteContactId, setDeleteContactId] = useState('')
    const [contacts, setContacts] = useState<{
        _id: string; individual: string; socialSecurityNumber: string;
        medicaidNumber: string; medicareNumber: string; status: string; birthDate: string;
        caseStatus: string; enteredBy: string; admittedBy: string; lastUpdatedBy: string;
        admissionDate: string; individualIDNumber: string; formID: string;
    }[]>([])
    const [editContactData, setEditContactData] = useState({
        _id: '',
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
        formID: '',
    })

    useEffect(() => {
        // axios.get('/contacts/getContacts')
        //     .then((res) => {
        //         setContacts(res.data)
        //     })
        setContacts(data)
    }, [])

    const onDeleteContact = () => {
        let tempObj = {
            deleteID: deleteContactId
        }
        // axios.delete('contacts/deleteContact', {
        //     data: tempObj
        // })
        // .then(() => {
        //     setContacts((prevState) => 
        //         prevState.filter((contact) => contact._id !== deleteContactId)
        //     );
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
                                    id='kt_contacts_table'
                                >
                                    <thead>
                                        <tr className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                                            <th className="min-w-100px">Form ID</th>
                                            <th className="min-w-200px">Individual</th>
                                            <th className="min-w-200px">Social Security Number</th>
                                            <th className="min-w-200px">Status</th>
                                            <th className='min-w-100px'>email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {contacts.map((contact, index) => (
                                            <Fragment key={index}>
                                                <ContactRow contact={contact} setEditContactData={setEditContactData} setDeleteContactId={setDeleteContactId} />
                                            </Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactList