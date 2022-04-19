
import { Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Counter from './Components/Counter/Counter'

import Form from './Components/Form/Form'
import Home from './Components/Home/Home'
function App () {
  return (
    <div className='App'>
  
        <Switch>
          <Route exact path='/form'>
            <Form />
          </Route>
          <Route exact path='/counter'>
            <Counter />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
        </Switch>
      {/* <Form /> */}
    </div>
  )
}

export default App
