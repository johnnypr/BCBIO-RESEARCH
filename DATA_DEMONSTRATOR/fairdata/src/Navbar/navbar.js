import React from 'react';
import {Navbar,Nav,FormControl,Form,Button} from 'react-bootstrap';


export default function Navigation(){
    return(
        <>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Data Demonstrator</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#models">Models</Nav.Link>
        </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
        </Form>
    </Navbar>
        </>
    );

}
