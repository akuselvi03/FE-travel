
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router} from "react-router-dom"
import AuthProvider from './context/AuthProvider';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Components/Home/Home';
import Login from './Login/Login/Login';
import Footer from './Components/Footer/Footer';
import Features from './Components/Features/Features';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import ServiceTwo from './Components/ServiceTwo/ServiceTwo';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import MyOrders from './Components/MyOrders/MyOrders';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import AddNewService from './Components/AddNewService/AddNewService';


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
        <Route path="/feature">
          <Features></Features>
        </Route>
        <Route path="/services">
          <ServiceTwo></ServiceTwo>
        </Route>
        <PrivateRoute path="/place-order/:id">
          <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <PrivateRoute path="/my-booking">
        <MyOrders></MyOrders>
        </PrivateRoute>
        <PrivateRoute path="/all-booking">
        <ManageOrders></ManageOrders>
        </PrivateRoute>
        <PrivateRoute path="/add-service">
          <AddNewService></AddNewService>
        </PrivateRoute>


        </Switch>
 <Footer></Footer>
      </Router>

    </AuthProvider>
    </div>
  );
}

export default App;
