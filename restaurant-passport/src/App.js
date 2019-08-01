import React from 'react';
import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD

import './App.css';
import './components/restaurant-list/passport.scss';
import './components/access/access.scss';

import Passport from './components/restaurant-list/Passport.js';
=======
import Passport from './components/passport-restaurants/Passport.js';
>>>>>>> 94442d78cd50bfc34b2feaa39735cfcf250d0e74
import Passports from './components/Passports';
import Register from './components/access/Register';
import Login from './components/access/Login';
import NavBar from './components/nav-bar/nav-bar';
import Landing from './components/access/Landing';

import './App.css';
import './components/passport-restaurants/passport.scss';
import './components/access/access.scss';

function App() {
	return (
		<div className='App'>
			<Route path='/' component={NavBar} />
			<Switch>
				<Route exact path='/(|login|register)' component={Landing} />
				<Route exact path='/passports' component={Passports} />
				<Route exact path='/restaurants' component={Passport} />
			</Switch>
		</div>
	);
}

export default App;
