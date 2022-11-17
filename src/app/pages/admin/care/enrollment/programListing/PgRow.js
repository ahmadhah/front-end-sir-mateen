const PgRow = ({ individual, setEnrollKey, index }) => {
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
                onClick={() => setEnrollKey(individual._id)}>Enroll</span>
            </td>
        </tr>
    )
}

export default PgRow