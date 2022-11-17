/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable */
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function New() {

   // POST Method call
   const submit = e => {
    let domainname = e.target[0].value;
    let domainurl = e.target[1].value;
    let publishername = e.target[2].value;
    let domainparameters = e.target[3].value;

    postCustomer(domainname, domainurl, publishername, domainparameters);
  }
  const postCustomer = (domainname, domainurl, publishername, domainparameters) => {
    let data = {
      domainname: domainname,
      domainurl: domainurl.toLowerCase(),
      publishername: publishername,
      domainparameters: domainparameters
    };
    // console.log(data);

    axios.post("/auth/register", data,
      {
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        }
      }).then(response => {
        console.log(response); 
        // if (response.data.errStatus === 1) {
        //   setError(response.data.msg)
        // }
        // else if (response.data.errStatus === 2) {
        //   setError(response.data.msg)
        // }
        // else {
        //   ReactDOM.render(<Domains></Domains>, document.getElementById('db-admin-content'))
        // }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
        <div className='card-body'>
          <h1 className='mb-5'>Create New User</h1>
          <div className='row'>
            <h3 className='mb-5 mt-5 text-primary display-7'>User Information</h3>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>First Name</label>
              <input
                type='text'
                name='firstName'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='First Name'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Last Name</label>
              <input
                type='text'
                name='lastName'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Last Name'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>User Initials</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='User Initials'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Login Name</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Login Name'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Password</label>
              <input
                type='password'
                name='password'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Password'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Confirm Password</label>
              <input
                type='password'
                name='confirmPassword'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Confirm Password'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Ignore Password Policy </label>
              <div className='form-check mt-2 mb-4'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios1'
                  value='option1'

                />
                <label className='form-check-label' for='exampleRadios1'>
                  Yes
                </label>
              </div>
              <div className='form-check mt-2 mb-4'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios3'
                  value='option3'
                />
                <label className='form-check-label' for='exampleRadios3'>
                  No
                </label>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Time Zone</label>
              <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                <option value=''>Select Time Zone</option>
                <option value=''>US/Eastern</option>
              </select>
            </div>
          </div>
        </div>
      </div>


      <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
        <div className='card-body'>
          <div className='row'>
            <h3 className='mb-5 text-primary display-7'>Account Settings</h3>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Status </label>
              <div className='form-check mt-2 mb-4'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios1'
                  value='option1'
                />
                <label className='form-check-label' for='exampleRadios1'>
                  Active
                </label>
              </div>
              <div className='form-check mt-2 mb-4'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios3'
                  value='option3'
                />
                <label className='form-check-label' for='exampleRadios3'>
                  Pending
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
        <div className='card-body'>
          <div className='row'>
            <h3 className='mb-5 text-primary display-7'>Employer/Work Information</h3>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Title</label>
              <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                <option value=''>Select Title</option>
                <option value=''>Administration</option>
                <option value=''>Assistant Team Lead</option>
                <option value=''>Behaviour Assistant</option>
                <option value=''>Cheif Operating</option>
                <option value=''>CNA</option>
                <option value=''>Direct Care Staff</option>
                <option value=''>Direct Care Staff Med Asst</option>
                <option value=''>Owner</option>
                <option value=''>Program Lead</option>
                <option value=''>Teaching Assistant</option>
                <option value=''>Team Lead</option>
              </select>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Employee ID Number</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Employee ID Number'
              ></input>
            </div>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Hire Date</label>
              <input
                type='date'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Hire Date'
              ></input>
            </div>
          </div>
        </div>
      </div>


      <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
        <div className='card-body'>
          <div className='row'>
            <h3 className='mb-5 text-primary display-7'>Self Enrollment</h3>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Self Enrollment Account </label>
              <div className='form-check mt-2 mb-4'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios1'
                  value='option1'
                />
                <label className='form-check-label' for='exampleRadios1'>
                  Yes
                </label>
              </div>
              <div className='form-check mt-2 mb-4'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='exampleRadios'
                  id='exampleRadios3'
                  value='option3'
                />
                <label className='form-check-label' for='exampleRadios3'>
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex flex-stack'>
        <div className=''>
          <Link to='/admin/general'>
            <button className='btn btn-primary mt-4'>Back</button>
          </Link>
        </div>
        <div>
          <button className='btn btn-primary mt-4  '>Save</button>
        </div>
      </div>

    </div>
  )
}

export default New