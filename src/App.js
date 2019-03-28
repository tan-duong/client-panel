import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AppNavBar from "./components/layout/AppNavBar";
import Dashboard from "./components/layout/Dashboard";
import AddClient from './components/clients/AddClient';
// import EditClient from './components/clients/EditClient';
// import ClientDetails from './components/clients/ClientDetails';
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';
// import Settings from './components/settings/Settings';

import { Provider } from "react-redux";
import store from "./store";
//import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavBar />
            <div className="container">
              <Switch>
                <Route exact path={"/"} component={Dashboard} />
                <Route
                  exact
                  path="/client/add"
                  component={AddClient}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
