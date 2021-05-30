import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Redirect, Route } from "react-router-dom";
import Database from "./pages/Database/Database";
import Employees from "./pages/Employees/Employees";
import Clients from "./pages/Clients/Clients";
import Assets from "./pages/Assets/Assets";
import Settings from "./pages/Settings/Settings";
import RequestsContainer from "./containers/RequestsContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="app-content">
        <Route exact path="/" render={() => <Redirect to="/requests" />} />
        <Route path="/database" component={Database} />
        <Route path="/requests" component={RequestsContainer} />
        <Route path="/employees" component={Employees} />
        <Route path="/clients" component={Clients} />
        <Route path="/assets" component={Assets} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
