import './App.css'
import BurgerActions from './components/BurgerActions'
import BurgerTypesView from './components/BurgerTypesView'
import BurgerView from './components/BurgerView'
import SaladView from './components/SaladView'

function App() {

  return (
    <>
      <BurgerView />
      <BurgerActions />
      <BurgerTypesView />
      <SaladView />
    </>
  )
}

export default App
