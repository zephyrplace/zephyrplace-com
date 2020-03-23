import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from './screens/Home'
import ProjectScreen from './screens/Projetos'
import AboutUsScreen from './screens/AboutUs'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL}>
          <HomeScreen />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + '/Home'}>
          <HomeScreen />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + '/Projects'}>
          <ProjectScreen />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + '/About'}>
          <AboutUsScreen />
        </Route>
      </Switch>
    </Router>
  )
}
