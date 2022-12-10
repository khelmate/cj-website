import React from 'react';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router-dom';
import Button from '../Form/Button';

const Banner = () => {
    const history = useHistory();

    return (
        <section className="max-w-screen-xl py-20 mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 py-12">
                <Fade left>
                    <div className="order-1 lg:order-1 flex flex-col justify-center h-full space-y-6">

                        <div className="flex flex-col space-y-2">
                            <img className="w-24" src="../../../assets/services/004-tools.png" alt="banner" />
                            <h1 className="poppins text-gray-700 font-semibold text-3xl lg:text-3xl leading-relaxed">One place for<br /> <span className="text-5xl">pharma engineering</span></h1>
                            <p className="text-gray-500 text-light text-sm">Welcome to CJ Engineering Solutions providing Reliable Engineering Solutions to the Pharmaceutical, Healthcare, F&B, Cosmetics & Other Industries. industry for delivering high quality products with prompt service and affordable price. 
Franchise with best engineering professional in pharmaceutical industry to provide best engineering solutions and practices. 
In addition to we design facilities from R&D to Production scale with international standards and Quality.
Strong engineering professional franchise which we provide best solution to engineering faults production. Our spare parts guarantee maximum quality and reliability for your machines and processes.<br/> Welcome to our shop.</p>
                        </div>
                        {/* button  */}
                        <Button className="btn-primary py-3 px-4 poppins w-48 mt-6" text="Explore our shop" onClick={() => history.push('/products')} />
                    </div>
                </Fade>

                <Fade right>
                    <div className="order-1 lg:order-2">
                        <img src="../../../assets/banner/banner.png" alt="banner" />
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default Banner
