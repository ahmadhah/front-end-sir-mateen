import { Fragment, useEffect, useState } from 'react'
import individualData from '../../individual-mock-data.json'
import PgRow from './PgRow'
import PgEnRow from './PgEnRow'
import { useHistory, Link } from 'react-router-dom'

const ProgramIndividuals = ({ location }: { location: { state: { individualsAdded: string[], programName: string, siteName: string } } }) => {
    const [enrolledInds, setEnrolledInds] = useState<any[]>([])
    const [enrollableInds, setEnrollableInds] = useState<any[]>([])
    const [enrollKey, setEnrollKey] = useState('')
    const [delistKey, setDelistKey] = useState('')
    const history = useHistory()


    useEffect(() => {
        if (location.state !== undefined) {
            let tempvar = location.state.individualsAdded
            let enrolled = []
            let notenrolled = []
            for (const element of individualData) {
                if (tempvar.includes(element.individual)) {
                    enrolled.push(element)
                } else {
                    notenrolled.push(element)
                }
            }
            setEnrolledInds(enrolled)
            setEnrollableInds(notenrolled)
        }
    }, [])

    useEffect(() => {
        if (enrollKey) {
            let indObj = individualData.find(element => element._id === enrollKey);
            setEnrolledInds([...enrolledInds, indObj])
            setEnrollableInds(prevState =>
                prevState.filter((ind) => ind._id !== enrollKey)
            )
        }
    }, [enrollKey])

    useEffect(() => {
        if (delistKey) {
            let indObj = individualData.find(element => element._id === delistKey);
            setEnrollableInds([...enrollableInds, indObj])
            setEnrolledInds(prevState =>
                prevState.filter((ind) => ind._id !== delistKey)
            )
        }
    }, [delistKey])
    return (
        <div>
            {location.state !== undefined ?
                <div className="d-flex justify-content-center">
                    <div className="card card-flush h-md-100 w-100">
                        <div className='d-flex justify-content-between w-100'>
                            <div className="card-header w-75">
                                <div className="card-title">
                                    <p className='text-gray-800 fs-2 fw-bolder'>Program Details</p>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <div className="d-flex justify-content-center">
                                    <button className='btn btn-primary btn-active-secondary mx-2'>Save</button>
                                    <button className='btn btn-secondary btn-active-primary mx-2'
                                        onClick={() => history.push('/care/enrollment/by-program')}>Cancel</button>
                                </div>
                            </div>
                        </div>

                        <div className="card-body py-1">
                            <div className="d-flex py-4">
                                <label className="w-50 fw-bolder form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Program Name:</label>
                                <label className="w-50 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">{location.state?.programName}</label>
                            </div>
                            <div className="d-flex py-4">
                                <label className="w-50 fw-bolder form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Site Name:</label>
                                <label className="w-50 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">{location.state?.siteName}</label>
                            </div>
                            <div className="py-3">
                                <hr />
                                <div className='d-flex justify-content-between py-6'>
                                    <h6 className='fw-bolder py-3'>Enrollable Individual(s)</h6>

                                </div>
                                <table className='table align-middle table-row-dashed fs-6 gy-5' id='kt_programInd_table'>
                                    <thead>
                                        <tr className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                                            <th className="min-w-50px">ID</th>
                                            <th className="min-w-100px">Name</th>
                                            <th className="min-w-100px">Gender</th>
                                            <th className="min-w-200px">Social Security Number</th>
                                            <th className="min-w-100px">Birth Date</th>
                                            <th className="min-w-100px">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            enrollableInds.length > 0 ?
                                                enrollableInds.map((ind, index) => (
                                                    <Fragment key={index}>
                                                        <PgRow individual={ind} setEnrollKey={setEnrollKey} index={index} />
                                                    </Fragment>
                                                ))
                                                :
                                                <tr>
                                                    <td align="center" colSpan={6}><span className='text-gray-600 fs-2 fw-bolder'>No Individuals to Enroll in this program</span></td>
                                                </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="py-6">
                                <hr />
                                <h6 className='fw-bolder py-3'>Enrolled Individual(s)</h6>
                                <table className='table align-middle table-row-dashed fs-6 gy-5' id='kt_programInd_table'>
                                    <thead>
                                        <tr className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                                            <th className="min-w-50px">ID</th>
                                            <th className="min-w-100px">Name</th>
                                            <th className="min-w-100px">Gender</th>
                                            <th className="min-w-100px">Social Security Number</th>
                                            <th className="min-w-100px">Birth Date</th>
                                            <th className="min-w-100px">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            enrolledInds.length > 0 ?
                                                enrolledInds.map((ind, index) => (
                                                    <Fragment key={index}>
                                                        <PgEnRow individual={ind} setDelistKey={setDelistKey} index={index} />
                                                    </Fragment>
                                                ))
                                                :
                                                <tr>
                                                    <td align="center" colSpan={6}><span className='text-gray-600 fs-2 fw-bolder'>No Individuals are enrolled in this program</span></td>
                                                </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='d-flex justify-content-center'>
                    <div>
                        <p className='text-gray-800 fs-2 fw-bolder'>No Program Selected</p>
                        <Link to='/care/enrollment/by-program' className="btn btn-primary btn-active-secondary">
                            Click here to go back
                        </Link>
                    </div>
                </div>

            }

        </div>
    )
}

export default ProgramIndividuals