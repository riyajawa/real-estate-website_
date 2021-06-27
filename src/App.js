
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Index';
import SignInPage from './Pages/Signin';

function App() {
  return (
    <Router>
      <Switch>
         <Route exact path="/real-estate-websites" component = {Home}exact/>
         <Route exact
         path ="/signin" component={SignInPage} exact/>
      </Switch>
    
     
    </Router>
  );
}

export default App;
