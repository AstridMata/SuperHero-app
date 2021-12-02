import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Details from "./views/Details"
import MyTeam from "./views/MyTeam";
import Demo from "./views/Demo";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Demo />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/myTeam">
          <MyTeam />
        </Route>
        <Route exact path="/details/:id">
          <Details />
        </Route>
        <Route to="*">
          <h2>Not found - 404</h2>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
