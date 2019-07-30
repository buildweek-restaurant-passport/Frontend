import React from 'react';
import './App.css';
import Passport from './components/Passport';
import Passports from './Passports';
import Register from './components/Register';
import Login from './components/Login';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={Register} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/passports' component={Passports} />
			<Route exact path='/restaurants' component={Passport} />
		</div>
	);
}

export default App;
