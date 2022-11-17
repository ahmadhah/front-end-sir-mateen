import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function New() {
  const [showResAddr, setShowResAddr] = useState(false)
  const [showMailingAddr, setShowMailingAddr] = useState(false)
  return (
    <div>
      <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
        <div className='card-body'>
          <h1 className='mb-5'>Individual Demographic Form (IDF) (New)</h1>
          <div className='row'>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Image</label>
              <input
                type='file'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
              <label className=' fw-bold fs-6 mb-2'>Photo 1 Date</label>
              <input
                type='date'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Title</label>
              <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                <option value=''>Select Title</option>
                <option value=''>Mr</option>
                <option value=''>Miss</option>
                <option value=''>Mrs</option>
                <option value=''>Ms</option>
                <option value=''>Mx</option>
              </select>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Gender</label>
              <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                <option value=''>Select Title</option>
                <option value=''>Male</option>
                <option value=''>Female</option>
                <option value=''>Unknown</option>
              </select>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>First Name</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='First Name'
                required
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Middle Name</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Middle Name'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Last Name</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Last Name'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Suffix</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Suffix'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
              <label className=' fw-bold fs-6 mb-2'>Birth Date</label>
              <input
                type='date'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Goes By</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Goes By'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>SSN</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='xxx-xx-xxxx / xxxxxxxxx'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Medicaid Number</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Medicaid Number'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Email</label>
              <input
                type='email'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Medicaid Number'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Phone Number</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Phone Number'
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Race</label>
              <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                <option value=''>Select Race</option>
                <option value=''>American Indian/Alaskan Native</option>
                <option value=''>Asian</option>
                <option value=''>Asian Indian</option>
                <option value=''>Black/African American</option>
                <option value=''>Chinese</option>
                <option value=''>Declined</option>
                <option value=''>Filipino</option>
                <option value=''>Guamanian or chamorro</option>
                <option value=''>Japanese</option>
                <option value=''>Korean</option>
                <option value=''>Multiracial</option>
                <option value=''>Native Hawaiian/Other Pacific Islander</option>
                <option value=''>Samoan</option>
                <option value=''>Undetermined</option>
                <option value=''>Unknown</option>
                <option value=''>Vietnamese</option>
                <option value=''>White</option>
                <option value=''>Other</option>
              </select>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Ethnicity / Hispanic Origin</label>
              <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                <option value=''>Select Ethnicity / Hispanic Origin</option>
                <option value=''>Bengali</option>
                <option value=''>Central American</option>
                <option value=''>Chakma</option>
                <option value=''>Chinese</option>
                <option value=''>Cuban</option>
                <option value=''>Hispanic</option>
                <option value=''>Indian</option>
                <option value=''>Magar</option>
                <option value=''>Malays</option>
                <option value=''>Marma</option>
                <option value=''>Mexican</option>
                <option value=''>Moor</option>
                <option value=''>Newar</option>
                <option value=''>Not Hispanic or Latino</option>
                <option value=''>Other Spanish Origin</option>
                <option value=''>Puerto Rican</option>
                <option value=''>Sinhalese</option>
                <option value=''>South American</option>
                <option value=''>Tamang</option>
                <option value=''>Tamil</option>
                <option value=''>Tharu</option>
                <option value=''>Unable to determine</option>
              </select>
            </div>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Class Membership</label>
              <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                <option value=''>Select Class Membership</option>
              </select>
            </div>
          </div>
          <div className="d-flex">
            <div className='d-flex justify-content-center my-1'>
              <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20 mt-3">
                Residential Address
                <input type="checkbox" name="residentialAddr" className="mx-2"
                  onChange={() => {
                    if (showResAddr) {
                      setShowMailingAddr(false)
                      setShowResAddr(false)
                    } else {
                      setShowResAddr(true)
                    }
                  }} />
              </label>
            </div>
          </div>
          {showResAddr ?
            <div className='row'>
              <h3 className='mt-5 mb-5 text-primary display-7'>Residential Address</h3>
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                <label className=' fw-bold fs-6 mb-2'>Residential Program / Site Address</label>
                <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                  <option value=''>Select Residential Program / Site Address</option>
                </select>
              </div>
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                <label className=' fw-bold fs-6 mb-2'>Attention or in care of</label>
                <input
                  type='text'
                  name='user_name'
                  className='form-control form-control-solid mb-3 mb-lg-0'
                  placeholder='Attention or in care of'
                ></input>
              </div>

              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                <label className=' fw-bold fs-6 mb-2'>Address</label>
                <div className='row'>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                    <input
                      type='text'
                      name='user_name'
                      className='form-control form-control-solid mb-3 mb-lg-0'
                      placeholder='Street 1'
                    ></input>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                    <input
                      type='text'
                      name='user_name'
                      className='form-control form-control-solid mb-3 mb-lg-0'
                      placeholder='Street 2'
                    ></input>
                  </div>
                </div>
              </div>


              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                <div className='row'>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                    <input
                      type='text'
                      name='user_name'
                      className='form-control form-control-solid mb-3 mb-lg-0'
                      placeholder='City'
                    ></input>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                    <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                      <option value=''>Select State</option>
                    </select>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                    <input
                      type='text'
                      name='user_name'
                      className='form-control form-control-solid mb-3 mb-lg-0'
                      placeholder='Zip Code'
                    ></input>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                    <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                      <option value=''>Select Country</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                <label className=' fw-bold fs-6 mb-2'>Location</label>
                <input
                  type='location'
                  name='user_name'
                  className='form-control form-control-solid mb-3 mb-lg-0'
                  placeholder=''
                ></input>
              </div>

              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                <label className=' fw-bold fs-6 mb-2'>Primary Phone</label>
                <input
                  type='text'
                  name='user_name'
                  className='form-control form-control-solid mb-3 mb-lg-0'
                  placeholder=''
                ></input>
              </div>

              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                <label className=' fw-bold fs-6 mb-2'>Secondary Phone</label>
                <input
                  type='text'
                  name='user_name'
                  className='form-control form-control-solid mb-3 mb-lg-0'
                  placeholder=''
                ></input>
              </div>

              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                <label className=' fw-bold fs-6 mb-2'>Additional Phone</label>
                <input
                  type='text'
                  name='user_name'
                  className='form-control form-control-solid mb-3 mb-lg-0'
                  placeholder=''
                ></input>
              </div>


              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                <label className=' fw-bold fs-6 mb-2'>Residential County State</label>
                <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                  <option value=''>Select Residential County State</option>
                </select>
              </div>

              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                <label className=' fw-bold fs-6 mb-2'>Residential County</label>
                <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                  <option value=''>Select Residential County</option>
                </select>
              </div>

              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                <label className=' fw-bold fs-6 mb-2'>Service County State</label>
                <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                  <option value=''>Select Service County State</option>
                </select>
              </div>

              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                <label className=' fw-bold fs-6 mb-2'>Service County</label>
                <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                  <option value=''>Select Service County</option>
                </select>
              </div>

              <div className="d-flex">
                <div className='w-50'>
                  <h6>Is Mailing Address the same as Residential?</h6>
                </div>
                <div className='d-flex'>
                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20 mt-3">
                    Yes
                    <input type="radio" name="mailingAddr" className="mx-2"
                      onChange={() => { setShowMailingAddr(false) }} />
                  </label>
                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20 mt-3">
                    No
                    <input type="radio" name="mailingAddr" className="mx-2"
                      onChange={() => { setShowMailingAddr(true) }} />
                  </label>
                </div>
              </div>
            </div>

            : null
          }


        </div>
        {
          showMailingAddr ?
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
              <div className='card-body'>
                <div className='row'>
                  <h3 className='mb-5 text-primary display-7'>Mailing Address</h3>

                  <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                    <label className=' fw-bold fs-6 mb-2'>Attention or in care of</label>
                    <div className='row'>
                      <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                        <input
                          type='text'
                          name='user_name'
                          className='form-control form-control-solid mb-3 mb-lg-0'
                          placeholder='Attention or in care of'
                        ></input>
                      </div>
                      <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                        <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                          <span className='form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2'>
                            Same as Primary Address
                          </span>
                          <input className='form-check-input' type='checkbox' value='' />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                    <label className=' fw-bold fs-6 mb-2'>Address</label>
                    <div className='row'>
                      <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                        <input
                          type='text'
                          name='user_name'
                          className='form-control form-control-solid mb-3 mb-lg-0'
                          placeholder='Street 1'
                        ></input>
                      </div>
                      <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                        <input
                          type='text'
                          name='user_name'
                          className='form-control form-control-solid mb-3 mb-lg-0'
                          placeholder='Street 2'
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                    <div className='row'>
                      <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                        <input
                          type='text'
                          name='user_name'
                          className='form-control form-control-solid mb-3 mb-lg-0'
                          placeholder='City'
                        ></input>
                      </div>
                      <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                        <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                          <option value=''>Select State</option>
                        </select>
                      </div>
                      <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                        <input
                          type='text'
                          name='user_name'
                          className='form-control form-control-solid mb-3 mb-lg-0'
                          placeholder='Zip Code'
                        ></input>
                      </div>
                      <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 my-3'>
                        <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                          <option value=''>Select Country</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                    <label className=' fw-bold fs-6 mb-2'>Primary Phone</label>
                    <input
                      type='text'
                      name='user_name'
                      className='form-control form-control-solid mb-3 mb-lg-0'
                      placeholder=''
                    ></input>
                  </div>


                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                    <label className=' fw-bold fs-6 mb-2'>Secondary Phone</label>
                    <input
                      type='text'
                      name='user_name'
                      className='form-control form-control-solid mb-3 mb-lg-0'
                      placeholder=''
                    ></input>
                  </div>

                  <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                    <label className=' fw-bold fs-6 mb-2'>Additional Phone</label>
                    <input
                      type='text'
                      name='user_name'
                      className='form-control form-control-solid mb-3 mb-lg-0'
                      placeholder=''
                    ></input>
                  </div>

                </div>
              </div>
            </div>
            : null
        }
      </div>
      <div className='d-flex flex-stack'>
        <div>
          <Link to='/care/individual-intake'>
            <button className='btn btn-primary mt-4 me-4'>Cancel</button>
          </Link>
          <Link to='/care/individual-intake'>
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