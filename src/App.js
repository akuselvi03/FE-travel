import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import {BrowserRouter as Router} from "react-router-dom"
import AuthProvider from './context/AuthProvider';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Components/Home/Home';
import Login from './Login/Login/Login';
import Footer from './Components/Footer/Footer';


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
        <Route  path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>

        </Switch>
 <Footer></Footer>

      </Router>

    </AuthProvider>
    </div>
  );
}

export default App;
