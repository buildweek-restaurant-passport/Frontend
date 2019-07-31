import React, { useState } from "react";
import { Icon, Modal, Button } from "semantic-ui-react";
import _ from "lodash";
import RestaurantInfo from "../../restaurant-info/restaurant-info";

const RestaurantModal = props => {
  const [checked, setChecked] = useState(true);
  const [stamped, setStamped] = useState(true);


  const handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className="px-6 py-4">
      <Modal
        style={{ width: "40%" }}
        closeIcon
        trigger={
          <Button basic className="column basic restaurant-card" as="div">
            <p className="rest-details rest-name">
              {props.name}
              <Icon
                name="check"
                style={{
                  fontSize: "10px",
                  margin: "auto 0",
                  paddingLeft: "10px",
                  color: "##49beb7"
                }}
              />
            </p>
            <p className="rest-details">{`${props.city}, ${props.country}`}</p>
            <p className="rest-details">{`${props.type}`}</p>
            <div className="add-remove-buttons">
              {checked && (
                <button className="add" onClick={handleClick}>
                  <Icon
                    name="plus"
                    style={{ color: "#085f63", fontSize: "25px" }}
                    className="addBtn"
                  />
                </button>
              )}
              {checked && (
                <button className="remove" onClick={handleClick}>
                  <Icon
                    name="minus"
                    style={{ color: "#FF2400", fontSize: "25px" }}
                    className="removeBtn"
                  />
                </button>
              )}
            </div>
          </Button>
        }
      >
        <RestaurantInfo info = {props} />
      </Modal>
    </div>
  );
};

export default RestaurantModal;
