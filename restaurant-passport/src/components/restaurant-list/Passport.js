import React, { useState, useEffect } from "react";
import { getRestaurants } from '../../actions/Restaurants'; //redux
import { connect } from 'react-redux'; //redux
import {
  Container,
  Header,
  Grid,
  Checkbox
} from "semantic-ui-react";
import axios from 'axios';

import RestaurantModal from '../passport-restaurants/restaurantModal/restaurantModal'
import SearchBar from "../passport-restaurants/searchBar/searchBar";

const Passport = props => {

  const getRestaurants = e => {
    e.preventDefault();
    props.getRestaurants();
  };

  // const [restaurants, setRestaurants] = useState(restaurantList);
  const [restaurants, setRestaurants] = useState();
  //checking state of stamped , if true  checkmark will be added to component
  const [checked, setChecked] = useState(true);
  const [cols, setCols] = useState(4);


  const toggle = () => setChecked(!checked);

	const retrieveRestaurants = () => {
		(async () => {
			try {
				const repsonse = await axios.get('https://restaurant-app-appi.herokuapp.com/api/v1/restaurants');
        setRestaurants(repsonse.data.body);
			} catch (error) {
				console.error(error);
			}
		})();
	};
	useEffect(retrieveRestaurants, []);

  // add remove restaurant to passport

  const [savedRestaurants, setSavedRestaurants] = useState([])

  useEffect(()=>{
    // console.log(savedRestaurants)
  },[savedRestaurants])


  return (
    <div>
      {restaurants === undefined
        ? <h1>Loading...</h1>
        : <Container style={{ marginTop: "3em" }} className="content-container">
          <div className="header">
            <Header as="h1" className="city-name">
              Restaurants
            </Header>
            <div className="lower-header-content">
              <SearchBar
                restaurants={restaurants}
                setRestaurants={setRestaurants}
                setCols={setCols}
                restaurantList={restaurants}
              />
              <Checkbox
                label="Show Visited"
                onChange={toggle}
                checked={checked}
                className="checkbox"
              />
            </div>
          </div>

          <div className="min-h-screen flex items-center justify-center restaurant-container">
            <Grid centered columns={cols}>


              {restaurants.map(rest => 
                <RestaurantModal {...rest} key={rest.business_id} setSavedRestaurants = {setSavedRestaurants}  savedRestaurants= {savedRestaurants} />
              )}
            </Grid>
          </div>
        </Container>
      }
    </div>
  );
};



export default Passport;

//Redux setup
// const mapStateToProps = state => ({
//   restaurants     : state.restaurants,
//   error      : state.error,
//   isFetching : state.isFetching,
// });

// export default connect(mapStateToProps, { getRestaurants })(Passport);

