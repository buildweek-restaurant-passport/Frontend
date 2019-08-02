import React, {
  useState,
  useEffect
} from "react";

import { getRestaurants } from "../../actions/Restaurants"; //redux
import { getVisited, addVisited } from "../../actions/Restaurants"; //redux
import { connect } from "react-redux"; //redux
import {
  Container,
  Header,
  Grid,
  Checkbox,
  Input,
  Loader
} from "semantic-ui-react";
import RestaurantModal from "../passport-restaurants/restaurantModal/restaurantModal";

const Passport = props => {
  const { getRestaurants, getVisited } = props;
  const [checked, setChecked] = useState(false);
  const [cols, setCols] = useState(4);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searching, setSearching] = useState(false);



  const toggle = () => {
    console.log(props.savedRestaurants)
    setChecked(!checked)
  };

  useEffect(() => {
    getRestaurants();
    getVisited();
  }, [getRestaurants, getVisited]);

  const searchRestaurantsHandler = e => {
    const restaurants = props.restaurants.body.filter(r => {
      if (r.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return r;
      }
    });
    setSearching(true);
    setFilteredRestaurants(restaurants);
  };

  return (
    <Container style={{ marginTop: "3em" }} className="content-container">
      <div className="header">
        <Header as="h1" className="city-name">
          Restaurants
        </Header>
        <div className="lower-header-content">
          <Input
            onChange={searchRestaurantsHandler}
            placeholder="Search For Your Next Eat . . ."
            className="search-bar-header"
          />
          <Checkbox
            label="Stamped Restaurants"
            onChange={toggle}
            className="checkbox"
            checked={checked}
          />
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center restaurant-container">
        {props.isFetching ? (
          <Loader>Loading</Loader>
        ) : (
          <Grid centered columns={cols}>
            {searching
              ? (filteredRestaurants.map(rest => (
                                <RestaurantModal
                                  rest={rest}
                                  key={rest.id}
                                  
                                />
                              )))
              : checked? (
                props.savedRestaurants.body.map(rest => (
                  <RestaurantModal
                    rest={rest}
                    key={rest.id}
                    
                  />
                ))
                )
              : props.restaurants.body.map(rest => (
                  <RestaurantModal
                    rest={rest}
                    key={rest.id}
                    
                  />
                ))
            }
          </Grid>
        )}
      </div>
      <div>{console.log(props.restaurants && props.savedRestaurants)}</div>
    </Container>
  );
};

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  savedRestaurants: state.savedRestaurants,
  error: state.error,
  isFetching: state.isFetching,
  isFetchingSaved: state.isFetchingSaved,
  addingRest: state.addingRest,
  delRest: state.delRest
});

export default connect(
  mapStateToProps,
  { getRestaurants, getVisited, addVisited }
)(Passport);
