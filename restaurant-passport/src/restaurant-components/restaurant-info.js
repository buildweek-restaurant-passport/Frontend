import React from "react";
import { Card, Button , Icon} from "semantic-ui-react";

const RestaurantInfo = props => {
    
    const {name} = props
    const {type} = props
    const {address} = props
    const {hours} = props
    const {favoriteDish} = props
    const {cuisine} = props

    return (
        <div className="restaurant-info">
            <Card style = {{margin: '40px auto', padding:'8px', boxShadow:'0px 0px 3px #085f63'}}>
                <Card.Content>
                    <Card.Header>{name}
                        <Icon name = "check" style ={{fontSize: "10px", margin: 'auto 0', paddingLeft:'10px', color : '##49beb7'}}></Icon>
                    </Card.Header>
                    <Card.Meta>
                        <span className="city">{type} / {cuisine}</span>
                    </Card.Meta>
                    <Card.Description>
                        <p>Address : {address}</p>
                        <p>Hours : {hours}</p>
                        <p>My Favorite Dish : {favoriteDish}</p>
                    </Card.Description>
                </Card.Content>
                    <Button primary style = {{backgroundColor : "#49beb7", color : '#f1f1f1', width: '75%', margin: '8px auto'}}>Add To Passport</Button>
                    <Button secondary style = {{backgroundColor : "#085f63" , color : '#f1f1f1',  width: '75%', margin: '8px auto'}}>Remove From Passport</Button>
            </Card>
        </div>
    );
};

export default RestaurantInfo;
