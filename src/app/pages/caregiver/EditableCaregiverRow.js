/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from 'react'

const EditableCaregiverRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <>
    <form></form>
      <tr>
        <td>
          <div className='form-check form-check-sm form-check-custom form-check-solid'>
            <input className='form-check-input widget-13-check' type='checkbox' defaultValue={1} />
          </div>
        </td>
        <td>
          <input
            type='text'
            className='form-control form-control-solid'
            placeholder='Enter a name...'
            name='name'
            value={editFormData.name}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type='text'
            className='form-control form-control-solid'
            placeholder='Enter an address...'
            name='gender'
            value={editFormData.gender}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type='text'
            className='form-control form-control-solid'
            placeholder='Enter a phone number...'
            name='address'
            value={editFormData.address}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type='text'
            className='form-control form-control-solid'
            placeholder='Enter an email...'
            name='admission'
            value={editFormData.admission}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type='text'
            className='form-control form-control-solid'
            placeholder='Enter an email...'
            name='status'
            value={editFormData.status}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type='text'
            className='form-control form-control-solid'
            placeholder='Enter an email...'
            name='clienttype'
            value={editFormData.clienttype}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <button type='submit'>Save</button>
          <button type='button' onClick={handleCancelClick}>
            Cancel
          </button>
        </td>
      </tr>
      
    </>
  )
}

export default EditableCaregiverRow
