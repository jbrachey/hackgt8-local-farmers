import './App.css';
//import Farm from './farm-page/farm';
//import FarmPage from './farm-page/components/main-farm-page';
import { UserSignUp } from './sign-up/user-sign-up';

function App() {
  //const farm = new Farm('Local Organic Farm', '1234567890', '123 Farm Lane', 'Atlanta', 'GA', '30269');
  return (
    <div className="App">
      <UserSignUp/>
    </div>
  );
}

export default App;
