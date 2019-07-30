import { FETCH_RESTAURANTS_START, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAIL } from '../actions/Restaurants';

const initialState = {
	restaurants : [],
	isFetching  : false,
	error       : '',
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
		default:
			return state;
	}
}
export default RestaurantData;
