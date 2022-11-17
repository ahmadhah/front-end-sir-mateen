/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'

const MegaMenu: FC = () => (
  <div className='row' data-kt-menu-dismiss='true'>
    <div className='col-lg-4 border-left-lg-1'>
      <div className='menu-inline menu-column menu-active-bg'>
        <div className='menu-item'>
          <a href='/care/consent-and-authorization/new' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>Consent and Authorization</span>
          </a>
        </div>
        <div className='menu-item'>
          <a href='/care/event-summaries/view' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>Event Summaries</span>
          </a>
        </div>
        <div className='menu-item'>
          <a href='/care/ger-resolution/new' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>GER Resolution</span>
          </a>
        </div>
        <div className='menu-item'>
          <a href='/care/general-event-report/new' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>General Event Report</span>
          </a>
        </div>
        <div className='menu-item'>
          <a href='/care/global-template-library/search' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>Global Template Library</span>
          </a>
        </div>
      </div>
      <div className='menu-item'>
        <a href='/care/witness/search' className='menu-link'>
          <span className='menu-bullet'>
            <span className='bullet bullet-dot'></span>
          </span>
          <span className='menu-title'>Witness</span>
        </a>
      </div>
    </div>

    <div className='col-lg-4 border-left-lg-1'>
      <div className='menu-inline menu-column menu-active-bg'>
        <div className='menu-item'>
          <a href='/care/individual-demographics/search' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>Individual Demographics</span>
          </a>
        </div>
        <div className='menu-item'>
          <a href='/care/individual-medical-information/diagnosis-list' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>Individual Medical Information</span>
          </a>
        </div>
        <div className='menu-item'>
          <a href='/care/isp-data/new' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>ISP Data</span>
          </a>
        </div>
        <div className='menu-item'>
          <a href='/care/ipop-day-program/new' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>IPOP Day Program</span>
          </a>
        </div>
        <div className='menu-item'>
          <a href='/care/ipop-individualized-services/new' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>IPOP Individualized Services</span>
          </a>
        </div>
        <div className='menu-item'>
          <a href='/care/t-log/new' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>T Log</span>
          </a>
        </div>
      </div>
    </div>

    <div className='col-lg-4 border-left-lg-1'>
      <div className='menu-inline menu-column menu-active-bg'>
        <div className='menu-item'>
          <a href='/care/isp-program/new' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>ISP Program</span>
          </a>
        </div>
        <div className='menu-item'>
          <a href='/care/isp-program-template-liabrary/new' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>ISP Program Template Library</span>
          </a>
        </div>
        <div className='menu-item'>
          <a href='/care/ipop-general-information/new' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>IPOP General Information</span>
          </a>
        </div>
        <div className='menu-item'>
          <a href='/care/ipop-residential-information/new' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>IPOP Residential Program</span>
          </a>
        </div>
        <div className='menu-item'>
          <a href='/care/ipop-supported-employment' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>IPOP Supported Employment</span>
          </a>
        </div>
        <div className='menu-item'>
          <a href='/care/ipop-work-center/new' className='menu-link'>
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
            <span className='menu-title'>IPOP Work Center</span>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export { MegaMenu }
