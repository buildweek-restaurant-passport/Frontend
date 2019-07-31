import React, { useState, useEffect } from "react";
import {
  Icon,
  Modal,
  Button
} from "semantic-ui-react";
import _ from "lodash";
import RestaurantInfo from "../../restaurant-info/restaurant-info";


const RestaurantModal = props => {
  const [checked, setChecked] = useState(true);
  const [stamped, setStamped] = useState(true);

    const handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    console.log("hello");
  };

//const rest = { ...rest, restStampedStatus: stamped };
return (
              <div className="px-6 py-4">
                <Modal
                  key={props.rest.business_id}
                  style={{ width: "40%" }}
                  closeIcon
                  trigger={
                    <Button
                      basic
                      className="column basic restaurant-card"
                      as="div"
                    >
                      <div className=" rounded  ">
                        <div className="px-6 py-4">
                          <div className="font-bold text-xl mb-2">
                            {props.rest.business_name}
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
                          </div>
                          <p className="text-gray-700 text-base">{`${props.rest.business_city}, ${props.rest.business_state}`}</p>
                          <p className="text-gray-700 text-base">{`${props.rest.business_address}, ${props.rest.business_phone_number}`}</p>
                        </div>
                        {checked && (
                          <p
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 bg-green-200"
                            onClick={handleClick}
                          >
                            Visit
                          </p>
                        )}
                        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 bg-red-200">
                          Dont Visit
                        </p>
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