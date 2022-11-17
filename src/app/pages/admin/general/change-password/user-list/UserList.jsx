import React from 'react'

function UserList() {
    return (
        <div>
            <div className='card ' >
                <div className='card-body py-4' style={{ overflowX: "scroll" }}>
                    <table className="table table-striped table-hover ">
                        <thead>
                            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
                                <th scope="col">Login Name</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Title</th>
                                <th scope="col">Employee ID</th>
                                <th scope="col">Status</th>
                                <th scope="col">Status Action</th>
                                <th scope="col">Lock/Unlock</th>
                                <th scope="col">Lock/Unlock Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-600 fw-bold'>
                        <tr>
                <td>Algood</td>
                <td>Shane</td>
                <td>0000004038</td>
                <td>06/23/1974</td>
                <td></td>
                <td>Active</td>
                <td>Activate</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Alvarez</td>
                <td>Jessenia</td>
                <td>0000211534</td>
                <td>10/05/1993</td>
                <td></td>
                <td>Active</td>
                <td>Activate</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Ambrose</td>
                <td>Shelley</td>
                <td>0000176739</td>
                <td>04/28/1997</td>
                <td></td>
                <td>Active</td>
                <td>Activate</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Andrews</td>
                <td>Isaac</td>
                <td>0043818</td>
                <td>03/16/1997</td>
                <td></td>
                <td>Active</td>
                <td>Activate</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Ballard</td>
                <td>Michelle</td>
                <td>0000171331</td>
                <td>11/20/1979</td>
                <td></td>
                <td>Active</td>
                <td>Activate</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Banter</td>
                <td>Ayla</td>
                <td>8663264755</td>
                <td>10/08/1996</td>
                <td></td>
                <td>Active</td>
                <td>Activate</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Becknel</td>
                <td>Alyssa</td>
                <td>0000191851</td>
                <td>03/06/1999</td>
                <td></td>
                <td>Active</td>
                <td>Activate</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Bejarano-Velasquez</td>
                <td>Ursula</td>
                <td>81032</td>
                <td>05/03/1991</td>
                <td></td>
                <td>Active</td>
                <td>Activate</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Bell</td>
                <td>Chileah</td>
                <td>00000000CB</td>
                <td>12/14/1981</td>
                <td></td>
                <td>Active</td>
                <td>Activate</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Bousquet</td>
                <td>Ryan</td>
                <td>0001021376</td>
                <td>06/21/1981</td>
                <td></td>
                <td>Active</td>
                <td>Activate</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr><td>Briere</td>
                <td>Melanie</td>
                <td>8899731152</td>
                <td>03/29/1994</td>
                <td></td>
                <td>Active</td>
                <td>Activate</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Broome</td>
                <td>Timothy</td>
                <td>0000014571</td>
                <td>06/05/1969</td>
                <td></td>
                <td>Active</td>
                <td>Activate</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr><td>Bruggeman</td>
                <td>John</td>
                <td>29810</td>
                <td>01/12/1994</td>
                <td></td>
                <td>Active</td>
                <td>Activate</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr><td>Byerly</td>
                <td>Kenneth</td>
                <td>8163946334</td>
                <td>08/13/1992</td>
                <td></td>
                <td>Active</td>
                <td>Activate</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
              <tr><td>Castagner</td>
                <td>Frisco</td>
                <td>0000024317</td>
                <td>03/21/1990</td>
                <td></td>
                <td>Active</td>
                <td>Activate</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserList