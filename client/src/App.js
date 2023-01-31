import './App.css';
import React from "react";
import { Route, useLocation } from "react-router-dom";
import {Home, Landing, Form, Detail } from "./views"
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path = "/" component={Landing} />
      <Route path ="/home" render={() => <Home />} /> 
      <Route exact path = "/detail/:id" render={(match) => <Detail match={match}/>} />
      <Route exact path = "/create" component={Form} />               
    </div>
  );
};



export default App;