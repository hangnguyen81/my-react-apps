import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import {Switch, Route} from 'react-router-dom'
import Photos from './pages/Photos'
import Cart from './pages/Cart'

function App() {
  return (
    <div className="container">
      <AppHeader/>
      <Switch>
        <Route exact path='/'>
            <Photos/>
        </Route>
        <Route exact path='/cart'>
          <Cart/>
        </Route>
      </Switch>
      <AppFooter/>
    </div>
  );
}

export default App;
