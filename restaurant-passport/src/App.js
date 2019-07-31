import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import './components/restaurant-list/passport.scss';
import './components/access/access.scss';

import Passport from './components/restaurant-list/Passport.js';
import Passports from './components/Passports';
import Register from './components/access/Register';
import Login from './components/access/Login';
import NavBar from './components/nav-bar/nav-bar';
import Landing from './components/access/Landing';

function App() {
	return (
		<div className="App">
			<Route path="/" component={NavBar} />
			<Switch>
				<Route exact path="/(|login|register)" component={Landing} />
				<Route exact path="/passports" component={Passports} />
				<Route exact path="/restaurants" component={Passport} />
			</Switch>
		</div>
	);
}

export default App;
