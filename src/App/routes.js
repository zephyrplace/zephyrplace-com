import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from './screens/Home'
import ProjectScreen from './screens/Projetos'
import AboutUsScreen from './screens/AboutUs'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomeScreen />
        </Route>
        <Route exact path='/Projects'>
          <ProjectScreen />
        </Route>
        <Route exact path='/About'>
          <AboutUsScreen />
        </Route>
      </Switch>
    </Router>
  )
}
