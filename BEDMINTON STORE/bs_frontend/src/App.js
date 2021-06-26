import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from "./components/footer";
import Header from "./components/header";
import Homedesign from './screens/homedesign';
import {Container} from "react-bootstrap";
import Productdetail from './screens/productdetail';
import Cartpage from './screens/cartspage';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
function App() {
  return (
    <Router>
    <Header/>
    <div className="my-3" style={{ minHeight: "80vh" }}>
      <Container>
    
    <Route path="/login" exact component={LoginScreen}/>
    <Route path="/product/:id" component={Productdetail}/>
    <Route path="/register" component={RegisterScreen}/>
    <Route path="/cart/:id?" component={Cartpage}/>
    <Route path="/" component={Homedesign} exact/>
    </Container>
    </div>
   
     <Footer />
    </Router>
   );
}

export default App;
