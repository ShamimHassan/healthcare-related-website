import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <section id='page-not-found' style={{background: "#000"}}>
            <Container className='py-5 text-center not-found'>
                
                <div className='py-5 button-box'>
                    <Link to='/'>
                        <Button variant='danger'>Go Home</Button>
                    </Link>
                </div>
            </Container>
                <div className='py-5' style={{background: "#000", transform: 'translateY(-80px)', zIndex: 2}}>
                    <div className='py-2'></div>
                </div>
        </section>
    );
};

export default NotFound;