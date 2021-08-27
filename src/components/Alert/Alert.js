import React from 'react';
import { Container } from 'react-bootstrap';
import img from "../../Assets/Phone Mockup (Mobile).png";
import {motion} from "framer-motion";

const imgVariant = {
    hidden: {
        scale: 1,
    },
    show: {
        scale: 1.1,
        transition: {
            yoyo: Infinity, 
            duration: 1
        }
    }
}

const Alert = () => {
    return (
        <div style={{backgroundColor: '#F8F9FA'}} className="alert mb-5">
            <Container>
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h1>Secure Your Money <br /> With Escrow</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil autem iure laudantium placeat molestiae.</p>
                    <a href="https://www.google.com/">Learn More about Escrow</a>
                </div>
                <div className="col-md-6">
                    <motion.img 
                    variants={imgVariant}
                    initial="hidden"
                    animate="show"
                    style={{float: 'right'}} src={img} alt="" />
                </div>
            </div>
        </Container>
        </div>
    );
};

export default Alert;