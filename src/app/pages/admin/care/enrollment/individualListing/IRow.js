const IRow = ({ program, setEnrollKey }) => {
    return (
        <tr>
            <td>
                {program._id}
            </td>
            <td>
                {program.programName}
            </td>
            <td>
                {program.programType}
            </td>
            <td>
                {program.siteName}
            </td>
            <td>
                {program.createDate}
            </td>
            <td>
                <span className='text-primary mb-1' role="button"
                    style={{ textDecoration: "underline" }}
                    onClick={() => setEnrollKey(program._id)}>
                    Add
                </span>
            </td>
        </tr>
    )
}

export default IRow