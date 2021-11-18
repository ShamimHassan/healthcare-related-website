import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import aboutImg1 from '../../img/about1.png';
import aboutImg2 from '../../img/about2.png';
import aboutImg3 from '../../img/about3.jpg';
import aboutImg4 from '../../img/about4.jpg';
import pain1 from '../../img/pain1.jpg';
import pain2 from '../../img/pain2.jpg';
import pain3 from '../../img/pain3.jpg';

const About = () => {
    return (
        <>
            <section className='py-5 bg-dark text-white'>
                <Container>
                    <h2 className='display-4 fw-bold'>About</h2>
                    <p className='fw-bold'><Link to='/home' className='text-decoration-none'>Home</Link> / <span >About</span></p>
                </Container>
            </section>

            <section className='py-5'>
                <Container>
                    <h2 className='text-center'>Pain <span className="fw-bold text-primary">Free Dentistry</span></h2>
                    <Row  xs='1' md='3' className='g-4 mt-4'>
                        <Col>
                            <div className='border border-top-0 border '>
                                <img src={pain1} alt="" className="border-top border-3 border-primary" />
                                <div className='p-3'>
                                    <h5>DENTAL EXPLORERS & DRILL</h5>
                                    <p className='my-3 text-muted'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis.
                                    </p>
                                    <Button variant='success' >Read More</Button>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className='border border-top-0 border '>
                                <img src={pain3} alt="" className="border-top border-3 border-primary" />
                                <div className='p-3'>
                                    <h5>DENTAL EXTRACTION PROCEDURE</h5>
                                    <p className='my-3 text-muted'>
                                        Sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis.
                                    </p>
                                    <Button variant='success' >Read More</Button>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className='border border-top-0 border '>
                                <img src={pain2} alt="" className="border-top border-3 border-primary" />
                                <div className='p-3'>
                                    <h5>MIRROR, MIRROR ON THE ROD</h5>
                                    <p className='my-3 text-muted'>
                                        Morbi hendrerit elit turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <Button variant='success' >Read More</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='py-5 bg-light'>
                <Container>
                    <h2 className='text-center'>The <span className='fw-bold text-danger'>Dental & Oral Health</span> Summit</h2>

                    <Row className='py-5 g-5 align-items-center'>
                        <Col xs='12' md='6' >
                            <img src={aboutImg1} alt='' />
                        </Col>
                        <Col xs='12' md='6' >
                            <h5>Dental Health-Current Research</h5>
                            <p className='text-muted mt-4'>
                                Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                            </p>
                        </Col>
                        <Col xs='12' md='6' >
                            <h5>Dental Health-Current Research</h5>
                            <p className='text-muted mt-4'>
                                Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                            </p>
                        </Col>                        
                        <Col xs='12' md='6' >
                            <img src={aboutImg2} alt='' />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                <Row className='py-5 text-center align-items-center g-5'>
                        <Col xs='12' md='7'>
                            <img src={aboutImg3} alt='' />
                        </Col>
                        <Col xs='12' md='5'>
                            <h2>The <span className='fw-bold text-primary'>Role of Dental</span> Implants</h2>
                            <p className='text-muted my-4'>
                                At <strong>YOUNG NIGHT</strong> glamor day event dolor sit amet,
                                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus
                                varius laoreet. Quisque rutrum. Aenean imperdiet.
                            </p>
                            <Button variant='outline-success' className='px-5 py-3 rounded-0 fs-5'>Read More</Button>
                        </Col>
                        <Col xs='12' md='5' >
                        <h2>The <span className='fw-bold text-primary'> Implants in </span>Dentistry</h2>
                            <p className='text-muted my-4'>
                                At <strong>YOUNG NIGHT</strong> glamor day event dolor sit amet,
                                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus
                                varius laoreet. Quisque rutrum. Aenean imperdiet.
                            </p>
                            <Button variant='outline-success' className='px-5 py-3 rounded-0 fs-5 mb-3'>Read More</Button>
                            <p className='text-muted'>
                                <em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</em>
                            </p>
                        </Col>                        
                        <Col xs='12' md='7' >
                            <img src={aboutImg4} alt='' />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default About;