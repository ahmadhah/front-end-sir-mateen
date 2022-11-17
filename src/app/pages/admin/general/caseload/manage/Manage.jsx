/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

function Manage() {

    return (
        <div>
            <div className='card ' >
                <div className='card-body py-4' style={{ overflowX: "scroll" }}>
                    <table className="table table-striped table-hover ">
                        <thead>
                            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
                                <th scope="col">Caseload</th>
                                <th scope="col">Caseload Type</th>
                                <th scope="col">Action</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-600 fw-bold'>
                            <tr>
                                <td>All Admitted Individual Caseload (GHA-FL)</td>
                                <td>All Individual</td>
                                <td>View</td>
                                <td>Assigned To</td>
                            </tr>
                            <tr>
                                <td>All Admitted Individual Caseload (GHA-FL)</td>
                                <td>All Individual</td>
                                <td>View</td>
                                <td>Assigned To</td>
                            </tr>
                            <tr>
                                <td>All Admitted Individual Caseload (GHA-FL)</td>
                                <td>All Individual</td>
                                <td>View</td>
                                <td>Assigned To</td>
                            </tr>
                            <tr>
                                <td>All Admitted Individual Caseload (GHA-FL)</td>
                                <td>All Individual</td>
                                <td>View</td>
                                <td>Assigned To</td>
                            </tr>
                            <tr>
                                <td>All Admitted Individual Caseload (GHA-FL)</td>
                                <td>All Individual</td>
                                <td>View</td>
                                <td>Assigned To</td>
                            </tr>
                            <tr>
                                <td>All Admitted Individual Caseload (GHA-FL)</td>
                                <td>All Individual</td>
                                <td>View</td>
                                <td>Assigned To</td>
                            </tr>
                            <tr>
                                <td>All Admitted Individual Caseload (GHA-FL)</td>
                                <td>All Individual</td>
                                <td>View</td>
                                <td>Assigned To</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <div className='card ' >
                    <div className='card-body py-4' style={{ overflowX: "scroll" }}>
                        <div className='d-flex flex-stack'>
                            <div>
                                <Link to='/admin/general'>
                                    <button className='btn btn-primary mt-4'>Cancel</button>
                                </Link>
                            </div>
                            <div>
                                <button className='btn btn-primary mt-4  '>Create New Caseload</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Manage