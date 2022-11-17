import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ContactList from './contact-list/ContactList'
import CustomFields from './custom-fields/CustomFields'
import IndividualDemographicsHeader from './IndividualDemographicsHeader'
import Insurance from './insurance/Insurance'
import Search from './search/Search'

function IndividualDemographicsIndex() {
  return (
    <div>
        <IndividualDemographicsHeader/>
        <Switch>
            <Route path='/care/individual-demographics/search'>
                <Search/>
            </Route>
            <Route path='/care/individual-demographics/custom-fields'>
                <CustomFields/>
            </Route>
            <Route path='/care/individual-demographics/insurance'>
                <Insurance/>
            </Route>
            <Route path='/care/individual-demographics/contact-list'>
                <ContactList/>
            </Route>
            <Redirect from='/care/individual-demographics' exact={true} to='/care/individual-demographics/search'/>
            <Redirect to='/care/individual-demographics/search'/>
        </Switch>
    </div>
  )
}

export default IndividualDemographicsIndex