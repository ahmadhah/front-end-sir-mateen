/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable */
import React from 'react'
import { MenuItem } from './MenuItem'
import { MenuInnerWithSub } from './MenuInnerWithSub'
import { MegaMenu } from './MegaMenu'
import { useIntl } from 'react-intl'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title={intl.formatMessage({ id: 'MENU.DASHBOARD' })} to='/dashboard' />
      {/* <MenuItem title='Layout Builder' to='/builder' /> */}

      {/* INDIVIDUAL */}
      <MenuInnerWithSub
        title='Individual'
        to='/individual'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >

        <MenuInnerWithSub
          isMega={true}
          title='Care'
          to='/individual/care'
          hasArrow={true}
          // hasBullet={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MegaMenu />

        </MenuInnerWithSub>


        <MenuInnerWithSub
          title='Individual Plans'
          to='/individual/individualplans'
          hasArrow={true}
          // hasBullet={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/individualplans/individual-plan' title='Individual Plan' hasBullet={true} />
          <MenuItem to='/individualplans/individual-plan-agenda' title='Individual Plan Agenda' hasBullet={true} />
          <MenuItem to='/individualplans/personal-focus-worksheet' title='Personal Focus Worksheet' hasBullet={true} />
        </MenuInnerWithSub>

        {/* <MenuItem to='/individual/care' title='Care' />
        <MenuItem to='/individual/individualplans' title='Individual Plans' /> */}

      </MenuInnerWithSub>



      {/* BILLING */}
      <MenuInnerWithSub
        title='Billing'
        to='/billing'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >

        <MenuItem to='/billing/attendance' title='Attendance' />

        <MenuInnerWithSub
          title='Professional Claim'
          to='/billing/professionalclaim'
          hasArrow={true}
          // hasBullet={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/billing/professionalclaim/agency-based-reports' title='Agency Based Reports' hasBullet={true} />
          <MenuItem to='/billing/professionalclaim/billing-conversion' title='Billing Conversion' hasBullet={true} />
          <MenuItem to='/billing/professionalclaim/claim-template' title='Claim Template' hasBullet={true} />
          <MenuItem to='/billing/professionalclaim/excel-upload' title='Excel Upload' hasBullet={true} />
          <MenuItem to='/billing/professionalclaim/professional-claim' title='Professional Claim' hasBullet={true} />
          <MenuItem to='/billing/professionalclaim/service-authorization' title='Service Authorization' hasBullet={true} />
        </MenuInnerWithSub>

        {/* <MenuItem to='/billing/professionalclaim' title='Professional Claim' /> */}

      </MenuInnerWithSub>

      {/* Settings */}
      {/* <MenuItem title='Settings' to='#' /> */}
      <MenuInnerWithSub
        title='Settings'
        to='/settings'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >

        <MenuItem to='/individual-home-shows' title='Individual Home Shows' />
        <MenuItem to='/personal-details' title='Personal Details' />
        <MenuItem to='/super-admin-list' title='Super Admin List' />
        <MenuItem to='/scomm-settings' title='SComm Settings' />
        <MenuItem to='/password' title='Password' /> 
        <MenuItem to='/test-mode' title='Test Mode' /> 

      </MenuInnerWithSub>

{/* 
       <MenuInnerWithSub
        title='Crafted'
        to='/crafted'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >  */}

      {/* PAGES */}
      {/* <MenuInnerWithSub
          title='Pages'
          to='/crafted/pages'
          fontIcon='bi-archive'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuInnerWithSub
            title='Profile'
            to='/crafted/pages/profile'
            hasArrow={true}
            hasBullet={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
          >
            <MenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
            <MenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
            <MenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
            <MenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} />
            <MenuItem
              to='/crafted/pages/profile/connections'
              title='Connections'
              hasBullet={true}
            />
          </MenuInnerWithSub>
          <MenuInnerWithSub
            title='Wizards'
            to='/crafted/pages/wizards'
            hasArrow={true}
            hasBullet={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
          >
            <MenuItem to='/crafted/pages/wizards/horizontal' title='Horizontal' hasBullet={true} />
            <MenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
          </MenuInnerWithSub>
        </MenuInnerWithSub>  */}

      {/* ACCOUNT */}
       {/* <MenuInnerWithSub
          title='Accounts'
          to='/crafted/accounts'
          fontIcon='bi-person'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
          <MenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
        </MenuInnerWithSub> */}

      {/* ERRORS */}
       {/* <MenuInnerWithSub
          title='Errors'
          to='/error'
          fontIcon='bi-sticky'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/error/404' title='Error 404' hasBullet={true} />
          <MenuItem to='/error/500' title='Error 500' hasBullet={true} />
        </MenuInnerWithSub>  */}

      {/* Widgets */}
       {/* <MenuInnerWithSub
          title='Widgets'
          to='/crafted/widgets'
          fontIcon='bi-layers'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
          <MenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
          <MenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
          <MenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
          <MenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
          <MenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
        </MenuInnerWithSub>
      </MenuInnerWithSub>  */}

     {/* <MenuInnerWithSub title='Apps' to='/apps' menuPlacement='bottom-start' menuTrigger='click'> */}
      {/* PAGES */}
       {/* <MenuInnerWithSub
          title='Chat'
          to='/apps/chat'
          icon='/media/icons/duotune/communication/com012.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
          <MenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
          <MenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
        </MenuInnerWithSub>
      </MenuInnerWithSub> */}

{/* 
      <MenuInnerWithSub
        isMega={true}
        title='Mega menu'
        to='/mega-menu'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        <MegaMenu />
      </MenuInnerWithSub> */}
    </>
  )
}
