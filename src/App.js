import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { store } from './store'
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import ItadApp from './components/ItadApp'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/app' component={ItadApp} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider >
    );
  }
}

export default App;
