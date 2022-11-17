/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Search() {

    const [notificationlevel, setNotificationLevel] = useState("")
    const [status, setStatus] = useState("")
    const [heightweight, setHeightWeight] = useState("")

    useEffect(() => {

        axios.get("/health/showheightweight", {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                console.log(response)
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
        let submit_date_from = e.target[4].value;
        let submit_date_to = e.target[5].value;
        let notification_level = e.target[6].value;
        let status = e.target[7].value;


        postHeightWeight(form_id, program_site, individual, entered_by, submit_date_from, submit_date_to, notification_level, status);
    }
    const postHeightWeight = (form_id, program_site, individual, entered_by, submit_date_from, submit_date_to, notification_level, status) => {
        let data = {
            form_id: form_id,
            program_site: program_site,
            individual: individual,
            entered_by: entered_by,
            submit_date_from: submit_date_from,
            submit_date_to: submit_date_to,
            notification_level: notification_level,
            status: status
        };
        // console.log(data);

        axios.post("/health/newheightweight", data,
            {
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                }
            }).then(response => {
                console.log(response)
                setHeightWeight(response)
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
                    }}>
                        <h1 className='mb-5'>Height/Weight (Search)</h1>
                        <div className='row'>
                            <div style={{ backgroundColor: "BlanchedAlmond" }} className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                                <p className='mt-3'>Form ID or Individual or Date Range Required</p>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Form ID</label>
                                <input
                                    type='text'
                                    name='form_id'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder='Form ID'
                                ></input>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Program (Site)</label>
                                <input
                                    type='text'
                                    name='program_site'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder='Program (Site)'
                                ></input>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Individual</label>
                                <input
                                    type='text'
                                    name='individual'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder='Individual'
                                ></input>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Entered By</label>
                                <input
                                    type='text'
                                    name='entered_by'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder='Entered By'
                                ></input>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'> Submit Date From</label>
                                <input
                                    type='date'
                                    name='submit_date_from'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder=''
                                    required
                                ></input>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'> Submit Date To</label>
                                <input
                                    type='date'
                                    name='submit_date_to'
                                    className='form-control form-control-solid mb-3 mb-lg-0'
                                    placeholder=''
                                    required
                                ></input>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Status</label>
                                <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example' name='status'>
                                    <option value=''>Select Status</option>
                                    <option value='In Prep'>In Prep</option>
                                    <option value='Approved'>Approved</option>
                                </select>
                            </div>
                            <div className='col-xl-6col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                                <label className=' fw-bold fs-6 mb-2'>Notification Level</label>
                                <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example' name='notification_level'>
                                    <option value=''>Select Notification Level</option>
                                    <option value='Low'>Low</option>
                                    <option value='Medium'>Medium</option>
                                    <option value='High'>High</option>
                                </select>
                            </div>

                            <div className='d-flex flex-stack'>
                                <div>
                                    <Link to='/health/healthtracking'>
                                        <button className='btn btn-primary mt-4'>Cancel</button>
                                    </Link>
                                </div>
                                <div className=''>
                                    <button className='btn btn-primary mt-4'>
                                        Search</button>
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