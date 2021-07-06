import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Drink from './Drink';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allDrinks: []
        }
    }

    componentDidMount = async () => {

        const drinks = await axios.get('https://exammm.herokuapp.com/gettingdrink');
        console.log(drinks);
        this.setState({
            allDrinks: drinks.data,
        });
        // console.log(this.state.allDrinks);


        // catch (error) {
        //     console.log(error);
        // }
    }

    addingToFav = async (index) => {
        console.log(index);
        const DrinkObj = {
            name: this.state.allDrinks[index].strDrink,
            image: this.state.allDrinks[index].strDrinkThumb,
        }
        console.log(DrinkObj);
        await axios.post('https://exammm.herokuapp.com/addingtofav', DrinkObj)
    }

    render() {
        return (
            <div>

                <Row xs={1} md={3} className="g-4">
                    {this.state.allDrinks.map((item, index) => {
                        return <Col>
                            <Drink item={item} index={index} addingToFav={this.addingToFav} />
                        </Col>
                    })
                    }
                </Row>

            </div>
        )
    }
}

export default Home
