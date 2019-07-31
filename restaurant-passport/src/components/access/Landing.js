import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Login from './Login';
import Register from './Register';

const Landing = () => {
  return (
    <div>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <Route exact path="/(|login)" component={Login}/>
      <Route exact path="/register" component={Register}/>
    </div>
  );
}

export default Landing;
