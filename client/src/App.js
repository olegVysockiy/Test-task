import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import SignUp from './components/SignUp/SignUp';
import Users from "./components/Users/Users";
import { useHistory } from "react-router";
import { useEffect } from "react";
import Chat from "./components/Chat/Chat";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Users} />
          <Route exact path='/chat' component={Chat} />
          <Route exact path='/signUp' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
