import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">

                    <Navbar.Brand href="/">Drink Website</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/favorite">Favorite</Nav.Link>

                    </Nav>

                </Navbar>
            </div>
        )
    }
}

export default Footer
