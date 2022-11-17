import { Link } from "react-router-dom"
const IndividualListingRow = ({ indvidual }) => {
  return (
    <tr>
      <td>
        <Link to={{
          pathname: `/care/enrollment/individualsprogram/`,
          state: indvidual
        }}>
          <span className="text-gray-800 text-hover-primary mb-1"
            style={{ cursor: "pointer" }}
          >
            {indvidual.formID}
          </span>
        </Link>
      </td>
      <td>
        <Link to={{
          pathname: `/care/enrollment/individualsprogram/`,
          state: indvidual
        }}>
          <span className="text-gray-800 text-hover-primary mb-1"
            style={{ cursor: "pointer" }}
          >
            {indvidual.individual}
          </span>
        </Link>
      </td>
      <td>
        <Link to={{
          pathname: `/care/enrollment/individualsprogram/`,
          state: indvidual
        }}>
          <span className="text-gray-800 text-hover-primary mb-1"
            style={{ cursor: "pointer" }}
          >
            {indvidual.socialSecurityNumber}
          </span>
        </Link>
      </td>
      <td>
        <Link to={{
          pathname: `/care/enrollment/individualsprogram/`,
          state: indvidual
        }}>
          <span className="text-gray-800 text-hover-primary mb-1"
            style={{ cursor: "pointer" }}
          >
            {indvidual.medicaidNumber}
          </span>
        </Link>
      </td>
      <td>
        <Link to={{
          pathname: `/care/enrollment/individualsprogram/`,
          state: indvidual
        }}>
          <span className="text-gray-800 text-hover-primary mb-1"
            style={{ cursor: "pointer" }}
          >
            {indvidual.status}
          </span>
        </Link>
      </td>
      <td>
        <Link to={{
          pathname: `/care/enrollment/individualsprogram/`,
          state: indvidual
        }}>
          <span className="text-gray-800 text-hover-primary mb-1"
            style={{ cursor: "pointer" }}
          >
            {indvidual.birthDate}
          </span>
        </Link>
      </td>
    </tr>
  )
}

export default IndividualListingRow