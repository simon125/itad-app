import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { store } from './store'
import Navigation from './components/Navigation';
import Home from './components/Home'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navigation />
          <Home />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
