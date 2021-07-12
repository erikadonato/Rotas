import './App.css';
import { 
  BrowserRouter as Router,
   Route, 
   Switch,
  Link, } from 'react-router-dom'

import PrivateRoute from './Pages/PrivateRoute'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'

const App = () => {
  return (
    <Router> 
        <div className="App">
          <h1>Oi</h1>
          <button><Link to='/'>Home</Link></button>
          <button><Link to='/users'>Users</Link></button>
          <button><Link to='/contact'>Contact</Link></button>

          <Switch>
            <Route path= '/' exact component={Page1} />
            <Route path= '/users' exact component={Page2} />
            <PrivateRoute path= '/contact' exact component={Page3} />
          </Switch>
        </div>
    </Router>

  );
}

export default App;
