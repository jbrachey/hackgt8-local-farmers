import './App.css';
import SignUp from './sign-up/main-sign-up';
import HomePage from './home/home-page';
//import Farm from './farm-page/farm';
//import FarmPage from './farm-page/components/main-farm-page';
import { UserSignUp } from './sign-up/user-sign-up';

function App() {
  //const farm = new Farm('Local Organic Farm', '1234567890', '123 Farm Lane', 'Atlanta', 'GA', '30269');
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
