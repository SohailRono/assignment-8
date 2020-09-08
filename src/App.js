import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';
import NoMatch from './components/NoMatch';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="md">
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/post/:postId">
          <PostDetail></PostDetail>
        </Route>
        <Route path="/" component={Home}>
          </Route>
          <Route path="*">
              <NoMatch />
          </Route>
      </Switch>
    </Router>
    </Container>
  );
}

export default App;
