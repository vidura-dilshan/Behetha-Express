import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import PharmacistCreateAccount from './views/pharmacist-create-account'
import UserCreateAccount from './views/user-create-account'
import PharmacistDashboard from './views/pharmacist-dashboard'
import PrescriptionScanner from './views/prescription-scanner'
import HealthStorePharmacist from './views/health-store-pharmacist'
import PrescriptionOrder from './views/prescription-order'
import UserLogin from './views/user-login'
import PharmacistLogin from './views/pharmacist-login'
import HealthStoreUser from './views/health-store-user'
import AmbulanceService from './views/ambulance-service'
import Chatbot from './views/chatbot'
import NotFound from './views/not-found'
import MapComponent from './views/Mapcomponent'
import Shoppingcart from './views/Shoppingcart'
import Payment from './views/payment'
import Order from './views/Order'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={PharmacistCreateAccount}
          exact
          path="/pharmacist-create-account"
        />
        <Route
          component={UserCreateAccount}
          exact
          path="/user-create-account"
        />
        <Route
          component={PharmacistDashboard}
          exact
          path="/pharmacist-dashboard"
        />
        <Route
          component={PrescriptionScanner}
          exact
          path="/prescription-scanner"
        />
        <Route
          component={HealthStorePharmacist}
          exact
          path="/health-store-pharmacist"
        />
        <Route component={PrescriptionOrder} exact path="/prescription-order" />
        <Route component={UserLogin} exact path="/" />
        <Route component={PharmacistLogin} exact path="/pharmacist-login" />
        <Route component={MapComponent} exact path="/Mapcomponent" />
        <Route component={HealthStoreUser} exact path="/health-store-user" />
        <Route component={AmbulanceService} exact path="/ambulance-service" />
        <Route component={Chatbot} exact path="/chatbot" />
        <Route component={Shoppingcart} exact path="/Shoppingcart" />
        <Route component={Payment} exact path="/payment" />
        <Route component={Order} exact path="/Order" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
