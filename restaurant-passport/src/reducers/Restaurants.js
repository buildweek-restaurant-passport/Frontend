import {
	FETCH_RESTAURANTS_START,
	FETCH_RESTAURANTS_SUCCESS,
	FETCH_RESTAURANTS_FAIL,
	SEARCH,
	FETCH_SAVED_START,
	FETCH_SAVED_SUCCESS,
	FETCH_SAVED_FAIL,
} from '../actions/Restaurants';

const initialState = {
	restaurants      : [],
	savedRestaurants : [],
	isFetching       : true,
	error            : '',
	search           : '',
};

function RestaurantData(state = initialState, action) {
	switch (action.type) {
		case FETCH_RESTAURANTS_START:
			return {
				...state,
				isFetching : true,
				error      : 'You have not successfully fetched the restaurants!',
			};
		case FETCH_RESTAURANTS_SUCCESS:
			return {
				...state,
				restaurants : action.payload,
				isFetching  : false,
				error       : '',
			};
		case FETCH_RESTAURANTS_FAIL:
			return {
				...state,
				error : action.payload,
			};
		case SEARCH:
			return {
				...state,
				search      : action.payload,
				restaurants : action.payload.filter(restaurant => restaurant.name.includes(action.payload)),
			};
		case FETCH_SAVED_START:
			return {
				...state,
				isFetching : true,
				error      : 'You have not successfully fetched the saved restaurants!',
			};
		case FETCH_SAVED_SUCCESS:
			return {
				...state,
				savedRestaurants : action.payload,
				isFetching       : false,
				error            : '',
			};
		case FETCH_SAVED_FAIL:
			return {
				...state,
				error : action.payload,
			};

		default:
			return state;
	}
}
export default RestaurantData;
