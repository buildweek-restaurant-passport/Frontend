import axios from 'axios';

export const FETCH_RESTAURANTS_START = 'FETCH_RESTAURANTS_START';
export const FETCH_RESTAURANTS_SUCCESS = 'FETCH_RESTAURANTS_SUCCESS';
export const FETCH_RESTAURANTS_FAIL = 'FETCH_RESTAURANTS_FAIL';
export const FETCH_SAVED_START = 'FETCH_SAVED_START';
export const FETCH_SAVED_SUCCESS = 'FETCH_SAVED_SUCCESS';
export const FETCH_SAVED_FAIL = 'FETCH_SAVED_FAIL';

export const getRestaurants = () => dispatch => {
	dispatch({ type: FETCH_RESTAURANTS_START });
	axios
		.get('https://restaurant-app-appi.herokuapp.com/api/v1/restaurants')
		.then(res => {
			dispatch({ type: FETCH_RESTAURANTS_SUCCESS, payload: res.data });
		})
		.catch(err => dispatch({ type: FETCH_RESTAURANTS_FAIL, payload: err }));
};

export const SEARCH = 'SEARCH';

export const searchPosts = payload => {
	return { type: SEARCH, payload };
};

export const getSavedRestaurants = () => dispatch => {
	dispatch({ type: FETCH_SAVED_START });
	axios
		.get('https://restaurant-app-appi.herokuapp.com/api/v1/restaurants/visited')
		.then(res => {
			dispatch({ type: FETCH_SAVED_SUCCESS, payload: res.data });
		})
		.catch(err => dispatch({ type: FETCH_SAVED_FAIL, payload: err }));
};

// export const toggleFavAction = (episode, state, dispatch) => {
//   const episodeInFavourites = state.favourites.includes(episode);
//   let dispatchObj = {
//     type: "ADD_FAV",
//     payload: episode
//   };
//   if (episodeInFavourites)
//     dispatchObj = {
//       type: "REMOVE_FAV",
//       payload: state.favourites.filter(fav => fav.id !== episode.id)
//     };
//   return dispatch(dispatchObj);
// };
