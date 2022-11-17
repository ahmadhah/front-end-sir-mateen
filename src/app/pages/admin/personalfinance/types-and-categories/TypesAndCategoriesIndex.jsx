import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import TypesAndCategoriesHeader from './TypesAndCategoriesHeader'
import New from './new/New'
import List from './list/List'

function TypesAndCategoriesIndex() {
    return (
        <div>
            <TypesAndCategoriesHeader />
            <Switch>
                <Route path="/personalfinance/types-and-categories/new">
                    <New />
                </Route>
                <Route path="/personalfinance/types-and-categories/list">
                    <List />
                </Route>
                <Redirect from='/personalfinance/types-and-categories' exact={true} to='/personalfinance/types-and-categories/new' />
                <Redirect to='/personalfinance/types-and-categories/new' />
            </Switch>
        </div>
    )
}

export default TypesAndCategoriesIndex