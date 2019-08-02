import React, { useState, useEffect } from "react";
import { Icon, Modal, Button } from "semantic-ui-react";
import RestaurantInfo from "../../passport-restaurants/restaurant-info";
import {
  addVisited,
  delVisited,
  getVisited
} from "../../../actions/Restaurants"; //redux
import { connect } from "react-redux"; //redux

const CheckedIcon = () => (
  <Icon
    name="check"
    style={{
      fontSize: "10px",
      margin: "auto 0",
      paddingLeft: "10px",
      color: "##49beb7"
    }}
  />
);

const RestaurantModal = props => {
  const [checked, setChecked] = useState(
    props.savedRestaurants.body.findIndex(rest => rest.id === props.rest.id) >
      -1
  );
  const [cardHovered, setCardHovered] = useState(false);



  const [restId, setRestId] = useState(props.rest.id);

  const handleAdd = event => {
    event.stopPropagation();
    event.preventDefault();
    props.addVisited(restId);
    setChecked(true);
  };

  const handleRemove = event => {
    event.stopPropagation();
    event.preventDefault();
    props.delVisited(restId);
    setChecked(false);
  };

  return (
    <div
      className="px-6 py-4"
      
    >
      <Modal
        style={{ width: "40%" }}
        closeIcon
        trigger={
          <Button basic className="column basic restaurant-card" 
          as="div"
          onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
          >
            <p className="rest-details rest-name">
              {props.rest.name}
              {checked && (<CheckedIcon />)}
            </p>
            <p className="rest-details">{`${props.rest.city}, ${props.rest.country}`}</p>
            <p className="rest-details">{`${props.rest.type}`}</p>
            <div className="add-remove-buttons">
              {checked && cardHovered && (
                <button className="removeBtn" onClick={handleRemove}>
                  <Icon
                    name="minus"
                    style={{ color: "#FF2400", fontSize: "25px" }}
                  />
                </button>
              )}
              {!checked && cardHovered && (
                <button className="addBtn" onClick={handleAdd}>
                  <Icon
                    name="plus"
                    style={{ color: "#085f63", fontSize: "25px" }}
                  />
                </button>
              )}
            </div>
          </Button>
        }
      >
        <RestaurantInfo
          info={props.rest}
          savedRestaurants={props.savedRestaurants}
          checked={checked}
          setChecked={setChecked}
        />
      </Modal>
    </div>
  );
};

//export default RestaurantModal;
const mapStateToProps = state => ({
  error: state.error,
  addingRest: state.addingRest,
  savedRestaurants: state.savedRestaurants,
  delRest: state.delRest
});

export default connect(
  mapStateToProps,
  { addVisited, getVisited, delVisited }
)(RestaurantModal);
