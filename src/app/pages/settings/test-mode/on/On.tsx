import React from 'react'
import { Link } from 'react-router-dom'

function TestMode() {
    return (
        <div>
        <div className='card ' >
         <div className='card-body py-4' style={{ overflowX: "scroll" }}>
         <h1 className='mb-5'>Super Admin List (View)</h1>
           <table className="table table-striped table-hover ">
             <thead>
               <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
                 <th scope="col">Name</th>
                 <th scope="col" className=''>Email</th>
                 <th scope="col">Work Phone Number</th>
               </tr>
             </thead>
             <tbody className='text-gray-600 fw-bold'>
             <tr>
                 <td> Humpheries,   Chris </td>
                 <td> </td>
                 <td> </td>
               </tr>

               <tr>
                 <td> Varlack-Humpheries,   Nakisha </td>
                 <td> info@guardianhaven.com </td>
                 <td> </td>
               </tr>

             </tbody>
           </table>
         </div>
       </div>

       
       <div className='d-flex justify-content-start'>
                <div>
                    <Link to='/settings'>
                        <button className='btn btn-primary mt-4 me-4'>Back</button>
                    </Link>
                </div>
            </div>

     </div>
    )
}

export { TestMode }