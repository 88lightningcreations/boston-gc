
import React from 'react';
import Image from 'next/image';

const BathroomRemodelingPage = () => {
    return (
        <div className="container px-4 py-5">
            <h1 className="display-5 fw-bold mb-4 text-center">Expert Bathroom Remodeling in Boston</h1>
            <p className="fs-5 text-secondary mb-5 text-center">
                Create the bathroom of your dreams with our expert remodeling services. We handle every aspect of your bathroom remodel, combining functional design with high-quality materials to create a space that is both beautiful and practical.
            </p>
            <div className="d-flex justify-content-center mb-5">
                <Image
                    src="/finished-bathroom-general-contractor-boston.jpeg"
                    alt="A beautifully remodeled bathroom in Boston, showcasing our expert services."
                    width={800}
                    height={600}
                    className="img-fluid rounded shadow"
                />
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h2 className="display-6 fw-bold mb-4">Our Bathroom Remodeling Services</h2>
                    <p className="text-secondary mb-4">
                        We offer a comprehensive range of services to bring your vision to life, from initial design to final installation.
                    </p>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card bg-secondary text-light h-100">
                                <div className="card-body">
                                    <h3 className="card-title fs-4 fw-bold">Custom Tile and Stonework</h3>
                                    <p className="card-text">Our expert tile setters create stunning and durable surfaces for your floors, walls, and shower surrounds.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card bg-secondary text-light h-100">
                                <div className="card-body">
                                    <h3 className="card-title fs-4 fw-bold">Shower and Bathtub Installation</h3>
                                    <p className="card-text">Upgrade your bathing experience with a new walk-in shower, freestanding tub, or luxurious spa-like system.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card bg-secondary text-light h-100">
                                <div className="card-body">
                                    <h3 className="card-title fs-4 fw-bold">Vanity and Countertop Replacement</h3>
                                    <p className="card-text">Enhance your bathroom’s storage and style with a new vanity and countertop in classic marble or modern quartz.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card bg-secondary text-light h-100">
                                <div className="card-body">
                                    <h3 className="card-title fs-4 fw-bold">Lighting and Ventilation Upgrades</h3>
                                    <p className="card-text">We install a range of options, including recessed lighting and high-efficiency exhaust fans for a comfortable space.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="display-6 fw-bold mt-5 mb-4">Create Your Own Personal Oasis</h2>
                    <p className="text-secondary">
                        Your bathroom should be a place of relaxation. We focus on creating a spa-like retreat that adds value and comfort to your home. As Boston’s trusted choice for bathroom remodeling, we are committed to quality craftsmanship and customer satisfaction.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BathroomRemodelingPage;
