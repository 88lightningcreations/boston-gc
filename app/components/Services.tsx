
import React from 'react';
import Link from 'next/link';
import { FaPaintRoller, FaShower } from 'react-icons/fa';
import { MdOutlineKitchen } from 'react-icons/md';

const Services = () => {
    return (
        <div id="services" className="section">
            <div className="container px-4 py-5">
                <h2 className="pb-2 border-bottom text-center">A Few of Our Many Services</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
                    <div className="col">
                        <Link href="/services/interior-painting" className="text-decoration-none text-dark">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <FaPaintRoller size={50} className="mb-3" />
                                    <h5 className="card-title">Interior & Exterior Painting</h5>
                                    <p className="card-text">Transform your home with a fresh coat of paint. We handle everything from single rooms to full exteriors.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="/services/bathroom-remodeling" className="text-decoration-none text-dark">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <FaShower size={50} className="mb-3" />
                                    <h5 className="card-title">Bathroom Remodeling</h5>
                                    <p className="card-text">Create a spa-like retreat with our expert bathroom remodeling services. From design to installation.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href="/services/kitchen-remodeling" className="text-decoration-none text-dark">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <MdOutlineKitchen size={50} className="mb-3" />
                                    <h5 className="card-title">Kitchen Remodeling</h5>
                                    <p className="card-text">From custom cabinets to modern appliances, we'll help you build the kitchen of your dreams.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
