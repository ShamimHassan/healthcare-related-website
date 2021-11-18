import React from 'react';
import { Container, FormControl, InputGroup, Button, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImg from '../../../img/logo.png'

const Footer = () => {
    return (
        <footer className='bg-light'>
            <Container>
                <article className='text-center border-top border-info border-2 py-5'>
                    <h2><span className='fw-bold text-success'>Newsletter</span><span > Subscription</span></h2>
                    <form>
                    <Row className='pt-4'>
                        <Col />
                        <Col md='6'>
                            <InputGroup>
                                <FormControl id="inlineFormInputGroupUsername" placeholder="Email" className='subscribe-input' />
                                <Button variant='primary' className='subscribe-btn text-uppercase fw-bold px-4'>Subscribe</Button>
                            </InputGroup>
                        </Col>
                        <Col />
                    </Row>
                    </form>
                </article>
                <article className='py-4'>
                    <Row>
                        <Col md='4'>
                            <img src={logoImg} alt='' style={{height: '30px'}} />
                            <p className='mt-3'>Regular dental checkups help in detection of early warning signs of certain health related issues. Visit your dentists regularly and stay healthy.</p>
                            <h5>Trusted By <span className='fw-bold text-danger fs-4'>17.59K</span> People</h5>
                        </Col>
                        <Col md='4'>
                            <h5>Useful <span className='fw-bold text-primary'>Links</span></h5>
                            <ul className='list-unstyled fw-bold text-dark'>
                                <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                                <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                                <Nav.Link as={Link} to='/about'>About</Nav.Link>
                                <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                            </ul>
                        </Col>

                        <Col md='4'>
                            <h5>Contact <span className='fw-bold text-primary'>Address</span></h5>
                            <p className='text-secondary pb-3 fw-bold'>
                                64C East Crest, ABC Plaza, <br />
                                DanyBoyle, TT 101010
                            </p>
                            <h5>Call <span className='fw-bold text-primary'>Us</span></h5>
                            <p className=' text-secondary fw-bold'>(+880) 17 1400 00 00</p>
                        </Col>

                        
                    </Row>
                </article>
            </Container>
            <article className='py-4 bg-dark text-center text-white'>
                <Container>
                    <p className='mb-0'>&copy; {new Date().getFullYear()} Allrights Reserved &mdash; <span className='text-danger'>Dental Care</span></p>
                </Container>
            </article>
        </footer>
    );
};

export default Footer;