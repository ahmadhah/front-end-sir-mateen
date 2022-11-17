import { Fragment, useEffect, useState } from 'react'
import individualData from '../../individual-mock-data.json'
import programData from '../../program-mock-data.json'
import IEnRow from './IEnRow'
import IRow from './IRow'
import { useHistory, Link } from 'react-router-dom'

const IndividualProgramList = ({ location }: { location: { state: { individual: string, birthDate: string, caseStatus: string } } }) => {
    const [enrolledProgs, setEnrolledProgs] = useState<any[]>([])
    const [enrollableProgs, setEnrollableProgs] = useState<any[]>([])
    const [enrollKey, setEnrollKey] = useState('')
    const [delistKey, setDelistKey] = useState('')
    const history = useHistory()

    useEffect(() => {
        console.log(location.state)
        let SingleIndividual = location.state
        let selected = []
        let notSelected = []
        for (const element of programData) {
            if (element.individualsAdded.includes(SingleIndividual.individual)) {
                selected.push(element)
            } else {
                notSelected.push(element)
            }
        }
        setEnrolledProgs(selected)
        setEnrollableProgs(notSelected)
    }, [])

    useEffect(() => {
        if (enrollKey) {
            console.log(enrollKey)
            let indObj = programData.find(element => element._id === enrollKey);
            console.log(indObj)
            setEnrolledProgs([...enrolledProgs, indObj])
            setEnrollableProgs(prevState =>
                prevState.filter((ind) => ind._id !== enrollKey)
            )
            setEnrollKey('')
        }
    }, [enrollKey])

    useEffect(() => {
        if (delistKey) {
            console.log(delistKey)
            let indObj = programData.find(element => element._id === delistKey);
            console.log(indObj)
            setEnrollableProgs([...enrollableProgs, indObj])
            setEnrolledProgs(prevState =>
                prevState.filter((ind) => ind._id !== delistKey)
            )
            setDelistKey('')
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
                                        onClick={() => history.push('/care/enrollment/by-individual')}>Cancel</button>
                                </div>
                            </div>
                        </div>

                        <div className="card-body py-1">
                            <div className="d-flex py-4">
                                <label className="w-50 fw-bolder form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Individual Name:</label>
                                <label className="w-50 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">{location.state?.individual}</label>
                            </div>
                            <div className="d-flex py-4">
                                <label className="w-50 fw-bolder form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Birth Date:</label>
                                <label className="w-50 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">{location.state?.birthDate}</label>
                            </div>
                            <div className="d-flex py-4">
                                <label className="w-50 fw-bolder form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">Individual Satus:</label>
                                <label className="w-50 form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">{location.state?.caseStatus}</label>
                            </div>
                            <div className="py-3">
                                <hr />
                                <div className='d-flex justify-content-between py-6'>
                                    <h6 className='fw-bolder py-3'>Enrollable Program(s)</h6>

                                </div>
                                <table className='table align-middle table-row-dashed fs-6 gy-5' id='kt_programInd_table'>
                                    <thead>
                                        <tr className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                                            <th className="min-w-50px">ID</th>
                                            <th className="min-w-100px">Program Name</th>
                                            <th className="min-w-100px">Program Type</th>
                                            <th className="min-w-100px">Site Name</th>
                                            <th className="min-w-100px">Created Date</th>
                                            <th className="min-w-100px">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            enrollableProgs.length > 0 ?
                                                enrollableProgs.map((program, index) => (
                                                    <Fragment key={index}>
                                                        <IRow program={program} setEnrollKey={setEnrollKey} />
                                                    </Fragment>
                                                ))
                                                :
                                                <tr>
                                                    <td align="center" colSpan={6}><span className='text-gray-600 fs-2 fw-bolder'>This Individual is already enrolled into all programs</span></td>
                                                </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="py-6">
                                <hr />
                                <h6 className='fw-bolder py-3'>Enrolled Program(s)</h6>
                                <table className='table align-middle table-row-dashed fs-6 gy-5' id='kt_programInd_table'>
                                    <thead>
                                        <tr className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                                            <th className="min-w-50px">ID</th>
                                            <th className="min-w-100px">Program Name</th>
                                            <th className="min-w-100px">Program Type</th>
                                            <th className="min-w-100px">Site Name</th>
                                            <th className="min-w-100px">Created Date</th>
                                            <th className="min-w-100px">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            enrolledProgs.length > 0 ?
                                                enrolledProgs.map((program, index) => (
                                                    <Fragment key={index}>
                                                        <IEnRow program={program} setDelistKey={setDelistKey} />
                                                    </Fragment>
                                                ))
                                                :
                                                <tr>
                                                    <td align="center" colSpan={6}><span className='text-gray-600 fs-2 fw-bolder'>This Individual is enrolled into no programs</span></td>
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
                        <p className='text-gray-800 fs-2 fw-bolder'>No Individual Selected</p>
                        <Link to='/care/enrollment/by-program' className="btn btn-primary btn-active-secondary">
                            Click here to go back
                        </Link>
                    </div>
                </div>

            }
        </div>
    )
}

export default IndividualProgramList