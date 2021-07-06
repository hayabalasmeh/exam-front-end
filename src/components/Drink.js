import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export class Drink extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.item.strDrinkThumb} />
                    <Card.Body>
                        <Card.Title>{this.props.item.strDrink}</Card.Title>

                        <Button variant="primary" onClick={() => this.props.addingToFav(this.props.index)}>Add to favorite list</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Drink
