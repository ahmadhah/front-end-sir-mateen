import { Link } from 'react-router-dom'

const SingleRole = ({ roleName, financialManagement, payouts, reports, disputes, userControl, rolesProperties, role, userRoles }) => {
    const viewTo = {
        pathname: "/viewrole",
        roledata: {
            roleName: roleName,
            rolesProperties: rolesProperties,
            role: role
        }
    };
    const editTo = {
        pathname: "/editrole",
        roledata: {
            roleName: roleName,
            rolesProperties: rolesProperties,
            role: role
        }
    }
    return (
        <div>
            {/*begin::Col*/}
            <div className="cc-4">
                {/*begin::Card*/}
                <div className="card card-flush h-md-100">
                    {/*begin::Card header*/}
                    <div className="card-header">
                        {/*begin::Card title*/}
                        <div className="card-title">
                            <h2>{roleName}</h2>
                        </div>
                    </div>
                    <div className="card-body pt-1">
                        {/*begin::Users*/}
                        <div className="fw-bolder text-gray-600 mb-5">Total users with this role: {userRoles[roleName] > 0 ? userRoles[roleName] : 0}</div>
                        {/*end::Users*/}
                        {/*begin::Permissions*/}
                        <div className="d-flex flex-column text-gray-600">
                            <div className="d-flex align-items-center py-2">
                                <span className="bullet bg-primary me-3" />{financialManagement.read === true && financialManagement.write === true && financialManagement.create === true ? "Full Access to Financial Summaries" :
                                    financialManagement.read === true && financialManagement.write === true ? "View and Edit Financial Summaries" :
                                        financialManagement.create === true && financialManagement.write === true ? "Edit Financial Summaries" :
                                            financialManagement.read === true ? "View Financial Summaries" :
                                                "No access to Financial Summaries"}
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <span className="bullet bg-primary me-3" />{payouts.read === true && payouts.write === true && payouts.create === true ? "Full Access to Payouts" :
                                    payouts.read === true && payouts.write === true ? "View and Edit Payouts" :
                                        payouts.create === true && payouts.write === true ? "Edit Payouts" :
                                            payouts.read === true ? "View Payouts" :
                                                "No access to Payouts"}
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <span className="bullet bg-primary me-3" />{reports.read === true && reports.write === true && reports.create === true ? "Enabled Bulk Reports" :
                                    reports.read === true && reports.write === true ? "View and Edit Reports" :
                                        reports.create === true && reports.write === true ? "Edit Reports" :
                                            reports.read === true ? "View Reports" :
                                                "No access to Reports"}
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <span className="bullet bg-primary me-3" />{disputes.read === true && disputes.write === true && disputes.create === true ? "Full Access to Disputes" :
                                    disputes.read === true && disputes.write === true ? "View and Edit Disputes" :
                                        disputes.create === true && disputes.write === true ? "Edit Disputes" :
                                            disputes.read === true ? "View Disputes" :
                                                "No access to Disputes"}
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <span className="bullet bg-primary me-3" />{userControl.read === true && userControl.write === true && userControl.create === true ? "Full Access to Users Management" :
                                    userControl.read === true && userControl.write === true ? "View and Edit User Accounts" :
                                        userControl.create === true && userControl.write === true ? "Edit User Accounts" :
                                            userControl.read === true ? "View Users" :
                                                "No access to Users"}
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <span className="bullet bg-primary me-3" />
                                <em>and 4 more...</em>
                            </div>
                        </div>
                        {/*end::Permissions*/}
                    </div>
                    {/*begin::Card footer*/}
                    <div className="card-footer flex-wrap pt-0">
                        <Link to={viewTo} className="btn btn-light btn-active-primary my-1 me-2" >View Role</Link>
                        <Link to={editTo} className="btn btn-light btn-active-light-primary my-1">Edit Role</Link>
                    </div>
                    {/*end::Card footer*/}
                </div>
            </div>
        </div>
    )
}

export default SingleRole