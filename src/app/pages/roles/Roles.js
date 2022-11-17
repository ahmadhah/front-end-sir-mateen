import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import SingleRole from './SingleRole'

const DEV_URI = process.env.REACT_APP_DEV_API_URL
const Roles = () => {
  // state for keeping all the roles that are in our DB
  const [rolesList, setRolesList] = useState([])
  // state for keeping all the roles properties
  const [rolesProperties, setRoleProperties] = useState([])
  // state for monitoring submittion of role name
  const [roleNameBool, setRoleNameBool] = useState(true)
  //state used for creation of new role
  const [userRoles, setUserRoles] = useState([])
  const [newRole, setNewRole] = useState({
    roleName: "",
    userManagement: {
      read: false,
      write: false,
      create: false
    },
    disputesManagement: {
      read: false,
      write: false,
      create: false
    },
    apiControls: {
      read: false,
      write: false,
      create: false
    },
    contentManagement: {
      read: false,
      write: false,
      create: false
    },
    financialManagement: {
      read: false,
      write: false,
      create: false
    },
    payroll: {
      read: false,
      write: false,
      create: false
    },
    reporting: {
      read: false,
      write: false,
      create: false
    },
    databaseManagement: {
      read: false,
      write: false,
      create: false
    },
    repositoryManagement: {
      read: false,
      write: false,
      create: false
    },
  })
  /**
    * @type {ref}
    * references used for doing DOM manipulation
  */
  const chkbxRef = useRef(null);
  const roleRef = useRef(null);
  /**
    * boolean for checkbox switch
  */
  let chkBox = true

  useEffect(() => {
    const token = localStorage.getItem("authToken")
    axios.get('/role/getRoles', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      }
    }
    ).then((res) => {
      let temparr = []
      temparr = Object.keys(res.data[0])
      temparr = temparr.filter((item) => item !== "_id" && item !== "register_date" && item !== "roleName" && item !== "__v")
      setRoleProperties(temparr)
      setRolesList(res.data)
    })
  }, [])

  useEffect(() => {
    axios.get('user/users')
      .then((res) => {
        let tempResData = res.data
        let tempObj = {}
        for (let i = 0; i < tempResData.length; i++) {
          if (!tempObj[tempResData[i]["role"]]) {
            tempObj[tempResData[i]["role"]] = 1
          } else {
            tempObj[tempResData[i]["role"]]++
          }
        }
        console.log(tempObj)
        setUserRoles(tempObj)
      })
  }, [])

  /** 
    * function that handles permissions that are granted to new roles 
    * updates states with latest changes
  */
  const changePermission = (e) => {
    let property = e.target.getAttribute("property");
    let name = e.target.getAttribute("name")
    let tempval = newRole
    if (tempval[name][property] === true) {
      tempval[name][property] = false
    } else {
      tempval[name][property] = true
    }
    setNewRole(tempval)
  }

  /**
   * function that is used to select or deselect all the checkboxes in new role modal
   */
  const selectAllChk = (e) => {
    let tempvar = newRole
    let roleProps = Object.keys(tempvar)
    if (chkBox === true) {
      for (let i = 1; i < roleProps.length; i++) {
        tempvar[roleProps[i]].read = true
        tempvar[roleProps[i]].write = true
        tempvar[roleProps[i]].create = true
      }
      let inputChk = chkbxRef.current.querySelectorAll('input[type="checkbox"]')
      for (let i = 0; i < inputChk.length; i++) {
        inputChk[i].checked = true
      }
      chkBox = false
      setNewRole(tempvar)
    } else if (chkBox === false) {
      for (let i = 1; i < roleProps.length; i++) {
        tempvar[roleProps[i]].read = false
        tempvar[roleProps[i]].write = false
        tempvar[roleProps[i]].create = false
      }
      let inputChk = chkbxRef.current.querySelectorAll('input[type="checkbox"]')
      for (let i = 0; i < inputChk.length; i++) {
        inputChk[i].checked = false
      }
      chkBox = true
      setNewRole(tempvar)
    }
  }

  /**
   * Handles what happens to data once the Modal has been closed
   */
  const closeModal = () => {
    chkBox = false
    let tempvar = newRole
    tempvar.roleName = ""
    roleRef.current.value = ""
    setNewRole(tempvar)
    selectAllChk()
  }

  /**
   * function for saving new role into DB
   * shows the latest role in list as well
   */
  const AddNewRole = (e) => {
    e.preventDefault()
    if (newRole.roleName !== "") {
      axios.post(`${DEV_URI}/role/addRole`, newRole)
        .then(() => {
          let tempRole = JSON.stringify(newRole)
          tempRole = JSON.parse(tempRole)
          chkBox = false
          setRolesList([...rolesList, tempRole])
        })
        .then(() => {
          let tempvar = newRole
          tempvar.roleName = ""
          roleRef.current.value = ""
          setNewRole(tempvar)
          selectAllChk()
        })
    }

  }

  return (
    <div className='outer'>
      {/*begin::Post*/}
      <div className="post d-flex flex-column-fluid" id="kt_post">
        {/*begin::Container*/}
        <div id="kt_content_container" className="container-xxl">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">
            {/*begin::Row*/}
            {rolesList.map((role, index) => (
              <SingleRole key={index} roleName={role.roleName} financialManagement={role.financialManagement}
                payouts={role.payroll} reports={role.reporting} disputes={role.disputesManagement} userRoles={userRoles}
                userControl={role.userManagement} rolesProperties={rolesProperties} role={role} />
            ))}
            {/*begin::Add new card*/}
            <div className="col-md-4">
              {/*begin::Card*/}
              <div className="card h-md-100">
                {/*begin::Card body*/}
                <div className="card-body d-flex flex-center">
                  {/*begin::Button*/}
                  <button type="button" className="btn btn-clear d-flex flex-column flex-center" data-bs-toggle="modal" data-bs-target="#kt_modal_add_role">
                    {/*begin::Label*/}
                    <div className="fw-bolder fs-3 text-gray-600 text-hover-primary">Add New Role</div>
                    {/*end::Label*/}
                  </button>
                  {/*begin::Button*/}
                </div>
                {/*begin::Card body*/}
              </div>
            </div>
          </div>
        </div>

        {/*MODAL FOR ADDING NEW ROLE*/}
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
                <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-roles-modal-action="close"
                  data-bs-dismiss="modal"
                  aria-label="Close">
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
                {/* <form id="kt_modal_add_role_form" className="form"> */}
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
                    <input className="form-control form-control-solid" placeholder="Enter a role name" name="role_name" ref={roleRef} onChange={(e) => {
                      let tempvar = newRole
                      tempvar.roleName = e.target.value
                      if (e.target.value !== "") {
                        setRoleNameBool(false)
                      } else {
                        setRoleNameBool(true)
                      }
                      setNewRole(tempvar)
                    }} />
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
                        <tbody className="text-gray-600 fw-bold" ref={chkbxRef}>
                          {/*begin::Table row*/}
                          <tr>
                            <td className="text-gray-800">Administrator Access
                              <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Allows a full access to the system" /></td>
                            <td>
                              {/*begin::Checkbox*/}
                              <label className="form-check form-check-custom form-check-solid me-9">
                                <input className="form-check-input" type="checkbox" id="kt_roles_select_all" onChange={selectAllChk} />
                                <span className="form-check-label" htmlFor="kt_roles_select_all" >Select all</span>
                              </label>
                              {/*end::Checkbox*/}
                            </td>
                          </tr>
                          {/*end::Table row*/}
                          {rolesProperties.map((prop, index) => (
                            <tr key={index}>
                              <td className="text-gray-800">{prop}</td>
                              <td>
                                {/*begin::Wrapper*/}
                                <div className="d-flex">
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" property='read' name={prop} onChange={changePermission} />
                                    <span className="form-check-label">Read</span>
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                                    <input className="form-check-input" type="checkbox" property='write' name={prop} onChange={changePermission} />
                                    <span className="form-check-label">Write</span>
                                  </label>
                                  {/*end::Checkbox*/}
                                  {/*begin::Checkbox*/}
                                  <label className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" property='create' name={prop} onChange={changePermission} />
                                    <span className="form-check-label">Create</span>
                                  </label>
                                  {/*end::Checkbox*/}
                                </div>
                                {/*end::Wrapper*/}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/*begin::Actions*/}
                  <div className="text-center pt-15">
                    <button className="btn btn-light me-3" data-kt-roles-modal-action="cancel" data-bs-dismiss="modal"
                      aria-label="Close" onClick={closeModal}>Discard</button>
                    <button className="btn btn-primary" data-bs-dismiss="modal" onClick={AddNewRole}
                      disabled={roleNameBool ? true : false}
                    >
                      <span className="indicator-label">Submit</span>
                      <span className="indicator-progress">Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                    </button>
                  </div>
                  {/*end::Actions*/}
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roles
