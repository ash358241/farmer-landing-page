import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { AiFillCheckCircle } from "react-icons/ai";
import bannerImg from "../../Assets/Hero Image (Desktop).png";
import { motion } from "framer-motion";
import './Banner.css';

const headerVariant = {
    hidden: {
        x: '-100vw'
    },
    visible:{
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 120,
            delay: 0.3        }
    }
}

const paragraphVariant = {
    hidden: {
        x: '100vw'
    },
    visible:{
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 120,
            delay: 0.3        }
    }
}

const itemsVariant = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible:{
        opacity: 1,
        y: 0,
        transition: {
            delay: 1        
        }
    }
}

const btnVariants = {
    hover: {
        scale: 1.2,
        transition: {
            yoyo: Infinity,
        }
    }
}

const imgVariant = {
    hidden: {
        scale: 1.1,
    },
    visible: {
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 900,
        }
    }
}


const Banner = () => {
    return (
        <div className="banner mb-5">
           <Container>
           <div className="row d-flex align-items-center">
                <div className="col-md-6 mb-3">
                    <motion.h1
                    variants={headerVariant}
                    initial="hidden"
                    animate="visible"
                    >Share your unfiltered <br />
                     thoughts. Get paid.
                    </motion.h1>
                    <motion.p
                    variants={paragraphVariant}
                    initial="hidden"
                    animate="visible"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo cum nemo fuga dolorem expedita praesentium voluptates est itaque ab fugit?</motion.p>
                    <motion.div 
                    variants={itemsVariant}
                    initial="hidden"
                    animate="visible"
                    className="items">
                        <h6><AiFillCheckCircle /> Receive 99% of the earnings.</h6>
                        <h6><AiFillCheckCircle /> Get paid via Debit Card, ACH or Paypal.</h6>
                        <h6><AiFillCheckCircle /> Withdraw your earnings anytime.</h6>
                        <br />
                        <input className="me-2" type="email" name="" placeholder="john@gmail.com" />
                        {/* <Button variant="dark">Get Started</Button> */}
                        <motion.button 
                        variants={btnVariants}
                        whileHover="hover"
                        className="btn btn-dark"
                        >Get Started</motion.button>
                    </motion.div>
                </div>
                <div className="col-md-6">
                    <motion.img 
                    variants={imgVariant}
                    initial="hidden"
                    animate="visible"
                    className="img" src={bannerImg} alt="" />
                </div>
            </div>
           </Container>
        </div>
    );
};

export default Banner;