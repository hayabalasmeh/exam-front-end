import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handelingClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(event) => this.props.updateFav(event)}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.name} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="image"  >
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.image} />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={this.props.handelingClose}>
                                Save
                            </Button>
                        </Form>
                    </Modal.Body>

                </Modal>
            </div>
        )
    }
}

export default UpdateForm
