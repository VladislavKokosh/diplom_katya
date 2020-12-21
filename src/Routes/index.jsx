import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import PurchasePage from '../pages/PurchasePage'


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/enterprise" component={HomePage}/>
      <Route exact path="/production" component={HomePage}/>
      <Route exact path="/services" component={HomePage}/>
      <Route exact path="/purchase" component={PurchasePage}/>
      <Route exact path="/export" component={HomePage}/>
      <Route exact path="/news" component={HomePage}/>
      <Route exact path="/contacts" component={HomePage}/>
      <Redirect to='/'/>
    </Switch>
  )
}
export default Routes
