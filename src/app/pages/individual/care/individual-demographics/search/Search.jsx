import React from 'react'
import { Link } from 'react-router-dom'

function Search() {
  return (
    <div>
      <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
        <div className='card-body'>
          <h1 className='mb-4'>Individual Search</h1>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Individual</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Search'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
              <label className=' fw-bold fs-6 mb-2'>Social Security Number</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Social Security Number'
              ></input>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
              <label className=' fw-bold fs-6 mb-2'>Medicaid Number</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Medicaid Number'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
              <label className=' fw-bold fs-6 mb-2'>Medicare Number</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Medicare Number'
              ></input>
            </div>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3 '>
              <label className=' fw-bold fs-6 mb-2'>Form ID</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
              <label className=' fw-bold fs-6 mb-2'>Birth Date From</label>
              <input
                type='date'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Birth Date To</label>
              <input
                type='date'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Admission Date From</label>
              <input
                type='date'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Admission Date To</label>
              <input
                type='date'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Status</label>
              <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                <option selected>Open this select menu</option>
                <option value='1'>Admitted</option>
                <option value='2'>Pending Admission</option>
                <option value='3'>Withdrawn</option>
                <option value='4'>Discharged</option>
                <option value='5'>Deceased</option>
              </select>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Individual ID Type</label>
              <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                <option selected>Select Individual ID Type</option>
                <option value='1'>FL, Area 1, Early Step</option>
                <option value='2'>FL, Big Bend, CBC</option>
                <option value='3'>FL, Broward County, Children's Services Council</option>
                <option value='4'>FL, Central, APD</option>
                <option value='5'>FL, Daytona, Community Partnership for Children</option>
                <option value='5'>FL, District 10, Agency for Persons with Disabilities</option>
                <option value='5'>FL, District 11, Agency for Persons with Disabilities</option>
                <option value='5'>FL, District 12, Agency for Persons with Disabilities</option>
                <option value='5'>FL, District 13, Agency for Persons with Disabilities</option>
                <option value='5'>FL, District 14, Agency for Persons with Disabilities</option>
                <option value='5'>FL, District 15, Agency for Persons with Disabilities</option>
                <option value='5'>FL, District 23, Agency for Persons with Disabilities</option>
                <option value='5'>FL, District 3, Agency for Persons with Disabilities</option>
                <option value='5'>FL, District 4, Agency for Persons with Disabilities</option>
                <option value='5'>FL, District 7, Agency for Persons with Disabilities</option>
                <option value='5'>FL, District 9, Agency for Persons with Disabilities</option>
                <option value='5'>FL, Escambia, School Readiness Early Learning Coalition</option>
                <option value='5'>FL, FL, APD Room & Board</option>
                <option value='5'>FL, FL, APD/Medicaid</option>
                <option value='5'>FL, FL, APD/Medicaid</option>
                <option value='5'>FL, FL, ASO Children's Board</option>
                <option value='5'>FL, FL, CDC Plus</option>
                <option value='5'>FL, FL, DOB/DOA</option>
                <option value='5'>FL, FL, EEP - Employment Enhancement Project</option>
                <option value='5'>FL, FL, FLORIDA</option>
                <option value='5'>FL, FL, Graduate Program</option>
                <option value='5'>FL, FL, Heartland</option>
                <option value='5'>FL, FL, HHID</option>
                <option value='5'>FL, FL, Insurance Number</option>
                <option value='5'>FL, FL, Kids Central Inc.</option>
                <option value='5'>FL, FL, Kids Direct Inc.</option>
              </select>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Individual ID Number</label>
              <input
                type='date'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>


            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Case Status</label>
              <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                <option selected>Open this select menu</option>
                <option value='1'>Active</option>
                <option value='2'>Application Withdrawn</option>
                <option value='3'>Awaiting Discharge</option>
                <option value='3'>Closed - Deceased</option>
                <option value='3'>Closed - Individual Choice</option>
                <option value='3'>Closed - Moved Out of State</option>
                <option value='3'>Closed - No Response</option>
                <option value='3'>DD Eligible/Waiver Ineligible</option>
                <option value='3'>Home Health Only</option>
                <option value='3'>Inactive</option>
                <option value='3'>Leave of Absence</option>
                <option value='3'>Long Term Hospitalization</option>
                <option value='3'>Long Term Hospitalization</option>
                <option value='3'>PASRR</option>
              </select>
            </div>


            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Program (Site)</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Entered By</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
          </div>
          <div className='d-flex flex-stack'>
            <div>
              <Link to='/individual/care'>
                <button className='btn btn-primary mt-4'>Cancel</button>
              </Link>
            </div>
            <div>
              <button className='btn btn-primary mt-4 me-4'>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search