import React from 'react'
import NavBar from './frontpage/NavBar';
import HeroSection from './frontpage/HeroSection';

import Image2 from '../assets/Image2.png';
import Image1 from '../assets/Image1.png';

import Button from './frontpage/Button';
import FrQue from './frontpage/FrQue';
import Footer from './frontpage/Footer';


const Welcome = () => {

    return (
        <>
            {/* Nav Bar section */}
            <div>
                <NavBar />
            </div>

            {/* Hero section */}
            <div>
                <HeroSection />
            </div>

            <div className="container mb-5">

                {/* service */}
                <div className="row service align-items-center">
                    <div className="col-sm-5">
                        <img className="img-fluid" src={Image2} alt="AT DIGITAL" />
                    </div>
                    <div className="col-sm-7">
                        <h2>Web & Mobile App Development</h2>
                        <p>Your web and mobile Apps are pieces of the puzzle to grow your
                            business. We use frameworks which tailor content and engagement
                            methods to respond to different intents shown by your potential
                            customers who interact with your business online.
                        </p>

                        <Button text={"LEARN MORE"} />
                    </div>
                </div>

                <div className="row service align-items-center mt-2">
                    <div className="col-sm-5 order-sm-2">
                        <img className="img-fluid" src={Image1} alt="AT DIGITAL" />
                    </div>
                    <div className="col-sm-7 order-sm-1">
                        <h2>Digital Strategy Consulting</h2>
                        <p>Your digital strategy should complement the overall marketing strategy
                            of the company. In online marketing, each component will never work in
                            isolation and every business needs a different mix. We provide a clear
                            concept and strategic overview to find the most efficient model for
                            your business.
                        </p>
                        <Button text={"LEARN MORE"} />
                    </div>
                </div>
    
                <div>
                    <FrQue />
                </div>


            </div>

            <div>
                <Footer />
            </div>


        </>
    );
}


export default Welcome