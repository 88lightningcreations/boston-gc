
import React from 'react';
import Image from 'next/image';

const BasementFinishingPage = () => {
    return (
        <div className="container px-4 py-5">
            <h1 className="display-5 fw-bold mb-4 text-center">Transform Your Basement with Our Finishing Services</h1>
            <p className="fs-5 text-secondary mb-5 text-center">
                Unlock the full potential of your home by transforming your unfinished basement into a beautiful, functional, and valuable living space. At Dan&apos;s Painting and General Contracting, we specialize in high-quality basement finishing services in the Boston area, tailored to your unique needs and vision.
            </p>
            <div className="d-flex justify-content-center mb-5">
                <Image
                    src="/basement-reno-nook-after-general-contractor-boston.jpeg"
                    alt="A beautifully finished basement with a cozy nook, showcasing the quality of our basement finishing services in Boston."
                    width={800}
                    height={600}
                    className="img-fluid rounded shadow"
                    style={{ height: 'auto', width: '100%' }}
                />
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h2 className="display-6 fw-bold mb-4">Why Invest in Basement Finishing?</h2>
                    <p className="text-secondary mb-4">
                        A finished basement is more than just an extra room; it&apos;s a versatile space that can serve multiple purposes. Whether you dream of a home theater, a playroom for your kids, a home gym, a guest suite, or a functional home office, finishing your basement is a cost-effective way to increase your living area and enhance your property&apos;s value.
                    </p>
                    <h2 className="display-6 fw-bold mb-4">Our Comprehensive Basement Finishing Process</h2>
                    <p className="text-secondary mb-4">
                        We manage every aspect of your basement remodeling project, ensuring a seamless and stress-free experience from start to finish. Our process includes:
                    </p>
                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item bg-transparent text-light border-secondary">
                            <h3 className="fs-4 fw-bold">Design and Planning:</h3>
                            <p className="text-secondary">Our team works closely with you to design a layout that maximizes your space and reflects your lifestyle. We consider all factors, including lighting, moisture control, and intended use, to create a plan that is both practical and inspiring.</p>
                        </li>
                        <li className="list-group-item bg-transparent text-light border-secondary">
                            <h3 className="fs-4 fw-bold">Framing and Insulation:</h3>
                            <p className="text-secondary">We construct a sturdy and durable framework for your new living area and install high-quality insulation to ensure your basement is comfortable and energy-efficient year-round.</p>
                        </li>
                        <li className="list-group-item bg-transparent text-light border-secondary">
                            <h3 className="fs-4 fw-bold">Drywall and Flooring:</h3>
                            <p className="text-secondary">Our expert craftsmen install drywall to create smooth, paint-ready walls and ceilings. We also offer a wide range of flooring options to complete the look of your new space.</p>
                        </li>
                        <li className="list-group-item bg-transparent text-light border-secondary">
                            <h3 className="fs-4 fw-bold">Electrical and Plumbing:</h3>
                            <p className="text-secondary">We handle all necessary electrical and plumbing work to ensure your basement is fully equipped and up to code.</p>
                        </li>
                    </ul>
                    <h2 className="display-6 fw-bold mb-4">Your Trusted Partner for Basement Finishing in Boston</h2>
                    <p className="text-secondary">
                        With years of experience and a commitment to excellence, Dan&apos;s Painting and General Contracting is the premier choice for basement finishing in the Greater Boston area. We pride ourselves on our attention to detail, superior craftsmanship, and dedication to customer satisfaction.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BasementFinishingPage;
