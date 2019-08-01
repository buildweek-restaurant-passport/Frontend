import React, {
  useState,
  useEffect,
} from "react";

import { getRestaurants } from "../../actions/Restaurants"; //redux
import { connect } from "react-redux"; //redux
import { Container, Header, Grid, Checkbox, Input, Loader } from "semantic-ui-react";
import RestaurantModal from './restaurantModal/restaurantModal'
//import SearchBar from "../passport-restaurants/searchBar/searchBar";
// import { SEARCH } from "../../actions/Restaurants";
// import { store } from "../../index.js";

const Passport = props => {
  const { getRestaurants } = props;
  //checking state of stamped , if true  checkmark will be added to component
  // const [stamped, setStamped] = useState(true);
  const [visitedChecked, setVisitedChecked] = useState(true);
  const [cols, setCols] = useState(4);
  // const [hovered, setHovered] = useState(false);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searching, setSearching] = useState(false);

  
  const toggle = () => setVisitedChecked(!visitedChecked);

  useEffect(() => {
    getRestaurants();
  }, [getRestaurants]);

  const searchRestaurantsHandler = e => {
    const restaurants = props.restaurants.body.filter(r => {
      if (r.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return r;
      }
    });
    setSearching(true);
    setFilteredRestaurants(restaurants);
  };

  const [savedRestaurants, setSavedRestaurants] = useState([]);

  useEffect(() => {
    console.log(savedRestaurants);
  }, [savedRestaurants]);

  const dropDownOptions = [
    { key: "all", value: props.restaurants.body, text: "All Restaurants" },
    { key: "saved", value: savedRestaurants, text: "Saved Restaurants" }
  ];

  return (
    <Container style={{ marginTop: "3em" }} className="content-container">
      <div className="header">
        <Header as="h1" className="city-name">
          Restaurants
        </Header>
        <div className="lower-header-content">
          {/*          <SearchBar
            restaurants={props.restaurants}
            
            setCols={setCols}
          />*/}
          <Input
            onChange={searchRestaurantsHandler}
            placeholder="search restaurants..."
          />
          {
            <Checkbox
              label="Show Visited"
              onChange={toggle}
              checked={visitedChecked}
              className="checkbox"
            />
          }
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center restaurant-container">
        {props.isFetching ? (
          <Loader>Loading</Loader>
        ) : (
          <Grid centered columns={cols}>
            {searching
              ? filteredRestaurants.map(rest => (
                  <RestaurantModal
                    rest={rest}
                    key={rest.id}
                    setSavedRestaurants={setSavedRestaurants}
                    savedRestaurants={savedRestaurants}
                  />
                ))
              : visitedChecked
              ? savedRestaurants.map(rest => (
                  <RestaurantModal
                    rest={rest.rest}
                    key={rest.id}
                    setSavedRestaurants={setSavedRestaurants}
                    savedRestaurants={savedRestaurants}
                    visitedChecked = {visitedChecked}
                  />
                ))
              : props.restaurants.body.map(rest => (
                  <RestaurantModal
                    rest={rest}
                    key={rest.id}
                    setSavedRestaurants={setSavedRestaurants}
                    savedRestaurants={savedRestaurants}
                  />
                ))}
          </Grid>
        )}
      </div>
    </Container>
  );
};

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { getRestaurants }
)(Passport);
