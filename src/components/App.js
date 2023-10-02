import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Login from "./Login";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/About">
                    <About />
                </Route>
                <Route path="/Login">
                    <Login />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}

export default App