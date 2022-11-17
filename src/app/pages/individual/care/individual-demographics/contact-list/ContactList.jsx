import React from 'react'

function ContactList() {
  return (
    <div>
      <div className='card ' >
        <div className='card-body py-4' style={{ overflowX: "scroll" }}>
          <table className="table table-striped table-hover ">
            <thead>
              <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
                <th scope="col">Form ID</th>
                <th scope="col">Individual</th>
                <th scope="col">Social Security Number</th>
                <th scope="col">Medicaid Number</th>
                <th scope="col">Medicare Number</th>
                <th scope="col">Status</th>
                <th scope="col">Birth Date</th>
                <th scope="col">Case Status</th>
                <th scope="col">Entered By</th>
                <th scope="col">Admitted By</th>
                <th scope="col">Last Update By</th>
                <th scope="col">Admission Date</th>
                <th scope="col">Individual ID Number</th>
                <th scope="col">Time Zone</th>
              </tr>
            </thead>
            <tbody className='text-gray-600 fw-bold'>
              <tr>
                <td>IDF-GHAFL-HBB4WN3SPFHTS</td>
                <td>Abraham, Ephrem</td>
                <td>593170176</td>
                <td>8132757351</td>
                <td></td>
                <td>Discharged</td>
                <td>11/02/1991</td>
                <td></td>
                <td>Varlack-Humpheries, Nakisha / Owner</td>
                <td></td>
                <td>Caleb, Timeka / Program Lead</td>
                <td></td>
                <td>0000155633</td>
                <td>US/Eastern</td>
              </tr>

              <tr>
                <td>IDF-GHAFL-HBB4WN3SPFHTS</td>
                <td>Abraham, Ephrem</td>
                <td>593170176</td>
                <td>8132757351</td>
                <td></td>
                <td>Discharged</td>
                <td>11/02/1991</td>
                <td></td>
                <td>Varlack-Humpheries, Nakisha / Owner</td>
                <td></td>
                <td>Caleb, Timeka / Program Lead</td>
                <td></td>
                <td>0000155633</td>
                <td>US/Eastern</td>
              </tr>

              <tr>
                <td>IDF-GHAFL-HBB4WN3SPFHTS</td>
                <td>Abraham, Ephrem</td>
                <td>593170176</td>
                <td>8132757351</td>
                <td></td>
                <td>Discharged</td>
                <td>11/02/1991</td>
                <td></td>
                <td>Varlack-Humpheries, Nakisha / Owner</td>
                <td></td>
                <td>Caleb, Timeka / Program Lead</td>
                <td></td>
                <td>0000155633</td>
                <td>US/Eastern</td>
              </tr>

              <tr>
                <td>IDF-GHAFL-HBB4WN3SPFHTS</td>
                <td>Abraham, Ephrem</td>
                <td>593170176</td>
                <td>8132757351</td>
                <td></td>
                <td>Discharged</td>
                <td>11/02/1991</td>
                <td></td>
                <td>Varlack-Humpheries, Nakisha / Owner</td>
                <td></td>
                <td>Caleb, Timeka / Program Lead</td>
                <td></td>
                <td>0000155633</td>
                <td>US/Eastern</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ContactList