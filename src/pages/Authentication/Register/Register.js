import React from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth/useAuth';

const Register = () => {
    const {googleLogIn,handelEmail, handelName, handelPassword, register, updateUserName} = useAuth();

    const history = useHistory();
        const handelGoogleLogIn = () => {
                googleLogIn()
            .then(() => {
                history.push('/home');
            })
        }
    const handelRegister = (e) => {
        e.preventDefault();
        register()
        .then((userCredential) => {
            updateUserName();
            history.push('/home');
          })
    }
    
    return (
        <section className='py-5 bg-dark'>
            <Container>
                <Row>
                    <Col></Col>
                    <Col md='5' className="bg-white">
                        <div className='px-3 py-4 '>
                            <h4 className="text-primary fw-bold">Register</h4>
                            <Form className='mt-4' onSubmit={handelRegister}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control onBlur={handelName} type="text" placeholder="Full name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control onBlur={handelEmail} type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onBlur={handelPassword} type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me" className='rounded-0' />
                                </Form.Group>
                                <Button variant="primary" type="submit" className='px-4 text-uppercase rounded-0'>
                                    Register
                                </Button>
                            </Form>
                            <div className='my-4'>
                                <Button variant='outline-dark' onClick={handelGoogleLogIn}>Regsiter with Google</Button>
                            </div>
                            <div>
                                <p className='fw-bold'>Are you already Member? <Link to='/login'>LogIn</Link> </p>
                            </div>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </section>
    );
};

export default Register;