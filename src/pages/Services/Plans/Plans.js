import React from 'react';
import { Button, Col } from 'react-bootstrap';

const Plans = ({plan}) => {
    const {title, img, price, price_cent, features, planFor } = plan;
    return (
        <Col>
            <div className='py-4 border'>
                <div className='px-3 text-center py-3'>
                <h4>{title}</h4>
                <h2 className='fw-bold my-4'><sup>$</sup> <span className='display-5 fw-bold'>{price}</span> <sup>.{price_cent}</sup> <sub className='fs-6'>/ {planFor}</sub></h2>
                </div>
                <img src={img} alt="" />
                <ul className='text-center list-unstyled mt-3'>
                    {
                        features.map(feature => <li key={feature} className='lead text-muted py-2 border-bottom'>{feature}</li>)
                    }
                </ul>
                <div className='px-4'>
                    <Button variant='danger' className='text-uppercase fw-bold w-100 py-2 rounded-pill'>Buy Now</Button>
                </div>
            </div>
        </Col>
    );
};

export default Plans;