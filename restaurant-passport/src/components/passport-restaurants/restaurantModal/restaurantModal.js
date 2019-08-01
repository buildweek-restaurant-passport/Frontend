import React, { useState , useEffect} from "react";
import { Icon, Modal, Button } from "semantic-ui-react";
import _ from "lodash";
import RestaurantInfo from "../restaurant-info";

const RestaurantModal = (props) => {

  const [checked, setChecked] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);
  
  const {setSavedRestaurants} = props

  const {savedRestaurants} = props

  const {visitedChecked} = props



  const toggleCardButtons = () => {
    setCardHovered(!cardHovered)
  }

  
  const handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  const addToSavedList = (event) => {
    setSavedRestaurants(savedRestaurants => [...savedRestaurants, {...props}])
    setChecked(!checked)
  }

  const removeFromSavedList = (event) => {
    //finding index of element with matching id
    const id = props.id
    const itemToRemove = savedRestaurants.findIndex(restaurant => restaurant.id === id )
    //removing item from array
    savedRestaurants.splice(itemToRemove, 1)
    setSavedRestaurants(savedRestaurants => [...savedRestaurants])
    setChecked(!checked)
  }

  useEffect (() =>{
    // console.log(checked)
  },[checked])

  useEffect(() =>{

  },[cardHovered])
  
  return (
    <div className="px-6 py-4" onMouseEnter = {toggleCardButtons} onMouseLeave = {toggleCardButtons}>
      <Modal
        style={{ width: "40%" }}
        closeIcon
        trigger={
          <Button basic className="column basic restaurant-card" as="div">
            <p className="rest-details rest-name">
              {props.rest.name}
              {checked && <Icon
                name="check"
                style={{
                  fontSize: "10px",
                  margin: "auto 0",
                  paddingLeft: "10px",
                  color: "##49beb7"
                }}
              />}
            </p>
            <p className="rest-details">{`${props.rest.city}, ${props.rest.country}`}</p>
            <p className="rest-details">{`${props.rest.type}`}</p>
            <div className="add-remove-buttons">
              { checked && cardHovered && (
                <button className="add" onClick={handleClick}>
                  <Icon
                    name="minus"
                    style={{ color: "#FF2400", fontSize: "25px" }}
                    className="removeBtn"
                    onClick = {removeFromSavedList}
                  />
                </button>
              )}
              {!visitedChecked && !checked && cardHovered && (
                <button className="remove" onClick={handleClick}>
                  <Icon
                    name="plus"
                    style={{ color: "#085f63", fontSize: "25px" }}
                    className="addBtn"
                    onClick = {addToSavedList}
                  />
                </button>
              )}
            </div>
          </Button>
        }
      >
        <RestaurantInfo info = {props.rest}  setSavedRestaurants = {setSavedRestaurants} savedRestaurants = {savedRestaurants} setChecked = {setChecked} checked = {checked} setCardHovered = {setCardHovered}/>
      </Modal>
    </div>
  );
};

export default RestaurantModal;
