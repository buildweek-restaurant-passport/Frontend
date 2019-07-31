import React, { useState, useEffect } from "react";
import {
  Icon,
  Modal,
  Button,
  Checkbox
} from "semantic-ui-react";
import _ from "lodash";
import RestaurantInfo from "../../restaurant-info/restaurant-info";


const RestaurantModal = props => {
  const [checked, setChecked] = useState(true);
  const [stamped, setStamped] = useState(true);
  const displayButtons = (event) => {}
  const hideButtons = (event) => {}

    const handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    console.log("hello");
  };

//const rest = { ...rest, restStampedStatus: stamped };
return (
              <div className="px-6 py-4" onMouseEnter = {displayButtons} onMouseLeave= {displayButtons}>
                <Modal
                  key={props.rest.id}
                  style={{ width: "40%" }}
                  closeIcon
                  trigger={
                    <Button
                      basic
                      className="column basic restaurant-card"
                      as="div"
                    >
                    <p className='rest-details rest-name'>{props.rest.name}</p>
                            {(props.rest.stampedStatus && (
                              <Icon
                                name="check"
                                style={{
                                  fontSize: "10px",
                                  margin: "auto 0",
                                  paddingLeft: "10px",
                                  color: "##49beb7"
                                }}
                              />
                            )) ||
                              " "}
                        <p className="rest-details">{`${props.rest.business_city}, ${props.rest.business_state}`}</p>
                        <p className="rest-details">{`${props.rest.business_address}, ${props.rest.business_phone_number}`}</p>
                        <div className = 'add-remove-buttons'>
                          {checked && (
                            <button className="add"
                            onClick={handleClick}
                            >
                            <Icon name = 'plus' style ={{color: '#085f63' , fontSize:'25px'}} className='addBtn'/>
                            </button>
                          )}
                          {checked && (
                            <button className="remove"
                            onClick={handleClick}
                            >
                            <Icon name = 'minus' style ={{color: '#FF2400' , fontSize:'25px'}} className='removeBtn'/>
                            </button>
                          )}
                        </div>


                    </Button>
                  }
                >
                  <RestaurantInfo
                    {...props.rest}
                    key={props.rest.business_id}
                    setStamped={setStamped}
                  />
                </Modal>
              </div>
)
}

export default RestaurantModal;