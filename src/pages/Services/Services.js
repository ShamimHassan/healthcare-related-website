import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DataLoad from '../../hooks/dataLoad/DataLoad';
import DisplayService from '../DisplayService/DisplayService';
import playStore from '../../img/app-store-1.png';
import appleStore from '../../img/app-store2.png';
import devise from '../../img/device-1.png'
import { Link } from 'react-router-dom';
import Plans from './Plans/Plans';

const Services = () => {
    const [services] = DataLoad("services2");
    // load plans
    const [plans] =DataLoad('plans');
    return (
        <>
        {/* breadcamp section */}
            <section className='py-5 bg-dark text-white'>
                <Container>
                    <h2 className='display-4 fw-bold'>Services</h2>
                    <p className='fw-bold'><Link to='/home' className='text-decoration-none'>Home</Link> / <span >Services</span></p>
                </Container>
            </section>
            {/* a hero section */}
            <section className='py-5 bg-info text-white'>
                <Container>
                    <Row className='g-4'>
                        <Col xs='12' md='7'>
                            <h3 className='mb-4 display-6'>Technology at your service!</h3>
                            <p>Sed convallis, lorem quis viverra dictum, ex diam cursus justo, ut vehicula lacus leo vel ante. Sed at egestas lorem.</p>
                            <p>Etiam lobortis metus justo, tempor commodo risus cursus sit amet. Donec at lacinia magna.</p>
                            <div className='d-flex'>
                                <img src={playStore} alt='' className='me-3' />
                                <img src={appleStore} alt='' />
                            </div>
                        </Col>
                        <Col>
                            <img src={devise} alt='' />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* shows services */}
            <section className='py-5'>
                <Container>
                    {
                        services.map(service => <DisplayService key={service.id} service={service} />)
                    }
                </Container>
            </section>

            {/* pricing or planing */}
            <section className='py-5'>
                <Container>
                    <h2 className='display-5 text-center'>Painless <span className='fw-bold text-success'>Dentistry Procedures</span></h2>
                    <p className='text-muted text-center'>Dentistry is not expensive, neglect is.</p>
                    <Row xs='1' md='3' className='g-4 py-5'>
                        {
                            plans.map(plan => <Plans key={plan.id} plan={plan} />)
                        }
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;