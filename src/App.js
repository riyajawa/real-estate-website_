
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Index';
import SignInPage from './Pages/Signin';

function App() {
  return (
    <Router>
      <Switch>
         <Route path="/" component = {Home}exact/>
         <Route path ="/signin" component={SignInPage} exact/>
      </Switch>
    
     
    </Router>
  );
}

export default App;
