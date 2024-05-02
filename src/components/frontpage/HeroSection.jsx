import React from 'react'

import Hero_Image from '../../assets/Hero_Image.png';
import Button from './Button';

const HeroSection = () => {
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 p-0">
                        <img className="img-fluid hero-image" src={Hero_Image} alt="AT DIGITAL" /> 

                        <div className="hero-text">
                            <p>We Crush Your <br /> Competitors, Goals, And <br /> Sales Records - Without
                             <br /> The B.S.</p>
                             <Button text={"GET FREE CONSULTATION"} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;