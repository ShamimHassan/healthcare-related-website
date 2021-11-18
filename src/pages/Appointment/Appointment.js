import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Appointment = () => {
    return (
        <section className='py-5'>
            <Container>
                <h2>Reserve an <span className='fw-bold text-danger'>Appointment</span></h2>
                <Form className='mt-5'>
                    <Row  xs='1' md='2' className='g-3 mb-0 mb-md-3'>

                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Row>

                    <Row  xs='1' md='2' className='g-3'>
                        <Form.Group as={Col} className="mb-3" controlId="formGridPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control placeholder="+88017xxxxxxx" />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>
                    </Row>

                    <Row  xs='1' md='2' className='g-3 mb-3'>
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Available Services</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Fixing Implants</option>
                            <option>Crown & Bridge Repair</option>
                            <option>Root Canal</option>
                            <option>Dental Filling</option>
                        </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Staff</Form.Label>
                        <Form.Select defaultValue="none">
                            <option>Select</option>
                            <option>Dr. Hennah Krish</option>
                            <option>Dr. Ankitha Prem</option>
                            <option>Dr. Morish Stave</option>
                        </Form.Select>
                        </Form.Group>
                    </Row>
                        <h3 className='my-4'>Time:</h3>
                    <Row xs='1' md='3' className='g-3'>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>I am available on</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Start</Form.Label>
                            <Form.Control type="time" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>End</Form.Label>
                            <Form.Control type="time" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Col xs='12' md='6' lg='4'>
                            <div className='d-grid mt-4'>
                                <Button variant="primary" type="submit" className='px-5 py-2 text-uppercase fw-bold'>
                                    Book Now
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </section>
    );
};

export default Appointment;