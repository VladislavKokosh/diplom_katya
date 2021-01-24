import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import ContactsPage from '../pages/ContactsPage'
import PurchasePage from '../pages/PurchasePage'
import ExportPage from '../pages/ExportPage'
import ServicesPage from '../pages/ServicesPage'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/enterprise" component={HomePage}/>
      <Route exact path="/production" component={HomePage}/>
      <Route exact path="/services" component={ServicesPage}/>
      <Route exact path="/purchase" component={PurchasePage}/>
      <Route exact path="/export" component={ExportPage}/>
      <Route exact path="/contacts" component={ContactsPage}/>
      <Redirect to='/'/>
    </Switch>
  )
}
export default Routes
