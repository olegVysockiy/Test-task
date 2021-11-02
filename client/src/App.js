import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import SignUp from './components/SignUp/SignUp';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/signUp' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
