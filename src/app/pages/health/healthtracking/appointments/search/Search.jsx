/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Search() {

    const [appointmentreason, setAppointmentReason] = useState("")
    const [appointmentstatus, setAppointmentStatus] = useState("")
    const [notificationlevel, setNotificationLevel] = useState("")
    const [appointment, setAppointment] = useState("")
    const [status, setStatus] = useState("")

    useEffect(() => {

        axios.get("/health/showappointment", {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                console.log(response)
                setAppointment(response);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    // POST Method call
    const submit = e => {
        let form_id = e.target[0].value;
        let program_site = e.target[1].value;
        let individual = e.target[2].value;
        let entered_by = e.target[3].value;
        let appointment_date_from = e.target[4].value;
        let appointment_date_to = e.target[5].value;
        let specialty = e.target[6].value;
        let appointment_reason = e.target[7].value;
        let appointment_status = e.target[8].value;
        let notification_level = e.target[9].value;
        let status = e.target[10].value;
        let consultant = e.target[11].value;
        let hospital_name = e.target[12].value;

        postAppointments(form_id, program_site, individual, entered_by, appointment_date_from, appointment_date_to, specialty, appointment_reason, appointment_status, notification_level, status, consultant, hospital_name);
    }

    const postAppointments = (form_id, program_site, individual, entered_by, appointment_date_from, appointment_date_to, specialty, appointment_reason, appointment_status, notification_level, status, consultant, hospital_name) => {
        let data = {
            form_id: form_id,
            program_site: program_site,
            individual: individual,
            entered_by: entered_by,
            appointment_date_from: appointment_date_from,
            appointment_date_to: appointment_date_to,
            specialty: specialty,
            appointment_reason: appointment_reason,
            appointment_status: appointment_status,
            notification_level: notification_level,
            status: status,
            consultant: consultant,
            hospital_name: hospital_name
        };
        // console.log(data);

        axios.post("/health/newappointment", data,
            {
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                }
            }).then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    };


    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <form onSubmit={(e) => {
                                        submit(e);
                                        e.preventDefault();
                                    }} >
                        <h1 className='mb-5'>Appointment (Search)</h1>
                        <div className='row'>
                            <div style={{ backgroundColor: "BlanchedAlmond" }} className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                                <p className='mt-3'>Form ID or Individual or Date Range Required</p>
                            </div>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Form ID</label>
                                <input
                                    type='text'
                                    name='form_id'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder='Form ID'
                                    // onChange={(e) => { setFromID(e.target.value) }}
                                ></input>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Program (Site)</label>
                                <input
                                    type='text'
                                    name='program_site'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder='Program (Site)'
                                    // onChange={(e) => { setProgramSite(e.target.value) }}
                                ></input>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Individual</label>
                                <input
                                    type='text'
                                    name='individual'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder='Individual'
                                    // onChange={(e) => { setIndividual(e.target.value) }}
                                ></input>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Entered By</label>
                                <input
                                    type='text'
                                    name='entered_by'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder='Entered By'
                                    // onChange={(e) => { setEnteredBy(e.target.value) }}
                                ></input>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'> Appointment Date From</label>
                                <input
                                    type='date'
                                    name='appointment_date_from'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder=''
                                    // onChange={(e) => { setAppointmentDateFrom(e.target.value) }}
                                    required
                                ></input>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'> Appointment Date To</label>
                                <input
                                    type='date'
                                    name='appointment_date_to'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder=''
                                    // onChange={(e) => { setAppointmentDateTo(e.target.value) }}
                                    required
                                ></input>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Specialty</label>
                                <input
                                    type='text'
                                    name='specialty'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder='Specialty'
                                    // onChange={(e) => { setSpecialty(e.target.value) }}
                                ></input>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Reason for Appointment</label>
                                <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example' name='appointment_reason'
                                    onChange={(e) => { setAppointmentReason(e.target.value) }} 
                                    >
                                    <option value=''>Select Reason for Appointment</option>
                                    <option value='Annual Dental Screening'>Annual Dental Screening</option>
                                    <option value='Annual Physical'>Annual Physical</option>
                                    <option value='Annual Visit'>Annual Visit</option>
                                    <option value='Colonoscopy'>Colonoscopy</option>
                                    <option value='Consultation'>Consultation</option>
                                    <option value='Dental Cleaning'>Dental Cleaning</option>
                                    <option value='DEXA Scan'>DEXA Scan</option>
                                    <option value='Eye Exam'>Eye Exam</option>
                                    <option value='Follow-up Appointment'>Follow-up Appointment</option>
                                    <option value='Hearing Exam'>Hearing Exam</option>
                                    <option value='Immunization'>Immunization</option>
                                    <option value='Lab Work'>Lab Work</option>
                                    <option value='Mammogram'>Mammogram</option>
                                    <option value='New Appointment'>New Appointment</option>
                                    <option value='OB/GYN Exam & Pap'>OB/GYN Exam & Pap</option>
                                    <option value='Podiatry'>Podiatry</option>
                                    <option value='PSA Screening'>PSA Screening</option>
                                    <option value='Psychiatric Consultation'>Psychiatric Consultation</option>
                                    <option value='Radiology'>Radiology</option>
                                    <option value='Regularly scheduled'>Regularly scheduled</option>
                                    <option value='Screening'>Screening</option>
                                    <option value='Therapy'>Therapy</option>
                                    <option value='Other'>Other</option>
                                </select>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Status</label>
                                <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example' name='status' onChange={(e) => { setStatus(e.target.value) }} >
                                    <option value=''>Select Status</option>
                                    <option value='In Prep'>In Prep</option>
                                    <option value='Approved'>Approved</option>
                                </select>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Notification Level</label>
                                <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example' name='notification_level'
                                    onChange={(e) => { setNotificationLevel(e.target.value) }} >
                                    <option value=''>Select Notification Level</option>
                                    <option value='Low'>Low</option>
                                    <option value='Medium'>Medium</option>
                                    <option value='High'>High</option>
                                </select>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Appointment Status</label>
                                <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example' name='appointment_status' onChange={(e) => { setAppointmentStatus(e.target.value) }} >
                                    <option value=''>Select Appointment Status</option>
                                    <option value='Scheduled'>Scheduled</option>
                                    <option value='Not Scheduled'>Not Scheduled</option>
                                    <option value='Rescheduled'>Rescheduled</option>
                                    <option value='Results Pending'>Results Pending</option>
                                    <option value='Completed'>Completed</option>
                                    <option value='Cancelled'>Cancelled</option>
                                    <option value='Missed'>Missed</option>
                                    <option value='Declined'>Declined</option>
                                </select>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Consultant Name</label>
                                <input
                                    type='text'
                                    name='consultant'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder='Consultant Name'
                                    // onChange={(e) => { setConsultant(e.target.value) }} 
                                    >
                                </input>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Hospital Name</label>
                                <input
                                    type='text'
                                    name='hospital_name'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder='Hospital Name'
                                    // onChange={(e) => { setHospitalName(e.target.value) }}
                                     >
                                </input>
                            </div>

                            <div className='d-flex flex-stack'>
                                <div>
                                    <Link to='/health/healthtracking'>
                                        <button className='btn btn-primary mt-4'>Cancel</button>
                                    </Link>
                                </div>
                                <div className=''>
                                    <button className='btn btn-primary mt-4' 
                                    // onSubmit={(e) => {
                                    //     submit(e);
                                    //     e.preventDefault();
                                    // }}
                                    >Search</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search