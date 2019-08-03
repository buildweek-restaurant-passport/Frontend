import React ,{useEffect}from "react";
import { Card, Button, Icon, Modal } from "semantic-ui-react";

const RestaurantInfo = (props) => {

    const {setChecked} = props

    const {checked} = props

    const {setSavedRestaurants} = props

    const {savedRestaurants} = props
    
    const {setCardHovered} = props

    const {visitedChecked} = props

    const addToSavedList = (event) => {
        setSavedRestaurants(savedRestaurants => [...savedRestaurants, {...props.info}])
        setChecked(true)
    }
    
    const removeFromSavedList = (event) => {
        //finding index of element with matching id
        const id = props.info.id
        const itemToRemove = savedRestaurants.findIndex(restaurant => restaurant.id === id )
        //removing item from array
        savedRestaurants.splice(itemToRemove, 1)
        setSavedRestaurants(savedRestaurants => [...savedRestaurants])

        setChecked(false)

    }
    
    //reseting cards hovered state back to false

      useEffect(() =>{

        setCardHovered(cardHovered => !cardHovered)

      },[setChecked ])

    return (


        <div style = {{margin:'20px'}}>
            <Modal.Header style = {{fontSize : '2.4rem', width: '75%', margin: '15px auto',textAlign:'center', fontWeight:'700'}}>Restaurant Info</Modal.Header>
            <Modal.Content>
                <Card style={{ margin: '10px auto', padding: '8px', boxShadow: '0px 0px 3px #085f63', width: '95%'}}>
                    <Card.Content>
                        <Card.Header style ={{fontSize:'2.0rem'}}>
                            {props.info.name}
                            { checked && <Icon name="check" style={{ fontSize: "10px", margin: 'auto 0', paddingLeft: '10px', color: '##49beb7' }} />}
                        </Card.Header>
                        
                        <Card.Description>
                            <p style = {{fontSize:'1.2rem'}}>City : {props.info.city}</p>
                        
                            <p style = {{fontSize:'1.2rem'}}>Country : {props.info.country}</p>
                            <p style = {{fontSize:'1.2rem'}}>Cuisine Type : {props.info.type}</p>
                            <p style = {{fontSize:'1.2rem'}}>Restaurant Description : {props.info.description}</p>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Modal.Content>

            <Modal.Actions style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', flexDirection: 'column' }}>

                {visitedChecked || !checked && <Button primary style={{ backgroundColor: "#49beb7", color: '#f1f1f1', width: '75%', margin: '8px auto' }} onClick={addToSavedList}>
                    <Icon name='checkmark' />Add To Passport
                    </Button>}

                {checked && <Button secondary style={{ backgroundColor: "#085f63", color: '#f1f1f1', width: '75%', margin: '8px auto' }} onClick={removeFromSavedList}>
                    <Icon name='remove' /> Remove From Passport
                    </Button>}

            </Modal.Actions>

        </div>

    );


};

export default RestaurantInfo;
