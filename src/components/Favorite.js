import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import UpdateForm from './UpdateForm';

export class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favData: [],
            show: false,
            index: -1,
            image: '',
            name: ''
        }
    }
    componentDidMount = async () => {
        const favorite = await axios.get('https://exammm.herokuapp.com/gettingFav');
        this.setState({
            favData: favorite.data,
        })
    }
    delteingFav = async (id) => {
        console.log(id);
        const newData = await axios.delete(`https://exammm.herokuapp.com/deletingFav?id=${id}`);

        this.setState({
            favData: newData.data,
        })
    }
    handelingShow = (index) => {
        this.setState({
            show: true,
            index: index,
            image: this.state.favData[index].image,
            name: this.state.favData[index].name,
        })
    }
    handelingClose = () => {
        this.setState({
            show: false,
        })
    }
    updateFav = async (event) => {
        event.preventDefault();
        const drink = {
            name: event.target.name.value,
            image: event.target.image.value,
            id: this.state.favData[this.state.index]._id,
        }
        console.log(drink);
        const newData = await axios.put('https://exammm.herokuapp.com/update', drink);
        this.setState({
            favData: newData.data,
        })
    }
    render() {
        return (
            <div>
                <Row xs={1} md={3} className="g-4">
                    {this.state.favData.map((item, index) => {
                        return <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>

                                    <Button variant="primary" onClick={() => this.delteingFav(item._id)}>Delete</Button>
                                    <Button variant="primary" onClick={() => this.handelingShow(index)}>Update</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    })
                    }
                </Row>
                <UpdateForm show={this.state.show} handelingShow={this.handelingShow} handelingClose={this.handelingClose} updateFav={this.updateFav} image={this.state.image} name={this.state.name} />
            </div>
        )
    }
}

export default Favorite
