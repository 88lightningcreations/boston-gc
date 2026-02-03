import React from 'react';
import Image from 'next/image';
import ImageComparison from '@/app/components/ImageComparison';
import FillImage from '@/app/components/FillImage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Expert Siding Services in Boston, MA | D&D General Contracting",
    description: "Transform your home\'s exterior with our top-quality siding installation and repair services in Boston. We specialize in vinyl, fiber cement, and wood siding.",
    keywords: "siding contractor Boston, siding installation, vinyl siding, fiber cement siding, wood siding, siding repair, Boston general contractor",
};

const SidingPage = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#f8f9fa' }}>
      <header className="text-center py-5">
        <h1 className="display-4">Siding Services</h1>
        <p className="lead">Protect and beautify your home with our expert siding solutions.</p>
      </header>

      <main className="container">
        <section className="py-5">
          <div className="row">
            <div className="col-md-6 mb-4">
              <FillImage
                src="/house-wrap-siding-general-contractor-boston.jpeg"
                alt="Professional siding installation with house wrap"
                className="rounded shadow"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2>Quality Siding, Expertly Installed</h2>
              <p>
                Your home\'s siding is its first line of defense against the elements and a key component of its curb appeal. At D&D General Contracting, we provide durable, high-quality siding options that not only protect your home but also enhance its beauty and value.
              </p>
              <p>
                Whether you\'re looking for the low-maintenance appeal of vinyl, the durability of fiber cement, or the classic look of wood, our team has the expertise to deliver a flawless installation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-5">
          <h2 className="text-center mb-4">Before & After: Siding Transformation</h2>
          <ImageComparison
            before="/vinyl-siding-before-general-contractor-boston.jpeg"
            after="/vinyl-siding-after-general-contractor-boston.jpeg"
            alt="Before and after view of a siding replacement project"
          />
        </section>

        <section className="py-5">
          <h2 className="text-center mb-4">Our Siding Options</h2>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div style={{ height: '250px' }}>
                  <FillImage src="/vinyl-siding-installer-boston.jpeg" alt="Vinyl Siding" className="card-img-top" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Vinyl Siding</h5>
                  <p className="card-text">A popular, versatile, and low-maintenance option available in a wide variety of colors and styles to suit any home.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div style={{ height: '250px' }}>
                  <FillImage src="/fiber-cement-siding-general-contractor-boston.jpeg" alt="Fiber Cement Siding" className="card-img-top" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Fiber Cement Siding</h5>
                  <p className="card-text">Known for its exceptional durability, resistance to fire and pests, and ability to mimic the look of natural wood or stone.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div style={{ height: '250px' }}>
                  <FillImage src="/cedar-shake-siding-boston-ma.jpeg" alt="Wood Siding" className="card-img-top" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Wood Siding</h5>
                  <p className="card-text">Offers a timeless, natural beauty that can be stained or painted. Cedar and redwood are popular choices for their classic look and durability.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SidingPage;
