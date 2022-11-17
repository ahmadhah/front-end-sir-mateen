import React from 'react'

function Report() {
  return (
    <div>
      <div className='card ' >
        <div className='card-body py-4' style={{ overflowX: "scroll" }}>
          <table className="table table-striped table-hover ">
            <thead>
              <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
                <th scope="col">Program Name</th>
                <th scope="col" className=''>Site Name</th>
                <th scope="col" className=''>Program Type</th>
                <th scope="col">Cost Center Number</th>
                <th scope="col">Program ID</th>
              </tr>
            </thead>
            <tbody className='text-gray-600 fw-bold'>
              <tr>
                <td>
                  Adult Day Training
                </td>
                <td>
                  Guardian Haven Academy
                </td>
                <td>
                  Adult Day Training
                </td>
                <td>

                </td>
                <td>
                  100069300
                </td>
              </tr><tr>
                <td>
                  Transportation
                </td>
                <td>
                  Guardian Haven Academy
                </td>
                <td>
                  Transportation
                </td>
                <td>

                </td>
                <td>
                  100069300
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Report