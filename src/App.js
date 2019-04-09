import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                </div>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/projects" component={Projects} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
