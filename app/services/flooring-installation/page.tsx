
import React from 'react';
import Image from 'next/image';

const FlooringInstallationPage = () => {
    return (
        <div className="container px-4 py-5">
            <h1 className="display-5 fw-bold mb-4 text-center">Professional Flooring Installation in Boston</h1>
            <p className="fs-5 text-secondary mb-5 text-center">
                From hardwood to tile, we install a wide variety of flooring to enhance the beauty and value of your home. Our team will help you choose the right material and install it with precision and care.
            </p>
            <div className="d-flex justify-content-center mb-5">
                <Image
                    src="/basement-flooring-boston-general-contracting.webp"
                    alt="Flooring installation in a Boston home, showcasing beautiful new floors."
                    width={800}
                    height={600}
                    className="img-fluid rounded shadow"
                    style={{ height: 'auto' }}
                />
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h2 className="display-6 fw-bold mb-4">Our Flooring Installation Services</h2>
                    <p className="text-secondary mb-4">
                        We provide a complete range of flooring services, ensuring a flawless finish for your home or business. Our process is designed to be seamless, from material selection to the final installation.
                    </p>
                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item bg-transparent text-light border-secondary">
                            <h3 className="fs-4 fw-bold">Hardwood, Laminate, Vinyl, and Tile</h3>
                            <p className="text-secondary">We install a diverse selection of high-quality flooring materials to match your style and budget.</p>
                        </li>
                        <li className="list-group-item bg-transparent text-light border-secondary">
                            <h3 className="fs-4 fw-bold">Expert Installation and Finishing</h3>
                            <p className="text-secondary">Our experienced installers ensure every plank and tile is perfectly placed for a beautiful, long-lasting finish.</p>
                        </li>
                        <li className="list-group-item bg-transparent text-light border-secondary">
                            <h3 className="fs-4 fw-bold">Subfloor Preparation and Repair</h3>
                            <p className="text-secondary">A great floor starts with a solid foundation. We handle all necessary subfloor repairs and preparation.</p>
                        </li>
                        <li className="list-group-item bg-transparent text-light border-secondary">
                            <h3 className="fs-4 fw-bold">Free In-Home Estimates</h3>
                            <p className="text-secondary">We offer complimentary in-home consultations and estimates to help you get started on your flooring project.</p>
                        </li>
                    </ul>
                    <h2 className="display-6 fw-bold mb-4">Transform Your Space with New Floors</h2>
                    <p className="text-secondary">
                        New flooring can dramatically change the look and feel of any room. As Boston’s trusted flooring experts, we are committed to delivering superior craftsmanship and exceptional customer service. Let us help you transform your space from the ground up.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FlooringInstallationPage;
