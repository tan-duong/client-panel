import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AppNavBar from "./components/layout/AppNavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <AppNavBar />
        <div className="container">
          <div className="App">
            
            <h1>Hello</h1>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
