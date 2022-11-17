/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className: string
}

const SettingsWidget: React.FC<Props> = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bolder text-dark'>Settings</h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-2'>
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-40px bg-success me-5'></span>
          {/* end::Bullet */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='/personal-details' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              Personal Details
            </a>
            <a href='/personal-details' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
            <span className='text-muted fw-bold d-block'>Edit</span></a>
          </div>
          {/* end::Description */}
          {/* <span className='badge badge-light-success fs-8 fw-bolder'>New</span> */}
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-40px bg-primary me-5'></span>
          {/* end::Bullet */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='/super-admin-list' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              Super Admin List
            </a>
            <a href='/super-admin-list' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
            <span className='text-muted fw-bold d-block'>View</span></a>
          </div>
          {/* end::Description */}
          {/* <span className='badge badge-light-primary fs-8 fw-bolder'>New</span> */}
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-40px bg-warning me-5'></span>
          {/* end::Bullet */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='/password' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              Password
            </a>
            <a href='/password' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
            <span className='text-muted fw-bold d-block'>Change</span></a>
          </div>
          {/* end::Description */}
          {/* <span className='badge badge-light-warning fs-8 fw-bolder'>New</span> */}
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-40px bg-primary me-5'></span>
          {/* end::Bullet */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              SComm Settings
            </a>
            <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
            <span className='text-muted fw-bold d-block'>Configure</span></a>
          </div>
          {/* end::Description */}
          {/* <span className='badge badge-light-primary fs-8 fw-bolder'>New</span> */}
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-50px bg-danger me-5'></span>
          {/* end::Bullet */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              Individual Home Shows
            </a>
            <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              <span className='text-muted fw-bold d-block'>All</span></a>
            <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              <span className='text-muted fw-bold d-block'>Recently Accessed</span></a>
          </div>
          {/* end::Description */}
          {/* <span className='badge badge-light-danger fs-8 fw-bolder'>New</span> */}
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8'>
          {/* begin::Bullet */}
          <span className='bullet bullet-vertical h-50px bg-danger me-5'></span>
          {/* end::Bullet */}
          {/* begin::Description */}
          <div className='flex-grow-1 fw-bolder'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              Test Mode
            </a>
            <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              <span className='text-muted fw-bold d-block'>On</span></a>
            <a href='#' className='text-gray-800 text-hover-primary fw-bolder fs-6'>
              <span className='text-muted fw-bold d-block'>Off</span></a>
          </div>
          {/* end::Description */}
          {/* <span className='badge badge-light-danger fs-8 fw-bolder'>New</span> */}
        </div>
        {/* end:Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export { SettingsWidget }
