import React, { Component } from 'react';
// eslint-disable-next-line
import styles from './App.module.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../dummyPages/HomePage';
import ChatPage from '../ChatPage/ChatPage';
import AboutPage from '../dummyPages/About';
import Contact from '../dummyPages/Contact';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/chat" component={ChatPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={Contact} />
          <Route render={() => <p>Page not found</p>} />
        </Switch>
      </>
    );
  }
}

export default App;
