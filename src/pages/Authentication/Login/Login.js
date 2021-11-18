import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth/useAuth';

const Login = () => {
    const {googleLogIn, handelEmail, handelPassword, handelLogIn} = useAuth();
    const location = useLocation();
    const history = useHistory();
        const handelGoogleLogIn = () => {
                googleLogIn()
            .then(() => {
                console.log(location?.state?.from?.pathname)
                history.push(location?.state?.from?.pathname || '/home');
            })
        }
        const emailUserLogin = (e) => {
            e.preventDefault();
            handelLogIn()
            .then((userCredential) => {
                history.push(location?.state?.from?.pathname || '/home');
              })
        }

    return (
        <section className='py-5 bg-info'>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col md='5' className='bg-white'>
                        <div className='py-4 px-3'>
                            <h4 className="text-primary fw-bold">LogIn</h4>
                            <Form onSubmit={emailUserLogin}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onBlur={handelEmail} type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onBlur={handelPassword} type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remenber me" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Log In
                                </Button>
                                </Form>
                            <div className='my-4'>
                                <Button variant='outline-dark' onClick={handelGoogleLogIn}>Login with Google</Button>
                            </div>
                            <p className='fw-bold'>I have no account?? <Link to="/register">Register</Link> </p>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
};

export default Login;