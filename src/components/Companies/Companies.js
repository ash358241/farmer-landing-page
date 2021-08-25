import React from 'react';
import './Companies.css';
import facebook from "../../../src/Assets/Facebook Logo.png";
import dribble from "../../Assets/Dribbble Logo.png";
import youtube from "../../../src/Assets/Youtube Logo.png";
import pinterest from "../../../src/Assets/Pinterest Logo.png";
import twitter from "../../../src/Assets/Twitter Logo.png";
import reddit from "../../../src/Assets/Reddit Logo.png";
import google from "../../../src/Assets/Google Logo.png";
import slack from "../../../src/Assets/Slack Logo.png";
import { Container } from 'react-bootstrap';

const Companies = () => {
    return (
        <Container>
        <div className="companies mb-5">
            
            <div className="companyOne">
                <img src={facebook} alt="" />
            </div>
            <div className="companyTwo">
                <img src={dribble} alt="" />
            </div>
            <div className="companyThree">
                <img src={youtube} alt="" />
            </div>
            <div className="companyFour">
                <img src={pinterest} alt="" />
            </div>
            <div className="companyFive">
                <img src={twitter} alt="" />
            </div>
            <div className="companySix">
                <img src={reddit} alt="" />
            </div>
            <div className="companySeven">
                <img src={google} alt="" />
            </div>
            <div className="companyEight">
                <img src={slack} alt="" />
            </div>
            
        </div>
        </Container>
    );
};

export default Companies;