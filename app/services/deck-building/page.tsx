
import React from 'react';
import Image from 'next/image';

const DeckBuildingPage = () => {
    return (
        <div className="container px-4 py-5">
            <h1 className="display-5 fw-bold mb-4 text-center">Custom Deck Building in Boston</h1>
            <p className="fs-5 text-secondary mb-5 text-center">
                Enjoy the outdoors and enhance your home&apos;s living space with a beautiful, custom-built deck. We handle everything from design to construction, creating the perfect outdoor oasis for you.
            </p>
            <div className="d-flex justify-content-center mb-5">
                <Image
                    src="/deck-after-general-contractor-boston.jpeg"
                    alt="A newly built custom deck in Boston, showcasing our expert deck building services."
                    width={800}
                    height={600}
                    className="img-fluid rounded shadow"
                />
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h2 className="display-6 fw-bold mb-4">Our Deck Building Services</h2>
                    <p className="text-secondary mb-4">
                        We specialize in creating custom decks tailored to your home&apos;s architecture and your personal lifestyle, ensuring a seamless process from concept to completion.
                    </p>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card bg-secondary text-light h-100">
                                <div className="card-body">
                                    <h3 className="card-title fs-4 fw-bold">Custom Deck Design</h3>
                                    <p className="card-text">Our design team works with you to create a deck that complements your home and meets your specific needs for a functional and beautiful outdoor living space.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card bg-secondary text-light h-100">
                                <div className="card-body">
                                    <h3 className="card-title fs-4 fw-bold">High-Quality Materials</h3>
                                    <p className="card-text">We use only the highest quality materials, including pressure-treated wood and composite decking, to ensure your deck is durable and low-maintenance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card bg-secondary text-light h-100">
                                <div className="card-body">
                                    <h3 className="card-title fs-4 fw-bold">Professional Construction</h3>
                                    <p className="card-text">Our experienced builders adhere to the highest standards of craftsmanship and safety, ensuring a structurally sound and beautiful finished product.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card bg-secondary text-light h-100">
                                <div className="card-body">
                                    <h3 className="card-title fs-4 fw-bold">Finishing Touches</h3>
                                    <p className="card-text">We offer a variety of finishing options, including custom railings, built-in seating, and lighting, to create a truly unique outdoor space.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="display-6 fw-bold mt-5 mb-4">Your Partner for a Perfect Deck</h2>
                    <p className="text-secondary">
                        At Dan&apos;s Painting and General Contracting, we are dedicated to providing our clients with exceptional service and superior results. We are Boston’s trusted experts in custom deck building, committed to creating an outdoor space you will enjoy for years to come.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DeckBuildingPage;
