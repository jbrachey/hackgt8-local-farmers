import './App.css';
import SignUp from './sign-up/main-sign-up';
import HomePage from './home/home-page';
import FarmPage, { getFarm } from './farm-page/main-farm-page';
//import Farm from './farm-page/farm';
//import FarmPage from './farm-page/components/main-farm-page';
import { UserSignUp } from './sign-up/user-sign-up';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/:farmName" component={props => <FarmPage url={props}/>}/>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
