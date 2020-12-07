
import './App.css';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

import Photos from './Component/Photos';


import Person from './View/Person';
import Product from './View/Product';
import Order from './View/Order';
import Login from './View/Login';



function Home() {
  return <div className="App">   
  <header className="App-header">  
  This is Home 
  </header>
  </div>;
}






function App() {
  return (    
  
    <Router>
    <div>
    <nav>
      <ul>
         <li>
          <Link to="/">Home</Link>
         </li>

         <li>
         <Link to="/login">Login</Link>
        </li> 

         <li>
         <Link to="/product">Product</Link>
        </li> 

         <li>
         <Link to="/person">Person</Link>
        </li> 

        <li>
        <Link to="/order">Order</Link>
       </li> 

         <li>
          <Link to="/photos">Photos</Link>
         </li>  
      </ul>
      </nav>

      <Switch>

      <Route path="/product">
      <Product/>
       </Route>

       <Route path="/login">
      <Login/>
       </Route>

      <Route path="/person">
      <Person/>
       </Route>

       <Route path="/order">
      <Order/>
       </Route>

        <Route path="/photos">
          <Photos />
        </Route>
       
        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </div>
  </Router>

  );
}

export default App;
