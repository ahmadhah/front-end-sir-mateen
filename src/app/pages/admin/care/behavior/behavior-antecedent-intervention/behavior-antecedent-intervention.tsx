import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import data from './BAIData.json'
import BAIRow from './BAIRow';
import Pagination from '../../../../../../_helper/paginationHook/Pagination';

const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required("Name is required"),
  type: Yup.string()
    .required("Type is required"),
  category: Yup.string()
    .required("Category is required"),
  description: Yup.string()
    .max(3000, "Maximum 3000 characters")
})

let PageSize = 5;

const BehaviorAntecedentIntervention = () => {
  const [behaviorList, setBehaviorList] = useState<{
    name: string; category: string; enteredBy: string; lastUpdateBy: string; status: string; type: string
  }[]>([])
  const [antecedentList, setAntecedentList] = useState<{}[]>([])
  const [interventionList, setInterventionList] = useState<{}[]>([])
  const [newEntry, setNewEntry] = useState({})
  const [editEntryData, setEntryData] = useState({})
  const [deleteEntryData, setDeleteEntryData] = useState({
    name: '',
    category: '',
    enteredBy: '',
    lastUpdateBy: '',
    status: '',
    type: ''
  })
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    let tempBehavior = []
    let tempAntecedent = []
    let tempIntervention = []
    for (const element of data) {
      if (element.type === "Behavior") {
        tempBehavior.push(element)
      } else if (element.type === "Antecedent") {
        tempAntecedent.push(element)
      } else if (element.type === "Intervention") {
        tempIntervention.push(element)
      }
    }
    setBehaviorList(tempBehavior)
    setAntecedentList(tempAntecedent)
    setInterventionList(tempIntervention)
  }, [])

  useEffect(() => {

  }, [editEntryData])

  useEffect(() => {
    // if(deleteEntryDat){
      setBehaviorList(prevState => 
        prevState.filter((behavior) => behavior.name !== deleteEntryData.name) 
      )
    // }
  }, [deleteEntryData])

  const currentTableData = useMemo(() => {
    let tempdata = behaviorList
    console.log("I should runtwice", tempdata)
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return tempdata.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, behaviorList]);

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className='card card-flush h-md-100 w-100'>
          <div className='fv-row fv-plugins-icon-container px-5 card'>
            <Formik
              // enableReinitialize
              initialValues={{
                name: '',
                type: '',
                category: '',
                description: ''
              }}
              validationSchema={registrationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setNewEntry(values)
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false)
                }, 400)
              }}
            >
              <div className='card-body'>
                <p className='text-gray-800 fs-2 fw-bolder'>Add New</p>
                <div className='row'>
                  <Form>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3'>
                      <label className=' fw-bold fs-6 mb-2'>Name</label>
                      <Field
                        name='name'
                        className='form-control form-control-solid mb-3 mb-lg-0'
                        placeholder='Name'
                        autoComplete="off"
                      />
                    </div>
                    <ErrorMessage name="name" component="div" className='text-danger' />
                    <div className="d-flex w-100">
                      <div className='w-50'>
                        <label className=' fw-bold fs-6 mb-2'>Type</label>
                        <Field as="select" className='form-select form-select-lg mb-3'
                          name="type" aria-label='.form-select-lg example'>
                          <option hidden>Select Type</option>
                          <option value='Behavior'>Behavior</option>
                          <option value='Intervention'>Intervention</option>
                          <option value='Antecedents'>Antecedents</option>
                        </Field>
                        <ErrorMessage name="type" component="div" className='text-danger' />
                      </div>
                      <div className='w-50'>
                        <label className=' fw-bold fs-6 mb-2'>Categories</label>
                        <Field as="select" className='form-select form-select-lg mb-3'
                          name="category" aria-label='.form-select-lg example'>
                          <option hidden>Select Categories</option>
                          <option value='Assualtive'>Assualtive</option>
                          <option value='Attention Seeking'>Attention Seeking</option>
                          <option value='Mental Health'>Mental Health</option>
                          <option value='Non-Compliant'>Non-Compliant</option>
                          <option value='Obsessive-Compulsive'>Obsessive-Compulsive</option>
                          <option value='Positive Behavior'>Positive Behavior</option>
                          <option value='Property Destruction'>Property Destruction</option>
                          <option value='Self Injurious'>Self Injurious</option>
                          <option value='Self Stimulation'>Self Stimulation</option>
                          <option value='Speech'>Speech</option>
                        </Field>
                        <ErrorMessage name="category" component="div" className='text-danger' />
                      </div>
                    </div>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3'>
                      <label className=' fw-bold fs-6 mb-2'>Description</label>
                      <Field
                        as="textarea"
                        name='description'
                        className='form-control form-control-solid mb-3 mb-lg-0'
                        placeholder='Add description here...'
                      />
                      <ErrorMessage name="description" component="div" className='text-danger' />
                    </div>
                    <div className='d-flex d-flex justify-content-end'>
                      <div>
                        <button className='btn btn-primary mt-4' type="submit">Add</button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </Formik>
          </div>
        </div>
      </div>


      {/* Behavior List */}
      <div className="d-flex justify-content-center mt-6">
        <div className='card card-flush h-md-100 w-100'>
          <div className='fv-row mb-7 fv-plugins-icon-container px-5 card'>
            <div className='card-body'>
              <p className='text-gray-800 fs-2 fw-bolder'>Behavior List</p>
              <div className="row">
                <div className='card-title'>
                  <div className='d-flex align-items-center position-relative overflow-auto my-1'>
                    <span className='svg-icon svg-icon-1 position-absolute ms-6'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                      >
                        <rect
                          opacity='0.5'
                          x='17.0365'
                          y='15.1223'
                          width='8.15546'
                          height={2}
                          rx={1}
                          transform='rotate(45 17.0365 15.1223)'
                          fill='black'
                        />
                        <path
                          d='M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z'
                          fill='black'
                        />
                      </svg>
                    </span>
                    <input
                      type='text'
                      data-kt-customer-table-filter='search'
                      className='form-control form-control-solid w-250px ps-15'
                      placeholder='Search Behavior'
                    />
                  </div>
                </div>
              </div>
              <div className='card-body table-responsive pt-0'>
                <table
                  className='table align-middle table-row-dashed fs-6 gy-5'
                  id='kt_behavior_table'
                >
                  <thead>
                    <tr className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                      <th className="min-w-200px">Name</th>
                      <th className="min-w-100px">Category</th>
                      <th className="min-w-100px">Status</th>
                      <th className="min-w-200px">Entered By</th>
                      <th className='min-w-50px'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTableData.map((behavior, index) => (
                      <Fragment key={index}>
                        <BAIRow behavior={behavior} setEntryData={setEntryData} setDeleteEntryData={setDeleteEntryData} />
                      </Fragment>
                    ))}
                  </tbody>
                </table>
                <div className="d-flex justify-content-center">
                  <Pagination
                    className='pagination-bar'
                    currentPage={currentPage}
                    totalCount={behaviorList.length}
                    pageSize={PageSize}
                    onPageChange={(page: React.SetStateAction<number>) => setCurrentPage(page)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BehaviorAntecedentIntervention