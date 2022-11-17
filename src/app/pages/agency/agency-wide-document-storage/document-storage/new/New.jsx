import React from 'react'

function New() {
  return (
    <div>
      <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
        <div className='card-body'>
          <h1 className='mb-4'>Document Storage New</h1>
          <div className='row'>
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Type</label>
              <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                <option selected>Open this select menu</option>
                <option value='1'>Behavior Assistant Certification</option>
                <option value='2'>First Aid Certification</option>
                <option value='3'>Direct Care Core Competencies Certification</option>
                <option value='3'>Good Moral Charecter Documentation</option>
                <option value='3'>HIPAA Certification</option>
                <option value='3'>AIDS Certification</option>
                <option value='3'>Level 2 Background Screening</option>
                <option value='3'>Medical Administration 65g-7</option>
                <option value='3'>Oprating Guide Line</option>
                <option value='3'>PCM Certification</option>
                <option value='3'>Training Material</option>
              </select>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
              <label className=' fw-bold fs-6 mb-2'>Received Date From</label>
              <input
                type='date'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Valid From</label>
              <input
                type='date'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Valid To</label>
              <input
                type='date'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Description </label>
              <textarea
                type='date'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></textarea>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Comment </label>
              <textarea
                type='date'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></textarea>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'>Document </label>
              <input
                type='file'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder=''
              ></input>
            </div>
           
          </div>
          <div className='d-flex flex-stack'>
            <div></div>
            <div>
              <button className='btn btn-primary mt-4  '>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New