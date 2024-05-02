import React from 'react'

import Logo from '../../assets/Logo.png';


const Footer = () => {
    return (
        <>
            <div className='container-fluid footer-box'>
                <div className="row">

                    <div className="col-sm-6 mt-5">
                        <img className="navbar-brand img-fluid logo" src={Logo} alt="AT DIGITAL" />
                        <p className='f-dis mt-3'>Your goal is our target. Not anything in between. We use <br />
                         online marketing platforms and tools to achieve single <br />
                          objective - your business results.</p>
                    </div>

                    <div className="col-sm-3 mt-5">
                        <h3>Our Technologies</h3>
                        <div className='list'>
                            <p>ReactJS</p>
                            <p>Gatsby</p>
                            <p>NextJS</p>
                            <p>NodeJS</p>
                        </div>
                        
                    </div>

                    <div className="col-sm-3 mt-5">
                        <h3>Our Services</h3>
                        <div className='list'>
                            <p>Social media Marketing</p>
                            <p>Web & Mobile App Development</p>
                            <p>Data & Analytics</p>
                            
                        </div>
                        
                    </div>

                </div>

                <div className="row mt-3 privacy-box mt-4">
                    <div className="col-sm-6 mx-auto">
                        <div className='line'></div>
                        <p>Privacy Policy  |  Terms & Conditions</p>
                    </div>
                </div>

            </div>
        </>
    )
}


export default Footer;