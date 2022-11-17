/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable */
import React from 'react'
import { useIntl } from 'react-intl'
// import { KTSVG } from '../../../helpers'
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub'
import { AsideMenuItem } from './AsideMenuItem'

export const AsideMenuMain: React.FC<any> = (props) => {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
        fontIcon='bi-app-indicator'
      />
      {/* <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Layout Builder'
        fontIcon='bi-layers'
      /> */}

      {
        props.role === "sudoAdmin" && (
          <div>
            <div className='menu-item'>
              <div className='menu-content pt-8 pb-2'>
                <span className='menu-section text-muted text-uppercase fs-8 ls-1'>USER</span>
              </div>
            </div>


            <AsideMenuItemWithSub to='/user-management' title='User Management' icon='/media/icons/duotune/general/gen049.svg'>
              <AsideMenuItem to='/roles' title='Roles' hasBullet={true} />
              {/* <AsideMenuItem to='/add-user' title='Add User' hasBullet={true} /> */}
              <AsideMenuItem to='/users' title='User Management' hasBullet={true} />
            </AsideMenuItemWithSub>

            <AsideMenuItemWithSub to='/admin' title='Admin' icon='/media/icons/duotune/general/gen051.svg'>
              <AsideMenuItem to='/admin/general' title='General' hasBullet={true} />
              <AsideMenuItem to='/care' title='Care' hasBullet={true} />
              <AsideMenuItem to='/admin/personalfinance' title='Personal Finance' hasBullet={true} />
              <AsideMenuItem to='/admin/billing' title='Billing' hasBullet={true} />
              <AsideMenuItem to='/admin/datadrivenoutcome' title='Data Driven Outcome' hasBullet={true} />
            </AsideMenuItemWithSub>
          </div>
        )
      }








      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Easy Note Care</span>
        </div>
      </div>

      <AsideMenuItemWithSub to='/dashboard' title='Clients' icon='/media/icons/duotune/communication/com006.svg'>
        <AsideMenuItem to='/clients' title='Clients List' hasBullet={true} />
        <AsideMenuItem to='/clientdetails' title='Clients Details' hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub to='/dashboard' title='Caregivers' icon='/media/icons/duotune/medicine/med002.svg'>
        <AsideMenuItem to='/caregivers' title='Caregivers List' hasBullet={true} />
      </AsideMenuItemWithSub>


      <AsideMenuItemWithSub to='/health' title='Health' icon='/media/icons/duotune/medicine/med001.svg'>
        <AsideMenuItem to='/health/careplan' title='Care Plan' hasBullet={true} />
        <AsideMenuItem to='/health/healthtracking' title='Health Tracking' hasBullet={true} />
        <AsideMenuItem to='/health/medicationadministrationrecord' title='Medication Administration Record' hasBullet={true} />
      </AsideMenuItemWithSub>


      <AsideMenuItemWithSub to='/individual' title='Individual' icon='/media/icons/duotune/communication/com006.svg'>
        <AsideMenuItem to='/individual/care' title='Care' hasBullet={true} />
        <AsideMenuItem to='/individual/individualplans' title='Individual Plans' hasBullet={true} />
      </AsideMenuItemWithSub>


      {/* <AsideMenuItemWithSub to='/agency' title='Agency' icon='/media/icons/duotune/general/gen025.svg'>
        <AsideMenuItem to='/agency/agency-wide-document-storage' title='Agency Wide Document Storage' hasBullet={true} />
        <AsideMenuItem to='/agency/questionnaire-forms' title='Questionnaire Forms' hasBullet={true} />
      </AsideMenuItemWithSub> */}

      <AsideMenuItemWithSub to='/billing' title='Billing' icon='/media/icons/duotune/ecommerce/ecm003.svg'>
        <AsideMenuItem to='/billing/attendance' title='Attendance' hasBullet={true} />
        <AsideMenuItem to='/billing/professionalclaim' title='Professional Claim' hasBullet={true} />
        {/* <AsideMenuItem to='/agency/questionnaire-forms' title='Questionnaire Forms' hasBullet={true} /> */}
      </AsideMenuItemWithSub>

      <AsideMenuItem
        to='/settings'
        title='Settings'
        icon='/media/icons/duotune/coding/cod001.svg'>
      </AsideMenuItem>


      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div> 
      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Pages'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <AsideMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/connections' title='Connections' hasBullet={true} />
        </AsideMenuItemWithSub>

        {/* <AsideMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <AsideMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </AsideMenuItemWithSub> 
      </AsideMenuItemWithSub> 
      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* <AsideMenuItemWithSub
        to='/error'
        title='Errors'
        fontIcon='bi-sticky'
        icon='/media/icons/duotune/general/gen040.svg'
      >
        <AsideMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </AsideMenuItemWithSub> */}
      {/* <AsideMenuItemWithSub
        to='/crafted/widgets'
        title='Widgets'
        icon='/media/icons/duotune/general/gen025.svg'
        fontIcon='bi-layers'
      >
        <AsideMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
      </AsideMenuItemWithSub>
     <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div> 
      {/* <AsideMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </AsideMenuItemWithSub> 
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
       <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>
        </a>
      </div> */}
    </>
  )
}
