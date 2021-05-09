import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/v1' component={Dashboard}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
