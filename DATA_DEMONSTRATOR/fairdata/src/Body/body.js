import React from 'react';
import  {Card,CardGroup} from 'react-bootstrap';
import "../Body/body.css";

class MainBody extends React.Component{
    render(){
        return(
            <div className = "block1">
            <CardGroup>
                <Card>
                    <Card.Img src="../corn_b1.jpg" />
                    <Card.Body>
                    <Card.Text>
                    Database Search
                    </Card.Text>
                    </Card.Body>
                </Card>
            
                <Card>
                    <Card.Img variant="bottom" src="../corn_b2.jpg" />
                    <Card.Body>
                    <Card.Text>
                    Analytics
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="../corn_b3.jpg" />
                    <Card.Body>
                    <Card.Text>
                        Tools
                    
                    </Card.Text>
                    </Card.Body>
                </Card>
        
            </CardGroup>
        </div>
        );
    }
}


export default MainBody;