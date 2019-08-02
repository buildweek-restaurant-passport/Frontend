import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  createContext
} from "react";

import { getRestaurants } from "../../actions/Restaurants"; //redux
import { getVisited, addVisited } from "../../actions/Restaurants"; //redux
import { connect } from "react-redux"; //redux
import { Container, Header, Grid, Checkbox, Input, Loader } from "semantic-ui-react";
import axios from "axios";
import RestaurantModal from '../passport-restaurants/restaurantModal/restaurantModal'


const Passport = props => {
  const { getRestaurants, getVisited } = props;
  //checking state of stamped , if true  checkmark will be added to component
  const [stamped, setStamped] = useState(true);
  const [checked, setChecked] = useState(true);
  const [cols, setCols] = useState(4);
  const [hovered, setHovered] = useState(false);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searching, setSearching] = useState(false);
  const [id, setId] = useState('')


  //const toggle = () => setChecked(!checked);
const [ visitedChecked, setVisitedChecked ] = useState(false);

const toggle = () => setVisitedChecked(!visitedChecked);

  useEffect(() => {
    getRestaurants();
    getVisited();
  }, [getRestaurants,getVisited,props.addingRest, props.delRest]);


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
            placeholder='Search For Your Next Eat . . .'  className = 'search-bar-header'
          />
          {<Checkbox
                      label='Stamped Restaurants'
                      onChange={toggle}
                      checked={checked}
                      className="checkbox"
                      checked={visitedChecked}
                    />}
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center restaurant-container">
        {props.isFetching ? (
          <Loader>Loading</Loader>
        ) : (
          <Grid centered columns={cols}>
            {searching
              ? 
                filteredRestaurants.map(rest => (
                  <RestaurantModal rest={rest} key={rest.id}  savedRestaurants= {props.savedRestaurants}/>
                ))
              : 
              props.restaurants.body.map(rest => (
                  <RestaurantModal rest={rest} key={rest.id}   savedRestaurants= {props.savedRestaurants}/>
                ))}
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
  { getRestaurants,getVisited,addVisited }
)(Passport);