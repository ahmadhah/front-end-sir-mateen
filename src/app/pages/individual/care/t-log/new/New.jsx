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
                <th scope="col">Program Type</th>
                <th scope="col">Cost Center Number</th>
                <th scope="col">Program ID</th>
              </tr>
            </thead>
            <tbody className='text-gray-600 fw-bold'>
              <tr>
                <td>Algood</td>
                <td>Shane</td>
                <td>0000004038</td>
                <td>06/23/1974</td>
                <td>10/05/1993</td>
              </tr>
              <tr>
                <td>Alvarez</td>
                <td>Jessenia</td>
                <td>0000211534</td>
                <td>10/05/1993</td>
                <td>10/05/1993</td>
              </tr>


            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default New