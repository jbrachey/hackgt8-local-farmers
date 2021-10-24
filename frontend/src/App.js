import './App.css';
import SignUp from './sign-up/main-sign-up';
import HomePage from './home/home-page';
import FarmPage from './farm-page/main-farm-page';
import Search from './search/search-page';
import ErrorPage from './farm-page/error-page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/error">
            <ErrorPage />
          </Route>
          <Route path="/farm/:farmName" component={props => <FarmPage url={props}/>}/>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
