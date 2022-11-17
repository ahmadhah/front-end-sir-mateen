const ViewRoleModal = ({ role, roleName, rolesProperties }) => {
    return (
        <div>
            {/*begin::Modal content*/}
            <div className="modal-content">
                {/*begin::Modal header*/}
                <div className="modal-header">
                    {/*begin::Modal title*/}
                    <h2 className="fw-bolder">{roleName}</h2>
                    {/*end::Modal title*/}
                    {/*begin::Close*/}
                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-roles-modal-action="close" data-bs-dismiss="modal" aria-label="Close">
                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                        <span className="svg-icon svg-icon-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="black" />
                                <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="black" />
                            </svg>
                        </span>
                        {/*end::Svg Icon*/}
                    </div>
                    {/*end::Close*/}
                </div>
                {/*end::Modal header*/}
                {/*begin::Modal body*/}
                <div className="modal-body scroll-y mx-5 my-7">
                    {/*begin::Form*/}
                    {/* <form id="kt_modal_update_role_form" className="form" action="#"> */}
                    {/*begin::Scroll*/}
                    <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_update_role_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_update_role_header" data-kt-scroll-wrappers="#kt_modal_update_role_scroll" data-kt-scroll-offset="300px">
                        {/*begin::Input group*/}
                        {/*begin::Permissions*/}
                        <div className="fv-row">
                            {/*begin::Label*/}
                            <label className="fs-5 fw-bolder form-label mb-2">Role Permissions</label>
                            {/*end::Label*/}
                            {/*begin::Table wrapper*/}
                            <div className="table-responsive">
                                {/*begin::Table*/}
                                <table className="table align-middle table-row-dashed fs-6 gy-5">
                                    {/*begin::Table body*/}
                                    <tbody className="text-gray-600 fw-bold">
                                        {/*begin::Table row*/}
                                        {rolesProperties.map((prop, index) => (
                                            <tr key={index}>
                                                <td className='text-gray-800'>{prop}</td>
                                                <td>
                                                    {/*begin::Wrapper*/}
                                                    <div className="d-flex">
                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                            <input className="form-check-input" type="checkbox" defaultChecked={role[prop]["read"]} property='read' name={prop} />
                                                            <span className="form-check-label">Read</span>
                                                        </label>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                            <input className="form-check-input" type="checkbox" defaultChecked={role[prop]["write"]} property='write' name={prop} />
                                                            <span className="form-check-label">Write</span>
                                                        </label>
                                                        {/*end::Checkbox*/}
                                                        {/*begin::Checkbox*/}
                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input className="form-check-input" type="checkbox" defaultChecked={role[prop]["create"]} property='create' name={prop} />
                                                            <span className="form-check-label">Create</span>
                                                        </label>
                                                        {/*end::Checkbox*/}
                                                    </div>
                                                    {/*end::Wrapper*/}
                                                </td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td>
                                                <div className="text-center pt-15">
                                                    <button className="btn btn-light me-3" data-kt-roles-modal-action="cancel" data-bs-dismiss="modal"
                                                        aria-label="Close" >
                                                        Close
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewRoleModal