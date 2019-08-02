import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Passport from './components/restaurant-list/Passport.js';
import Passports from './components/passports/Passports';
import NavBar from './components/nav-bar/nav-bar';
import Landing from './components/access/Landing';
import PrivateRouteWithProps from './authentication/PrivateRouteWithProps';

import './App.css';
import './css/access.scss';
import './css/passport.scss';

function App() {
	return (
		<div className='App'>
			<Route path='/' component={NavBar} />
			<Switch>
				<Route exact path='/(|login|register)' component={Landing} />
				<PrivateRouteWithProps exact path='/passports' component={Passports} />
				<PrivateRouteWithProps exact path='/restaurants' component={Passport} />
			</Switch>
		</div>
	);
}

export default App;
