import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
import 
{
    Home,
    Resources,
    Companies,
    Opportunities
} from '../footerData/FooterData.js';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <div className="footerDiv">
                    <div className="colOne">
                    <h3>Spense</h3>
                    <p className="w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores asperiores tenetur cumque voluptas aspernatur ullam a nostrum enim accusamus placeat necessitatibus ad veritatis quis, sunt harum culpa veniam delectus?</p>
                    </div>
                    <div className="colTwo me-5">
                        <h5>Sitemap</h5>
                        {
                            Home.map((link, i) => <a href={link.link} key={i++} className='text-decoration-none d-block text-secondary'>{link.title}</a>)
                        }
                    </div>
                    <div className="colThree me-5">
                        <h5>Resources</h5>
                        {
                            Resources.map((link, i) => <a href={link.link} key={i++} className='text-decoration-none d-block text-secondary'>{link.title}</a>)
                        }
                    </div>
                    <div className="colFour me-5">
                        <h5>Companies</h5>
                        {
                            Companies.map((link, i) => <a href={link.link} key={i++} className='text-decoration-none d-block text-secondary'>{link.title}</a>)
                        }
                    </div>
                    <div className="colFour me-5">
                        <h5>Opportunities</h5>
                        {
                            Opportunities.map((link, i) => <a href={link.link} key={i++} className='text-decoration-none d-block text-secondary'>{link.title}</a>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;