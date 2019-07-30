import axios from 'axios';

export const FETCH_RESTAURANTS_START = 'FETCH_RESTAURANTS_START';
export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS';
export const FETCH_RESTAURANTS_FAIL = 'FETCH_RESTAURANTS_FAIL';

export const getRestaurants = () => dispatch => {
	dispatch({ type: FETCH_RESTAURANTS_START });
	axios
		.get('')
		.then(res => {
			dispatch({ type: FETCH_RESTAURANTS_SUCCESS, payload: res.data });
		})
		.catch(err => dispatch({ type: FETCH_RESTAURANTS_FAIL, payload: err }));
};
