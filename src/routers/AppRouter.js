import React from "react"
import {
  Router,
  Switch,
} from "react-router-dom"
import { createBrowserHistory } from 'history'
import DashboardPage from '../components/DashboardPage'
import LoginPage from '../components/LoginPage'
import Private from '../components/Private'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true} />
      <PrivateRoute path="/dashboard" component={DashboardPage} />
      <PrivateRoute path="/private" component={Private} exact={true} />
    </Switch>
  </Router>
)

export default AppRouter
