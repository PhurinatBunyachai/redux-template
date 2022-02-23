import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import React, { Suspense } from 'react'
import configureStore from './store/configureStore'
import route from './routes'
import {history} from './utils'
const store = configureStore(window.__INITIAL_STATE__)

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={null}>
        <BrowserRouter history={history}>{route}</BrowserRouter>
      </Suspense>
    </Provider>
  );
}

export default App;
