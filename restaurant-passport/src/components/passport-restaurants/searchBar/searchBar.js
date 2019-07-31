import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Grid,
  Checkbox,
  Search,
  Label,
  Icon,
  Modal,
  Button,
  Rating
} from "semantic-ui-react";
import _ from "lodash";

const SearchBar = props => {

  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");

  const resultRenderer = ({ business_name }) => (
    <Label attached='bottom'
    content={business_name} />
  );
  const handleResultSelect = (e, { result }) => {
    setValue(result.business_name);
    props.setRestaurants(
      props.restaurants.filter(
        restaurant => restaurant.business_id === result.business_id
      )
    );
    props.setCols(1);
  };
  const handleSearchChange = (e, { value }) => {
    setIsLoading(true);
    setValue(value);
    setTimeout(() => {
      if (value.length < 1) {
        props.setRestaurants(props.restaurantList);
        setIsLoading(false);
        setResults([]);
        setValue("");
        props.setCols(4);
      }

      const re = new RegExp(_.escapeRegExp(value), "i");
      const isMatch = result => re.test(result.business_name);
      setIsLoading(false);
      setResults(_.filter(props.restaurants, isMatch));
    }, 300);
  };

return (
            <Search
              className= 'search-bar-header'
              loading={isLoading}

              onResultSelect={handleResultSelect}
              onSearchChange={_.debounce(handleSearchChange, 500, {
                leading: true
              })}
              results={results}
              value={value}
              resultRenderer={resultRenderer}
            />
)
          }

export default SearchBar