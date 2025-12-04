import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducer.js'
import { createLogger } from 'redux-logger'

const logger = createLogger()

const STORE = createStore(reducer, applyMiddleware(logger))

createRoot(document.getElementById('root')).render(
  <Provider store={STORE}>
    <App />
  </Provider>,
)
