import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, title,price, img, describe} = service;
    return (
        <Col>
            <div className='service-img mb-3'>
                <img src={img} alt='' />
            </div>
            <h5>{title}</h5>
            <h4 className='text-danger fw-bold'>${price}</h4>
            <p>{describe}</p>
            <Link to={`/servicesDetail/${id}`}><Button variant='success' className='rounded-pill px-4'>Take it</Button></Link>
        </Col>
    );
};

export default Service;