import React from 'react'

function List() {
  return (
    <div>
      <div className='card ' >
        <div className='card-body py-4' style={{ overflowX: "scroll" }}>
          <div style={{ backgroundColor: "BlanchedAlmond" }} className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
            <p style={{ padding: "10px" }}><b>  NOTE: </b>Types / Categories can only be deleted if they haven't been used. Otherwise they will be discontinued and will be displayed here.</p>
          </div>
        </div>
      </div>

      <div className='card ' >
        <div className='card-body py-4' style={{ overflowX: "scroll" }}>
        <h1 style={{ padding: "10px", backgroundColor: "#99CCFF" }} className='mb-5 py-4'>Account Type</h1>
          <table className="table table-striped table-hover ">
            <thead>
              <tr style={{ backgroundColor: "#99CCFF" }} className='text-dark text-start fw-bolder fs-7 text-uppercase gs-0 py-4'>
                <th scope="col">Lable</th>
                <th scope="col">Description</th>
                <th scope="col">Entered By</th>
                <th scope="col">Updated By</th>
                <th scope="col">Discontinued By</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody className='text-gray-600 fw-bold'>
              <tr>
                <td>Burial Trust Account</td>
                <td>System Generated</td>
                <td></td>
                <td></td>
                <td></td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>Burial Trust Account</td>
                <td>System Generated</td>
                <td></td>
                <td></td>
                <td></td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>Burial Trust Account</td>
                <td>System Generated</td>
                <td></td>
                <td></td>
                <td></td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>Burial Trust Account</td>
                <td>System Generated</td>
                <td></td>
                <td></td>
                <td></td>
                <td>Approved</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default List