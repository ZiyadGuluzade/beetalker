import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './main/MainPage';
import SignIn from './signin/SignIn';
import Signup from './signup/Signup';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/signin' component={SignIn}/>
      <Route exact path='/signup' component={Signup}/>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;