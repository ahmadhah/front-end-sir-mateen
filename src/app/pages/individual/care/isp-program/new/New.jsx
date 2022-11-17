import React from 'react'

function New() {
  return (
    <div>
      <div className='card ' >
        <div className='card-body py-4' style={{ overflowX: "scroll" }}>
          <table className="table table-striped table-hover ">
            <thead>
              <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
                <th scope="col">Program Name</th>
                <th scope="col">Site Name</th>
                <th scope="col">program Type</th>
                <th scope="col">Cost Center Number</th>
                <th scope="col">Program ID</th>
              </tr>
            </thead>
            <tbody className='text-gray-600 fw-bold'>
              <tr className=''>
                <td>Adult Day Training</td>
                <td>Guardian Haven Academy</td>
                <td>Adult Day Training</td>
                <td></td>
                <td>100069300</td>
              </tr>
              <tr className=''>
                <td>Transportation</td>
                <td>Guardian Haven Academy</td>
                <td>Transportaion</td>
                <td></td>
                <td>100069300</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default New