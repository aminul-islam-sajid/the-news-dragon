import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook,FaTwitter, FaInstagram} from 'react-icons/fa';
import Qjon from '../Qzon/Qjon';
import bg from '../../../assets/bg.png'

const RightNAv = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub />Login with Github</Button>
             <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook/> FAcebook</ListGroup.Item>
                    <ListGroup.Item  ><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                 
                </ListGroup>
            </div>
            <Qjon></Qjon>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNAv;