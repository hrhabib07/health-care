import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Appointment from './components/Appointment/Appointment';
import Expert from './components/Expert/Expert';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>

      <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/expert">
        <Expert></Expert>
      </Route>
      <Route path="/appointment">
        <Appointment></Appointment>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/registration">
        <Register></Register>
      </Route>
      <Route path="*">
        <NotFound></NotFound>
      </Route>

      </Switch>


      <Footer></Footer>
      </Router>
      </AuthProvider>
      
      
    
    </div>
  );
}

export default App;
