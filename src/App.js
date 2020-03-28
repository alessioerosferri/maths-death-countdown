import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Rules from "./Rules";
import Game from "./Game";


function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Switch>
                        <Route path="/game">
                            <Game />
                        </Route>
                        <Route path="/rules">
                            <Rules />
                        </Route>
                        <Route path="/">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <p>
                                Click <Link className="App-link" to="/game">here</Link> to play.
                                <br/>
                                Click <Link className="App-link" to="/rules">here</Link> for the rules.
                            </p>
                        </Route>
                    </Switch>
                </header>
            </div>
        </Router>
    );
}

export default App;
