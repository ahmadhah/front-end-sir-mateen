/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

function Worklist() {
    return (
        <div>
            <div className='card'>
                <h3 className='p-7'>Care Plan Template Worklist</h3>
                <div className='card-body'>
                    <h1 className='text-center p-7'>Nothing found to display</h1>
                </div>
            </div>
            <div className='d-flex flex-stack'>
                <div>
                    <Link to='/health/careplan'>
                        <button className='btn btn-primary mt-4'>Cancel</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Worklist