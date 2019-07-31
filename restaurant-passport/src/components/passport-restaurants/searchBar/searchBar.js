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

const SearchBar = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");
  const resultRenderer = ({ business_name }) => (
    <Label content={business_name} />
  );
  const handleResultSelect = (e, { result }) => {
    setValue(result.business_name);
    setRestaurants(
      restaurants.filter(
        restaurant => restaurant.business_id === result.business_id
      )
    );
    setCols(1);
  };
  const handleSearchChange = (e, { value }) => {
    setIsLoading(true);
    setValue(value);
    setTimeout(() => {
      if (value.length < 1) {
        setRestaurants(restaurantList);
        setIsLoading(false);
        setResults([]);
        setValue("");
        setCols(4);
      }

      const re = new RegExp(_.escapeRegExp(value), "i");
      const isMatch = result => re.test(result.business_name);
      setIsLoading(false);
      setResults(_.filter(restaurants, isMatch));
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