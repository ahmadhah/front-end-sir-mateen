import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ContactHeader from './ContactHeader'
import NewContact from './new/NewContact'
import ContactList from './list/ContactList'
import New from './new/New'
import List from './list/List'
import ImportFromExcel from './import-from-excel/ImportFromExcel'
import SearchImportedExcel from './search-imported-excel/SearchImportedExcel'
import ContactNew from './new/ContactNew'
import ListContacts from './editContact/listContacts'
import EditContacts from './editContact/editContacts'

function ContactIndex() {
    return (
        <div>
            <ContactHeader />
            <Switch>
                <Route path="/care/contact/list">
                    <ContactList />
                </Route>
                <Route path="/care/contact/new">
                    {/* <New /> */}
                    {/* <NewContact /> */}
                    <ContactNew />
                </Route>
                <Route path="/care/contact/listing/:id" component={ListContacts}/>
                <Route path="/care/contact/edit/:id" component={EditContacts} />
                {/* <Route path="/care/contact/new"> */}
                {/* <New /> */}
                {/* </Route> */}
                {/* <Route path="/care/contact/list">
                    <List />
                </Route>
                <Route path="/care/contact/import-from-excel'">
                    <ImportFromExcel />
                </Route>
                <Route path="/care/contact/search-imported-excel">
                    <SearchImportedExcel />
                </Route>
                <Redirect from='/care/contact' exact={true} to='/care/contact/new' />
                <Redirect to='/care/contact/new' /> */}
            </Switch>
        </div>
    )
}

export default ContactIndex