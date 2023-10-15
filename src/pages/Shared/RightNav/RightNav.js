import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div className='container'>
            <div>
                <h4 className='my-3'>Login With</h4>
                <Button className='mb-3 d-flex justify-content-center align-items-center gap-1 w-100' variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary d-flex justify-content-center align-items-center gap-1 w-100"><FaGithub /> Login with Github</Button>
            </div>

            <div>
                <h4 className='my-3'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='d-flex  align-items-center gap-1'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='d-flex  align-items-center gap-1'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='d-flex  align-items-center gap-1'><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <QZone></QZone>
            </div>
        </div>
    );
};

export default RightNav;