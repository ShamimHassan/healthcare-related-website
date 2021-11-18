import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetail = props => {
    const {serviceId} = useParams();
    const [services, setServices] = useState();
    useEffect(()=> {
        if(serviceId.includes('22')){
            fetch('/data/services2.json')
            .then(res => res.json())
            .then(data => setServices(data))
        }else{
            fetch('/data/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
        }
    }, []);
    
    const selecetedService = services?.find(service => service.id === Number(serviceId));
    return (
        <section className='py-5 service-detail'>
            <Container>
                <Row>
                    <Col></Col>
                    <Col md='8'>
                        <img src={selecetedService?.img} alt='' />
                        <h3 className="mt-3">{selecetedService?.title}</h3>
                        <h4 className='text-bold'>${selecetedService?.price}</h4>
                        <p className="mt-4">
                            {selecetedService?.describe}
                        </p>
                        <p>
                        {selecetedService?.describe2}
                        </p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </section>
    );
};

export default ServiceDetail;