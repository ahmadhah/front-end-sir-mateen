/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

function Search() {
    return (
        <div>
            <div className='fv-row mb-7 fv-plugins-icon-container p-5 card'>
                <div className='card-body'>
                    <h1 className='mb-5'>MAR Data (Search)</h1>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Form ID</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Form ID'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Individual</label>
                            <input
                                type='text'
                                name='user_name'
                                className='form-control form-control-solid mb-3 mb-lg-0'
                                placeholder='Individual'
                            ></input>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Month</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option value=''>Select Month</option>
                                <option value=''>January</option>
                                <option value=''>February</option>
                                <option value=''>March</option>
                                <option value=''>April</option>
                                <option value=''>May</option>
                                <option value=''>June</option>
                                <option value=''>July</option>
                                <option value=''>August</option>
                                <option value=''>September</option>
                                <option value=''>October</option>
                                <option value=''>November</option>
                                <option value=''>December</option>
                            </select>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-3'>
                            <label className=' fw-bold fs-6 mb-2'>Year</label>
                            <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg example'>
                                <option value=''>Select Year</option>
                                <option value=''>2023</option>
                                <option value=''>2022</option>
                                <option value=''>2021</option>
                                <option value=''>2020</option>
                                <option value=''>2019</option>
                                <option value=''>2018</option>
                                <option value=''>2017</option>
                                <option value=''>2016</option>
                                <option value=''>2015</option>
                                <option value=''>2014</option>
                                <option value=''>2013</option>
                                <option value=''>2012</option>
                                <option value=''>2011</option>
                                <option value=''>2010</option>
                                <option value=''>2009</option>
                                <option value=''>2008</option>
                                <option value=''>2007</option>
                                <option value=''>2006</option>
                                <option value=''>2005</option>
                            </select>
                        </div>
                       

                        <div className='d-flex flex-stack'>
                            <div>
                                <Link to='/health/medicationadministrationrecord'>
                                    <button className='btn btn-primary mt-4'>Cancel</button>
                                </Link>
                            </div>
                            <div className=''>
                                <button className='btn btn-primary mt-4  '>Search</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search