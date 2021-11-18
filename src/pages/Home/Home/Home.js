import React from 'react';
import { Carousel, Col, Container, Row, Button } from 'react-bootstrap';
import DataLoad from '../../../hooks/dataLoad/DataLoad';
import slider1 from '../../../img/slide-one.jpg';
import slider2 from '../../../img/slide-two.jpg';
import slider3 from '../../../img/slide-three.jpg';
import teeth from '../../../img/teeth.png';
import Service from '../Service/Service';
import userImg from "../../../img/user.png";
import supportImg from "../../../img/support.png";
import { Link } from 'react-router-dom';

const Home = () => {
    const [services] = DataLoad('services');
    return (
        <>

        {/* slider seciton */}
            <section>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slider-img"
                    src={slider3}
                    alt="First slide"
                    />
                    <Carousel.Caption className='slider-caption'>
                    <h3>Welcome to Janeway Dental Clinic</h3>
                    <p className='lead px-4 d-none d-md-block'>We are dedicated to providing dental care for infants, children, adolescents, and persons with special health care needs in a compassionate, efficient, and professional manner.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slider-img"
                    src={slider2}
                    alt="Second slide"
                    />

                    <Carousel.Caption className='slider-caption'>
                    <h3>We Have special Dentist</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slider-img"
                    src={slider1}
                    alt="Third slide"
                    />

                    <Carousel.Caption className='slider-caption'>
                    <h3>We are cateful about our patients</h3>
                    <p className='lead'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </section>

            {/* welcome section */}
            <section className='py-5'>
                <Container>
                    <Row className='py-4 align-items-center g-4'>
                        <Col xs='12' lg='6'>
                            <h2>Welcome to <span className="fw-bold">Dental Care</span></h2>
                            <p className='my-4'>Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                            <p className='mb-4'>Et harum quidem rerum facilis est et expedita distinctio. Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>

                            <Button as={Link} to='/about' variant='outline-dark' className='rounded-0 me-3 px-4 py-2'>About Us</Button>
                            <Button variant='outline-success' className='rounded-0 px-4 py-2 '>Talk With Us</Button>
                        </Col>
                        <Col xs='12' lg='6'>
                            <div className='border border-primary border-3 p-4 d-flex mb-4 align-items-center'>
                                <img src={userImg} alt='' />
                                <div>                                    
                                    <h4>Pediatric Dentistry</h4>
                                    <p className='text-muted mt-4'>Pediatric care includes cleaning and fluoride treatment with diet plan.</p>
                                </div>
                            </div>
                            <div className='border border-primary border-3 p-4 d-flex align-items-center'>
                                <img src={supportImg} alt='' />
                                <div>                                    
                                    <h4>Pediatric Dentistry</h4>
                                    <p className='text-muted mt-4'>Pediatric care includes cleaning and fluoride treatment with diet plan.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/* services */}
            <section className='py-5'>
                <Container>
                    <h3 className='text-center fw-bold'>Our Services</h3>
                    <Row xs='1' md='3' className='g-4 mt-4'>
                       {
                           services?.map(service => <Service key={service.id} service={service} />)
                       }
                    </Row>
                </Container>
            </section>

            
            {/* banner section */}
            <section className="banner-section py-5">
                <Container>
                    <Row className='g-4 align-items-center'>
                        <Col xs='12' md='6'>
                            <h2 className="display-5">Be Gentle with <br /> The Strongest!</h2>
                            <p className='my-4'>The outer part of the teeth that we see is the Enamel which is the hardest substance in the body. Tooth consists of pulp in the innermost, encased by dentin and outer covering by enamel.</p>
                            <Button variant='dark' className='rounded-0 px-4 py-2 fw-bold'>Read More</Button>
                        </Col>
                        <Col>
                            <img src={teeth} alt='' />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Home;