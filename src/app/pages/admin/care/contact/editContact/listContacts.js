import React, { useEffect, useState } from 'react'
import contactData from '../../contact-mock-data.json'
import { useHistory, Link } from 'react-router-dom'
import ListContactRows from './ListContactRows'

const ListContacts = ({ location }) => {
    const [contacts, setContacts] = useState([])
    const [contactsList, setContactsList] = useState([])

    let individualData = location.state
    const history = useHistory()
    useEffect(() => {
        if (location.state === undefined) {
            history.push('/care/contact/list')
        }
    }, [])

    useEffect(() => {
        let conData = contactData.filter(contact => contact.individualIDNumber === individualData.individualIDNumber)
        setContactsList(conData)
    }, [])

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className='card card-flush h-md-100 w-100'>
                    <div className="d-flex justify-content-start w-100">
                        <div className="card-header">
                            <div className="card-title">
                                <h4 className="fw-bolder">List of Contacts under: {individualData.individual}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card-body d-flex justify-content-center py-1">
                        <table
                            className='table align-middle table-row-dashed fs-6 gy-5'
                            id='kt_contacts_table'>
                            <thead className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                                <tr>
                                    <th className="min-w-200px">
                                        Name
                                    </th>
                                    <th className="min-w-200px">
                                        Relation To Individual
                                    </th>
                                    <th className="min-w-200px">
                                        Emergency Contact
                                    </th>
                                    <th className="min-w-200px">
                                        Email
                                    </th>
                                    <th className="min-w-100px">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {contactsList.map((contact, index) => (
                                    <ListContactRows contact={contact} key={index} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListContacts