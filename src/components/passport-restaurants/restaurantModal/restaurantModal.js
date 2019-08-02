import React, { useState, useEffect, useCallback } from "react";
import { Icon, Modal, Button } from "semantic-ui-react";
import _ from "lodash";
import RestaurantInfo from "../../passport-restaurants/restaurant-info";
import { addVisited, delVisited } from "../../../actions/Restaurants"; //redux
import { connect } from "react-redux"; //redux


const RestaurantModal = props => {
  const { id } = props.rest.id;
  const xyz =
    props.savedRestaurants.body.findIndex(rest => rest.id === props.rest.id) >
    -1;

  const [checked, setChecked] = useState(
    props.savedRestaurants.body.findIndex(rest => rest.id === props.rest.id) >
      -1
  );
  const [cardHovered, setCardHovered] = useState(false);

  const { setSavedRestaurants } = props;

  const { savedRestaurants } = props;

  const toggleCardButtons = () => {
    setCardHovered(!cardHovered);
  };

 
  const [restId, setRestId] = useState();

  const handleAdd = event => {
    event.stopPropagation();
    event.preventDefault();
    props.addVisited(restId);
    
  };


  const handleRemove = event => {
    event.stopPropagation();
    event.preventDefault();
    props.delVisited(restId)
  };


  useEffect(() => {
    setRestId(props.rest.id)
  }, [cardHovered]);

  return (

    <div
      className="px-6 py-4"
      onMouseEnter={toggleCardButtons}
      onMouseLeave={toggleCardButtons}
    >

      <Modal
        style={{ width: "40%" }}
        closeIcon
        trigger={
          <Button basic className="column basic restaurant-card" as="div">
            <p className="rest-details rest-name">
              {props.rest.name}
              {checked && (
                <Icon
                  name="check"
                  style={{
                    fontSize: "10px",
                    margin: "auto 0",
                    paddingLeft: "10px",
                    color: "##49beb7"
                  }}
                />
              )}
            </p>
            <p className="rest-details">{`${props.rest.city}, ${props.rest.country}`}</p>
            <p className="rest-details">{`${props.rest.type}`}</p>
            <div className="add-remove-buttons">
              {checked && cardHovered && (
                <button className="add">

                  <Icon
                    name="minus"
                    style={{ color: "#FF2400", fontSize: "25px" }}
                    className="removeBtn"
                    onClick={handleRemove}
                  />
                </button>
              )}

              {!checked && cardHovered && (
                <button className="remove" name="add" value={id}>

                  <Icon
                    name="plus"
                    style={{ color: "#085f63", fontSize: "25px" }}
                    className="addBtn"
                    onClick={handleAdd}
                  />
                </button>
              )}
            </div>
          </Button>
        }
      >
        <RestaurantInfo
          info={props.rest}
          setSavedRestaurants={props.setSavedRestaurants}
          savedRestaurants={props.savedRestaurants}
          setChecked={setChecked}
          checked={checked}
          setCardHovered={setCardHovered}
        />
      </Modal>
    </div>
  );
};

//export default RestaurantModal;
const mapStateToProps = state => ({
  error: state.error,
  addingRest: state.addingRest,
  delRest: state.delRest
});


export default connect(
  mapStateToProps,
  { addVisited,
    delVisited
   }
)(RestaurantModal);
