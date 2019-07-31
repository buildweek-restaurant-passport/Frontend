import React,{ useState, useEffect }  from "react";
import { Card, Button, Icon, Header, Modal } from "semantic-ui-react";

const RestaurantInfo = (props, stamped) => {


    const { business_name } = props
    const { type } = props
    const { business_address } = props
    const { inspection_type } = props
    const { violation_description } = props
    const { inspection_score } = props
    



    return (
        
            
            <>
                <Header content='Restaurant Info' />
                <Modal.Content>

                    <Card style={{ margin: '10px auto', padding: '8px', boxShadow: '0px 0px 3px #085f63', width: '85%' }}>
                        <Card.Content>
                            <Card.Header>
                            {business_name}
                            {stamped && <Icon name = "check" style ={{fontSize: "10px", margin: 'auto 0', paddingLeft:'10px', color : '##49beb7'}}/> || ' ' }
                            </Card.Header>
                            <Card.Meta>
                            <p>Address : {business_address}</p>
                            </Card.Meta>
                            <Card.Description>
                                <p>Inspection Score : {inspection_score}</p>
                                <p>Inspection Type : {inspection_type}</p>
                                <p>Violation Description : {violation_description}</p>
                            </Card.Description>
                        </Card.Content>
                    </Card>

                </Modal.Content>

                <Modal.Actions style = {{display:'flex', alignContent : 'center', justifyContent : 'center', flexDirection : 'column'}}>

                    <Button primary style={{ backgroundColor: "#49beb7", color: '#f1f1f1', width: '75%', margin: '8px auto' }} >
                        <Icon name='remove' />Add To Passport
                    </Button>

                    <Button secondary style = {{ backgroundColor: "#085f63", color: '#f1f1f1', width: '75%', margin: '8px auto'  }} >
                        <Icon name='checkmark' /> Remove From Passport
                    </Button>

                </Modal.Actions>

            </>
        
    );


};

export default RestaurantInfo;
