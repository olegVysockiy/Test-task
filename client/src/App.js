import NavBar from './components/NavBar/NavBar'
import Login from './components/Login/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/test' component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
