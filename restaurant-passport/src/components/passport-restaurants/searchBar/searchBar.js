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
  Input
} from "semantic-ui-react";
import _ from "lodash";


const SearchBar = props => {

  const handleChange = e => {
    store.dispatch({ type: SEARCH, payload: e.target.value })
  }

  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");

  const resultRenderer = ({ name }) => (
    <Label attached='bottom'
    content={name} />
  );
  const handleResultSelect = (e, { result }) => {
    setValue(result.name);
    
      props.restaurants.filter(
        restaurant => restaurant.id === result.id
      )
    
    props.setCols(1);
  };
  const handleSearchChange = (e, { value }) => {
    setIsLoading(true);
    setValue(value);
    setTimeout(() => {
      if (value.length < 1) {
        // props.setRestaurants(props.restaurants);
        setIsLoading(false);
        setResults([]);
        setValue("");
        props.setCols(4);
      }

      const re = new RegExp(_.escapeRegExp(value), "i");
      const isMatch = result => re.test(result.name);
      setIsLoading(false);
      setResults(_.filter(props.restaurants, isMatch));
    }, 300);
  };

  return (

                  <Input
                onChange={handleChange}
                placeholder="search posts..."
              />
    )

  // return (
  //   <Search
  //     className= 'search-bar-header'
  //     loading={isLoading}

  //     onResultSelect={handleResultSelect}
  //     onSearchChange={_.debounce(handleSearchChange, 500, {
  //       leading: true
  //     })}
  //     results={results}
  //     value={value}
  //     resultRenderer={resultRenderer}
  //   />
  // )


}

export default SearchBar
