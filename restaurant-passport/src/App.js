import React from 'react';
import './App.css';
import './components/passport-restaurants/passport.scss'
import Passport from './components/passport-restaurants/Passport.js';
import Passports from './Passports';
import Register from './components/Register';
import Login from './components/Login';
import { Route , Switch} from 'react-router-dom';
import NavBar from './components/nav-bar/nav-bar'

function App() {
	return (
		<div className='App'>
			<NavBar />
				<Switch>
					<Route exact path='/' component={Register} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/passports' component={Passports} />
					<Route exact path='/restaurants' component={Passport} />
				</Switch>
		</div>
	);
}

export default App;
