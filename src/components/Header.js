import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">

                    <Navbar.Brand href="/">Cocktail drink App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/favorite">Favorite</Nav.Link>

                    </Nav>

                </Navbar>
            </div>
        )
    }
}

export default Header
