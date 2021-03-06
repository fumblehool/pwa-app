import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Row } from 'react-bootstrap';

import Home from './Home';
import About from './About';
import Player from './Player';
import Team from './Team';
import NotFound from './NotFound';

import Header from './Layout/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/pwa-app/">
      <div>
        <Header />
        <Row>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/player" component={Player} />
            <Route exact path="/" render={() => (<Redirect to="/home" />)} />
            <Route component={NotFound} />
          </Switch>
        </Row>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
