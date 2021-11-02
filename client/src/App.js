import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import SignUp from './components/SignUp/SignUp';
import Users from "./components/Users/Users";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/signUp' component={SignUp} />
          <Route exact path='/users' component={Users} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
