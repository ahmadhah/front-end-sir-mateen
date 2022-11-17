import React from 'react'
import { Link } from 'react-router-dom'

function New() {
  return (
    <div>
      <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
        <div className='card-body'>
          <h1 className='mb-4'>Scoring Method (New)</h1>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3 '>
              <label className=' fw-bold fs-6 mb-2'>Scoring Method Name</label>
              <input
                type='text'
                name='user_name'
                className='form-control form-control-solid mb-3 mb-lg-0'
                placeholder='Scoring Method Name'
                required
              ></input>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
              <label className=' fw-bold fs-6 mb-2'> Number of Scoring Method Levels</label>
              <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                <option selected>Select  Number of Scoring Method Levels</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
                <option value='15'>15</option>
                <option value='16'>16</option>
                <option value='17'>17</option>
              </select>
            </div>
            <div className='d-flex d-flex justify-content-start'>
              <div>
                <button className='btn btn-primary mt-4  '>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='fv-row mb-7 p-5 card'>
          <div className='d-flex flex-stack'>
            <div>
              <Link to='/care/isp-program-scoring-method'>
                <button className='btn btn-primary mt-4 me-4'>Cancel</button>
              </Link>
              <Link to='/care/isp-program-scoring-method'>
                <button className='btn btn-primary mt-4'>Back</button>
              </Link>
            </div>
            <div>
              <button className='btn btn-primary mt-4'>Save</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default New