import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Auth from 'pages/Auth';
import Home from 'pages/Home';

export default function Router({ isLogin }) {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={isLogin ? Home : Auth} />
      </Switch>
    </BrowserRouter>
  )
}