import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './main/MainPage';
import Signup from '../components/singin/Signup';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/signin' component={Signup}/>
    </Switch>
  </BrowserRouter>
);

export default Router;