import React from "react";
import Homepage from "./components/Homepage/Homepage";
import Product from "./components/Product/Product";
import About from "./components/About/About"
import {  Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    
      <Switch >
        <Route  exact path="/" component={Homepage} />
        <Route exact path="/product-category/:productname" component={Product} />
        <Route exact path="/aboutus" component={About} />
      </Switch>
    </div>
  );
}

export default App;
