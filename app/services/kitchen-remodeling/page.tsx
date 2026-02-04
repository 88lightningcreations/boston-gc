
import React from 'react';
import Image from 'next/image';

const KitchenRemodelingPage = () => {
    return (
        <div className="container px-4 py-5">
            <h1 className="display-5 fw-bold mb-4 text-center">Transform Your Kitchen with Our Remodeling Services</h1>
            <p className="fs-5 text-secondary mb-5 text-center">
                The kitchen is the heart of the home, and we specialize in creating beautiful, functional kitchens that fit your lifestyle and budget. Whether you&apos;re looking for a complete overhaul or a few simple updates, our team can bring your vision to life.
            </p>
            <div className="d-flex justify-content-center mb-5">
                <Image
                    src="/kitchen-reno-after-general-contractor-boston.jpeg"
                    alt="A beautifully remodeled kitchen, showcasing the quality of our kitchen remodeling services in Boston."
                    width={800}
                    height={600}
                    className="img-fluid rounded shadow"
                />
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h2 className="display-6 fw-bold mb-4">Our Kitchen Remodeling Services</h2>
                    <p className="text-secondary mb-4">
                        We manage the entire process, from initial design and layout to the final touches. Our goal is to create a kitchen that is not only stunning but also highly functional, with smart storage solutions and a workflow that makes cooking and entertaining a joy.
                    </p>
                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item bg-transparent border-secondary">
                            <h3 className="fs-4 fw-bold">Custom Cabinet Installation & Refacing</h3>
                            <p className="text-secondary">We offer a wide range of cabinet styles and finishes to create the perfect look for your kitchen.</p>
                        </li>
                        <li className="list-group-item bg-transparent border-secondary">
                            <h3 className="fs-4 fw-bold">Countertop Installation</h3>
                            <p className="text-secondary">Choose from a variety of materials, including granite, quartz, and marble, to create a durable and beautiful workspace.</p>
                        </li>
                        <li className="list-group-item bg-transparent border-secondary">
                            <h3 className="fs-4 fw-bold">Backsplash & Appliance Installation</h3>
                            <p className="text-secondary">We can help you select and install the perfect backsplash and appliances to complete your kitchen&apos;s new look.</p>
                        </li>
                        <li className="list-group-item bg-transparent border-secondary">
                            <h3 className="fs-4 fw-bold">Lighting & Flooring</h3>
                            <p className="text-secondary">The right lighting and flooring can make all the difference. We&apos;ll help you choose the best options for your space.</p>
                        </li>
                    </ul>
                    <h2 className="display-6 fw-bold mb-4">Your Dream Kitchen Awaits</h2>
                    <p className="text-secondary">
                        As Boston&apos;s premier general contractor, we&apos;re dedicated to providing exceptional kitchen remodeling services. We&apos;ll work with you every step of the way to ensure your new kitchen is everything you&apos;ve ever wanted.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KitchenRemodelingPage;
