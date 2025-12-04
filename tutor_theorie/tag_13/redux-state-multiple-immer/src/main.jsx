import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
/* import reducer from './redux/reducer.js' */
import reducerBurger from './redux/reducerBurger.js'
import reducerSalad from './redux/reducerSalad.js'
import { createLogger } from 'redux-logger'

const logger = createLogger()

// Reducer kombinieren
const rootReducer = combineReducers({
  burger: reducerBurger,
  salad: reducerSalad
})

const STORE = createStore(rootReducer, applyMiddleware(logger))

createRoot(document.getElementById('root')).render(
  <Provider store={STORE}>
    <App />
  </Provider>,
)
