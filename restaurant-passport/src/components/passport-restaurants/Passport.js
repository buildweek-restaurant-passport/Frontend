import React, { useState, useEffect, useReducer, useContext, createContext } from 'react';

import { getRestaurants } from '../../actions/Restaurants'; //redux
import { connect } from 'react-redux'; //redux
import { Container, Header, Grid, Checkbox, Input, Loader, Dropdown } from 'semantic-ui-react';
import axios from 'axios';
import RestaurantModal from '../passport-restaurants/restaurantModal/restaurantModal';


const Passport = props => {
	const { getRestaurants } = props;
	//checking state of stamped , if true  checkmark will be added to component
	const [ visitedChecked, setVisitedChecked ] = useState(false);
	const [ cols, setCols ] = useState(4);
	const [ filteredRestaurants, setFilteredRestaurants ] = useState([]);
	const [ searching, setSearching ] = useState(false);

	const toggle = () => setVisitedChecked(!visitedChecked);

	useEffect(
		() => {
			getRestaurants();
		},
		[ getRestaurants ],
	);

	const searchRestaurantsHandler = e => {
		const restaurants = props.restaurants.body.filter(r => {
			if (r.name.toLowerCase().includes(e.target.value.toLowerCase())) {
				return r;
			}
		});
		setSearching(true);
		setFilteredRestaurants(restaurants);
	};

	const [ savedRestaurants, setSavedRestaurants ] = useState([]);

	return (
		<Container style={{ marginTop: '3em' }} className='content-container'>
			<div className='header'>
				<Header as='h1' className='city-name'>
					Restaurants
				</Header>
				<div className='lower-header-content'>
					<Input onChange={searchRestaurantsHandler} placeholder='Search For Your Next Eat . . .'  className = 'search-bar-header' />
					{<Checkbox label='Stamped Restaurants' onChange={toggle} checked={visitedChecked} className='checkbox' />}
				</div>
			</div>

			<div className='min-h-screen flex items-center justify-center restaurant-container'>
				{props.isFetching ? (
					<Loader>Loading</Loader>
				) : (
					<Grid centered columns={cols}>
						{searching ? (
							filteredRestaurants.map(rest => (
								<RestaurantModal
									rest={rest}
									key={rest.id}
									setSavedRestaurants={setSavedRestaurants}
									savedRestaurants={savedRestaurants}
									visitedChecked={visitedChecked}
								/>
							))
						) : visitedChecked ? (
							savedRestaurants.map(rest => (
								<RestaurantModal
									rest={rest}
									key={rest.id}
									setSavedRestaurants={setSavedRestaurants}
									savedRestaurants={savedRestaurants}
									visitedChecked={visitedChecked}
								/>
							))
						) : (
							props.restaurants.body.map(rest => (
								<RestaurantModal
									rest={rest}
									key={rest.id}
									setSavedRestaurants={setSavedRestaurants}
									savedRestaurants={savedRestaurants}
									visitedChecked={visitedChecked}
								/>
							))
						)}
					</Grid>
				)}
			</div>
		</Container>
	);
};

const mapStateToProps = state => ({
	restaurants : state.restaurants,
	error       : state.error,
	isFetching  : state.isFetching,
});

export default connect(mapStateToProps, { getRestaurants })(Passport);
