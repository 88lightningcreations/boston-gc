
import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="px-4 pt-5 my-5 text-center border-bottom">
            <div className="container col-lg-6 mx-auto">
                <h1 className="display-4 fw-bold">Your Trusted Partner in Construction</h1>
                <p className="lead mb-4">Serving the Greater Boston area with top-notch residential and commercial contracting services.</p>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <Link href="#services" className="btn btn-primary btn-lg px-4 me-sm-3">Our Services</Link>
                <Link href="/blog" className="btn btn-outline-secondary btn-lg px-4">Our Blog</Link>
            </div>
        </div>
    );
};

export default Hero;
