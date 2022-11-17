const IEnRow = ({ program, setDelistKey }) => {
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
                    onClick={() => setDelistKey(program._id)}>
                    Remove
                </span>
            </td>
        </tr>
    )
}

export default IEnRow