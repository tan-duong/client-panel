import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AppNavBar from "./components/layout/AppNavBar";

class App extends Component {
  render() {
    return (
      <Router>
        
        <div className="App">
        <AppNavBar />
          <h1>Hello</h1>
        </div>
      </Router>
    );
  }
}

export default App;
