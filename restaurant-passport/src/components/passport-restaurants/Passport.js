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
import RestaurantModal from "./restaurantModal/restaurantModal";
import SearchBar from "./searchBar/searchBar";

const Passport = props => {
  
  //checking state of stamped , if true  checkmark will be added to component
  const [stamped, setStamped] = useState(true);
  const [checked, setChecked] = useState(true);
  const [cols, setCols] = useState(4);

  const [hovered, setHovered] = useState(false);



  const toggle = () => setChecked(!checked);

  const setRestaurants = useState([]);

  useEffect(() => {
    props.getRestaurants();
  }, []);

  return (
    <Container style={{ marginTop: "3em" }} className="content-container">
      <div className="header">
        <Header as="h1" className="city-name">
          Restaurants
        </Header>
        <div className="lower-header-content">
          <SearchBar
            restaurants={props.restaurants}
            setRestaurants={setRestaurants}
            setCols={setCols}
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
        {props.isFetching ? (
          <p>Fetching your Pokémon</p>
        ) : (
          <Grid centered columns={cols}>
            {props.restaurants.body.map(rest => (
              <RestaurantModal rest={rest} key={rest.id} />
            ))}
          </Grid>
        )}
      </div>
    </Container>

)


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
