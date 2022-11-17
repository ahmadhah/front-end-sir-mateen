import React from 'react'

const Roles = () => {
    console.log("hiohihi")
    return (
        <div>
            {/*begin::Post*/}
            <div className="post d-flex flex-column-fluid" id="kt_post">
                {/*begin::Container*/}
                <div id="kt_content_container" className="container-xxl">
                    {/*begin::Row*/}
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">
                        {/*begin::Col*/}
                        <div className="cc-4">
                            {/*begin::Card*/}
                            <div className="card card-flush h-md-100">
                                {/*begin::Card header*/}
                                <div className="card-header">
                                    {/*begin::Card title*/}
                                    <div className="card-title">
                                        <h2>Super Admin</h2>
                                    </div>
                                    {/*end::Card title*/}
                                </div>
                                {/*end::Card header*/}
                                {/*begin::Card body*/}
                                <div className="card-body pt-1">
                                    {/*begin::Users*/}
                                    <div className="fw-bolder text-gray-600 mb-5">Total users with this role: 5</div>
                                    {/*end::Users*/}
                                    {/*begin::Permissions*/}
                                    <div className="d-flex flex-column text-gray-600">
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3" />All Admin Controls</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3" />View and Edit Financial Summaries</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3" />Enabled Bulk Reports</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3" />View and Edit Payouts</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3" />View and Edit Disputes</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3" />
                                            <em>and 7 more...</em>
                                        </div>
                                    </div>
                                    {/*end::Permissions*/}
                                </div>
                                {/*end::Card body*/}
                                {/*begin::Card footer*/}
                                <div className="card-footer flex-wrap pt-0">
                                    <a href="/metronic8/demo1/../demo1/apps/user-management/roles/view.html" className="btn btn-light btn-active-primary my-1 me-2">View Role</a>
                                    <button type="button" className="btn btn-light btn-active-light-primary my-1" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role">Edit Role</button>
                                </div>
                                {/*end::Card footer*/}
                            </div>
                            {/*end::Card*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className="cc-4">
                            {/*begin::Card*/}
                            <div className="card card-flush h-md-100">
                                {/*begin::Card header*/}
                                <div className="card-header">
                                    {/*begin::Card title*/}
                                    <div className="card-title">
                                        <h2>Doctor</h2>
                                    </div>
                                    {/*end::Card title*/}
                                </div>
                                {/*end::Card header*/}
                                {/*begin::Card body*/}
                                <div className="card-body pt-1">
                                    {/*begin::Users*/}
                                    <div className="fw-bolder text-gray-600 mb-5">Total users with this role: 14</div>
                                    {/*end::Users*/}
                                    {/*begin::Permissions*/}
                                    <div className="d-flex flex-column text-gray-600">
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3" />Some Admin Controls</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3" />View Financial Summaries only</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3" />View and Edit API Controls</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3" />View Payouts only</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3" />View and Edit Disputes</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3" />
                                            <em>and 3 more...</em>
                                        </div>
                                    </div>
                                    {/*end::Permissions*/}
                                </div>
                                {/*end::Card body*/}
                                {/*begin::Card footer*/}
                                <div className="card-footer flex-wrap pt-0">
                                    <a href="/metronic8/demo1/../demo1/apps/user-management/roles/view.html" className="btn btn-light btn-active-primary my-1 me-2">View Role</a>
                                    <button type="button" className="btn btn-light btn-active-light-primary my-1" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role">Edit Role</button>
                                </div>
                                {/*end::Card footer*/}
                            </div>
                            {/*end::Card*/}
                        </div>
                        {/*end::Col*/}




                        {/*begin::Col*/}
                        <div className="cc-4">
                            {/*begin::Card*/}
                            <div className="card card-flush h-md-100">
                                {/*begin::Card header*/}
                                <div className="card-header">
                                    {/*begin::Card title*/}
                                    <div className="card-title">
                                        <h2>Patient</h2>
                                    </div>
                                    {/*end::Card title*/}
                                </div>
                                {/*end::Card header*/}
                                {/*begin::Card body*/}
                                <div className="card-body pt-1">
                                    {/*begin::Users*/}
                                    <div className="fw-bolder text-gray-600 mb-5">Total users with this role: 4</div>
                                    {/*end::Users*/}
                                    {/*begin::Permissions*/}
                                    <div className="d-flex flex-column text-gray-600">
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3" />No Admin Controls</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3" />View and Edit Financial Summaries</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3" />Enabled Bulk Reports</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3" />View Payouts only</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3" />View Disputes only</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3" />
                                            <em>and 2 more...</em>
                                        </div>
                                    </div>
                                    {/*end::Permissions*/}
                                </div>
                                {/*end::Card body*/}
                                {/*begin::Card footer*/}
                                <div className="card-footer flex-wrap pt-0">
                                    <a href="/metronic8/demo1/../demo1/apps/user-management/roles/view.html" className="btn btn-light btn-active-primary my-1 me-2">View Role</a>
                                    <button type="button" className="btn btn-light btn-active-light-primary my-1" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role">Edit Role</button>
                                </div>
                                {/*end::Card footer*/}
                            </div>
                            {/*end::Card*/}
                        </div>
                        {/*end::Col*/}



                        {/*begin::Add new card*/}
                        <div className="col-md-4">
                            {/*begin::Card*/}
                            <div className="card h-md-100">
                                {/*begin::Card body*/}
                                <div className="card-body d-flex flex-center">
                                    {/*begin::Button*/}
                                    <button type="button" className="btn btn-clear d-flex flex-column flex-center" data-bs-toggle="modal" data-bs-target="#kt_modal_add_role">
                                        {/*begin::Illustration*/}
                                        <img src="/metronic8/demo1/assets/media/illustrations/sketchy-1/4.png" alt="" className="mw-100 mh-150px mb-7" />
                                        {/*end::Illustration*/}
                                        {/*begin::Label*/}
                                        <div className="fw-bolder fs-3 text-gray-600 text-hover-primary">Add New Role</div>
                                        {/*end::Label*/}
                                    </button>
                                    {/*begin::Button*/}
                                </div>
                                {/*begin::Card body*/}
                            </div>
                            {/*begin::Card*/}
                        </div>
                        {/*begin::Add new card*/}
                    </div>
                    {/*end::Row*/}










                    {/*begin::Modals*/}
                    {/*begin::Modal - Add role*/}
                    <div className="modal fade" id="kt_modal_add_role" tabIndex={-1} aria-hidden="true">
                        {/*begin::Modal dialog*/}
                        <div className="modal-dialog modal-dialog-centered mw-750px">
                            {/*begin::Modal content*/}
                            <div className="modal-content">
                                {/*begin::Modal header*/}
                                <div className="modal-header">
                                    {/*begin::Modal title*/}
                                    <h2 className="fw-bolder">Add a Role</h2>
                                    {/*end::Modal title*/}
                                    {/*begin::Close*/}
                                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-roles-modal-action="close">
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
                                <div className="modal-body scroll-y mx-lg-5 my-7">
                                    {/*begin::Form*/}
                                    <form id="kt_modal_add_role_form" className="form" action="#">
                                        {/*begin::Scroll*/}
                                        <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_add_role_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_role_header" data-kt-scroll-wrappers="#kt_modal_add_role_scroll" data-kt-scroll-offset="300px">
                                            {/*begin::Input group*/}
                                            <div className="fv-row mb-10">
                                                {/*begin::Label*/}
                                                <label className="fs-5 fw-bolder form-label mb-2">
                                                    <span className="required">Role name</span>
                                                </label>
                                                {/*end::Label*/}
                                                {/*begin::Input*/}
                                                <input className="form-control form-control-solid" placeholder="Enter a role name" name="role_name" />
                                                {/*end::Input*/}
                                            </div>
                                            {/*end::Input group*/}
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
                                                            <tr>
                                                                <td className="text-gray-800">Administrator Access
                                                                    <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Allows a full access to the system" /></td>
                                                                <td>
                                                                    {/*begin::Checkbox*/}
                                                                    <label className="form-check form-check-custom form-check-solid me-9">
                                                                        <input className="form-check-input" type="checkbox" defaultValue id="kt_roles_select_all" />
                                                                        <span className="form-check-label" htmlFor="kt_roles_select_all">Select all</span>
                                                                    </label>
                                                                    {/*end::Checkbox*/}
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                {/*begin::Label*/}
                                                                <td className="text-gray-800">User Management</td>
                                                                {/*end::Label*/}
                                                                {/*begin::Options*/}
                                                                <td>
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="d-flex">
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="user_management_read" />
                                                                            <span className="form-check-label">Read</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="user_management_write" />
                                                                            <span className="form-check-label">Write</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="user_management_create" />
                                                                            <span className="form-check-label">Create</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </td>
                                                                {/*end::Options*/}
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                {/*begin::Label*/}
                                                                <td className="text-gray-800">Content Management</td>
                                                                {/*end::Label*/}
                                                                {/*begin::Options*/}
                                                                <td>
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="d-flex">
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="content_management_read" />
                                                                            <span className="form-check-label">Read</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="content_management_write" />
                                                                            <span className="form-check-label">Write</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="content_management_create" />
                                                                            <span className="form-check-label">Create</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </td>
                                                                {/*end::Options*/}
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                {/*begin::Label*/}
                                                                <td className="text-gray-800">Financial Management</td>
                                                                {/*end::Label*/}
                                                                {/*begin::Options*/}
                                                                <td>
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="d-flex">
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="financial_management_read" />
                                                                            <span className="form-check-label">Read</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="financial_management_write" />
                                                                            <span className="form-check-label">Write</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="financial_management_create" />
                                                                            <span className="form-check-label">Create</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </td>
                                                                {/*end::Options*/}
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                {/*begin::Label*/}
                                                                <td className="text-gray-800">Reporting</td>
                                                                {/*end::Label*/}
                                                                {/*begin::Options*/}
                                                                <td>
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="d-flex">
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="reporting_read" />
                                                                            <span className="form-check-label">Read</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="reporting_write" />
                                                                            <span className="form-check-label">Write</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="reporting_create" />
                                                                            <span className="form-check-label">Create</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </td>
                                                                {/*end::Options*/}
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                {/*begin::Label*/}
                                                                <td className="text-gray-800">Payroll</td>
                                                                {/*end::Label*/}
                                                                {/*begin::Options*/}
                                                                <td>
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="d-flex">
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="payroll_read" />
                                                                            <span className="form-check-label">Read</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="payroll_write" />
                                                                            <span className="form-check-label">Write</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="payroll_create" />
                                                                            <span className="form-check-label">Create</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </td>
                                                                {/*end::Options*/}
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                {/*begin::Label*/}
                                                                <td className="text-gray-800">Disputes Management</td>
                                                                {/*end::Label*/}
                                                                {/*begin::Options*/}
                                                                <td>
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="d-flex">
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="disputes_management_read" />
                                                                            <span className="form-check-label">Read</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="disputes_management_write" />
                                                                            <span className="form-check-label">Write</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="disputes_management_create" />
                                                                            <span className="form-check-label">Create</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </td>
                                                                {/*end::Options*/}
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                {/*begin::Label*/}
                                                                <td className="text-gray-800">API Controls</td>
                                                                {/*end::Label*/}
                                                                {/*begin::Options*/}
                                                                <td>
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="d-flex">
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="api_controls_read" />
                                                                            <span className="form-check-label">Read</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="api_controls_write" />
                                                                            <span className="form-check-label">Write</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="api_controls_create" />
                                                                            <span className="form-check-label">Create</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </td>
                                                                {/*end::Options*/}
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                {/*begin::Label*/}
                                                                <td className="text-gray-800">Database Management</td>
                                                                {/*end::Label*/}
                                                                {/*begin::Options*/}
                                                                <td>
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="d-flex">
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="database_management_read" />
                                                                            <span className="form-check-label">Read</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="database_management_write" />
                                                                            <span className="form-check-label">Write</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="database_management_create" />
                                                                            <span className="form-check-label">Create</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </td>
                                                                {/*end::Options*/}
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                {/*begin::Label*/}
                                                                <td className="text-gray-800">Repository Management</td>
                                                                {/*end::Label*/}
                                                                {/*begin::Options*/}
                                                                <td>
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="d-flex">
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="repository_management_read" />
                                                                            <span className="form-check-label">Read</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="repository_management_write" />
                                                                            <span className="form-check-label">Write</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="repository_management_create" />
                                                                            <span className="form-check-label">Create</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </td>
                                                                {/*end::Options*/}
                                                            </tr>
                                                            {/*end::Table row*/}
                                                        </tbody>
                                                        {/*end::Table body*/}
                                                    </table>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Table wrapper*/}
                                            </div>
                                            {/*end::Permissions*/}
                                        </div>
                                        {/*end::Scroll*/}
                                        {/*begin::Actions*/}
                                        <div className="text-center pt-15">
                                            <button type="reset" className="btn btn-light me-3" data-kt-roles-modal-action="cancel">Discard</button>
                                            <button type="submit" className="btn btn-primary" data-kt-roles-modal-action="submit">
                                                <span className="indicator-label">Submit</span>
                                                <span className="indicator-progress">Please wait...
                                                    <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                                            </button>
                                        </div>
                                        {/*end::Actions*/}
                                    </form>
                                    {/*end::Form*/}
                                </div>
                                {/*end::Modal body*/}
                            </div>
                            {/*end::Modal content*/}
                        </div>
                        {/*end::Modal dialog*/}
                    </div>
                    {/*end::Modal - Add role*/}












                    {/*begin::Modal - Update role*/}
                    <div className="modal fade" id="kt_modal_update_role" tabIndex={-1} aria-hidden="true">
                        {/*begin::Modal dialog*/}
                        <div className="modal-dialog modal-dialog-centered mw-750px">
                            {/*begin::Modal content*/}
                            <div className="modal-content">
                                {/*begin::Modal header*/}
                                <div className="modal-header">
                                    {/*begin::Modal title*/}
                                    <h2 className="fw-bolder">Update Role</h2>
                                    {/*end::Modal title*/}
                                    {/*begin::Close*/}
                                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-roles-modal-action="close">
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
                                    <form id="kt_modal_update_role_form" className="form" action="#">
                                        {/*begin::Scroll*/}
                                        <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_update_role_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_update_role_header" data-kt-scroll-wrappers="#kt_modal_update_role_scroll" data-kt-scroll-offset="300px">
                                            {/*begin::Input group*/}
                                            <div className="fv-row mb-10">
                                                {/*begin::Label*/}
                                                <label className="fs-5 fw-bolder form-label mb-2">
                                                    <span className="required">Role name</span>
                                                </label>
                                                {/*end::Label*/}
                                                {/*begin::Input*/}
                                                <input className="form-control form-control-solid" placeholder="Enter a role name" name="role_name" defaultValue="Developer" />
                                                {/*end::Input*/}
                                            </div>
                                            {/*end::Input group*/}
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
                                                            <tr>
                                                                <td className="text-gray-800">Administrator Access
                                                                    <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Allows a full access to the system" /></td>
                                                                <td>
                                                                    {/*begin::Checkbox*/}
                                                                    <label className="form-check form-check-sm form-check-custom form-check-solid me-9">
                                                                        <input className="form-check-input" type="checkbox" defaultValue id="kt_roles_select_all" />
                                                                        <span className="form-check-label" htmlFor="kt_roles_select_all">Select all</span>
                                                                    </label>
                                                                    {/*end::Checkbox*/}
                                                                </td>
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                {/*begin::Label*/}
                                                                <td className="text-gray-800">User Management</td>
                                                                {/*end::Label*/}
                                                                {/*begin::Input group*/}
                                                                <td>
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="d-flex">
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="user_management_read" />
                                                                            <span className="form-check-label">Read</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="user_management_write" />
                                                                            <span className="form-check-label">Write</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="user_management_create" />
                                                                            <span className="form-check-label">Create</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </td>
                                                                {/*end::Input group*/}
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                {/*begin::Label*/}
                                                                <td className="text-gray-800">Content Management</td>
                                                                {/*end::Label*/}
                                                                {/*begin::Input group*/}
                                                                <td>
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="d-flex">
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="content_management_read" />
                                                                            <span className="form-check-label">Read</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="content_management_write" />
                                                                            <span className="form-check-label">Write</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="content_management_create" />
                                                                            <span className="form-check-label">Create</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </td>
                                                                {/*end::Input group*/}
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                {/*begin::Label*/}
                                                                <td className="text-gray-800">Financial Management</td>
                                                                {/*end::Label*/}
                                                                {/*begin::Input group*/}
                                                                <td>
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="d-flex">
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="financial_management_read" />
                                                                            <span className="form-check-label">Read</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="financial_management_write" />
                                                                            <span className="form-check-label">Write</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="financial_management_create" />
                                                                            <span className="form-check-label">Create</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </td>
                                                                {/*end::Input group*/}
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                {/*begin::Label*/}
                                                                <td className="text-gray-800">Reporting</td>
                                                                {/*end::Label*/}
                                                                {/*begin::Input group*/}
                                                                <td>
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="d-flex">
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="reporting_read" />
                                                                            <span className="form-check-label">Read</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="reporting_write" />
                                                                            <span className="form-check-label">Write</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="reporting_create" />
                                                                            <span className="form-check-label">Create</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </td>
                                                                {/*end::Input group*/}
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                {/*begin::Label*/}
                                                                <td className="text-gray-800">Payroll</td>
                                                                {/*end::Label*/}
                                                                {/*begin::Input group*/}
                                                                <td>
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="d-flex">
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="payroll_read" />
                                                                            <span className="form-check-label">Read</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="payroll_write" />
                                                                            <span className="form-check-label">Write</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="payroll_create" />
                                                                            <span className="form-check-label">Create</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </td>
                                                                {/*end::Input group*/}
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                {/*begin::Label*/}
                                                                <td className="text-gray-800">Disputes Management</td>
                                                                {/*end::Label*/}
                                                                {/*begin::Input group*/}
                                                                <td>
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="d-flex">
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="disputes_management_read" />
                                                                            <span className="form-check-label">Read</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="disputes_management_write" />
                                                                            <span className="form-check-label">Write</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="disputes_management_create" />
                                                                            <span className="form-check-label">Create</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </td>
                                                                {/*end::Input group*/}
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                {/*begin::Label*/}
                                                                <td className="text-gray-800">API Controls</td>
                                                                {/*end::Label*/}
                                                                {/*begin::Input group*/}
                                                                <td>
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="d-flex">
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="api_controls_read" />
                                                                            <span className="form-check-label">Read</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="api_controls_write" />
                                                                            <span className="form-check-label">Write</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="api_controls_create" />
                                                                            <span className="form-check-label">Create</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </td>
                                                                {/*end::Input group*/}
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                {/*begin::Label*/}
                                                                <td className="text-gray-800">Database Management</td>
                                                                {/*end::Label*/}
                                                                {/*begin::Input group*/}
                                                                <td>
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="d-flex">
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="database_management_read" />
                                                                            <span className="form-check-label">Read</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="database_management_write" />
                                                                            <span className="form-check-label">Write</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="database_management_create" />
                                                                            <span className="form-check-label">Create</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </td>
                                                                {/*end::Input group*/}
                                                            </tr>
                                                            {/*end::Table row*/}
                                                            {/*begin::Table row*/}
                                                            <tr>
                                                                {/*begin::Label*/}
                                                                <td className="text-gray-800">Repository Management</td>
                                                                {/*end::Label*/}
                                                                {/*begin::Input group*/}
                                                                <td>
                                                                    {/*begin::Wrapper*/}
                                                                    <div className="d-flex">
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="repository_management_read" />
                                                                            <span className="form-check-label">Read</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="repository_management_write" />
                                                                            <span className="form-check-label">Write</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                        {/*begin::Checkbox*/}
                                                                        <label className="form-check form-check-custom form-check-solid">
                                                                            <input className="form-check-input" type="checkbox" defaultValue name="repository_management_create" />
                                                                            <span className="form-check-label">Create</span>
                                                                        </label>
                                                                        {/*end::Checkbox*/}
                                                                    </div>
                                                                    {/*end::Wrapper*/}
                                                                </td>
                                                                {/*end::Input group*/}
                                                            </tr>
                                                            {/*end::Table row*/}
                                                        </tbody>
                                                        {/*end::Table body*/}
                                                    </table>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Table wrapper*/}
                                            </div>
                                            {/*end::Permissions*/}
                                        </div>
                                        {/*end::Scroll*/}
                                        {/*begin::Actions*/}
                                        <div className="text-center pt-15">
                                            <button type="reset" className="btn btn-light me-3" data-kt-roles-modal-action="cancel">Discard</button>
                                            <button type="submit" className="btn btn-primary" data-kt-roles-modal-action="submit">
                                                <span className="indicator-label">Submit</span>
                                                <span className="indicator-progress">Please wait...
                                                    <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                                            </button>
                                        </div>
                                        {/*end::Actions*/}
                                    </form>
                                    {/*end::Form*/}
                                </div>
                                {/*end::Modal body*/}
                            </div>
                            {/*end::Modal content*/}
                        </div>
                        {/*end::Modal dialog*/}
                    </div>
                    {/*end::Modal - Update role*/}
                    {/*end::Modals*/}
                </div>
                {/*end::Container*/}
            </div>
            {/*end::Post*/}
        </div>
    )
}

export default Roles

