import logo from './logo.svg';
import './App.css';
import Registration from '../src/components/registration'
import Login from './components/login';
import { BrowserRouter as Router, Route, Redirect, Switch,Link, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Router>
      <Route path="/" component={Login} exact/>
      <Route path="/Login" component={Login}/>
      <Route path="/Registration" component={Registration}/> 
    </Router>
    </BrowserRouter> 
  );
}

export default App;
