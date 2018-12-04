import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { store } from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1 className="display-4">ITAD</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
