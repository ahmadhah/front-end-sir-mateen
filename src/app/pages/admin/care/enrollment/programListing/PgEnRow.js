import React from 'react'

const PgEnRow = ({ individual, setDelistKey, index }) => {
    return (
        <tr>
            <td>
                {index+1}
            </td>
            <td>
                {individual.individual}
            </td>
            <td>
                {individual.gender}
            </td>
            <td>
                {individual.socialSecurityNumber}
            </td>
            <td>
                {individual.birthDate}
            </td>
            <td>
                <span className='text-primary mb-1' role="button"
                style={{textDecoration: "underline"}}
                onClick={() => setDelistKey(individual._id)}>Discharge</span>
            </td>
        </tr>
    )
}

export default PgEnRow