import React from 'react';
import Image from 'next/image';
import FillImage from '@/app/components/FillImage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Interior & Exterior Painting Services in Boston, MA | D&D General Contracting",
  description: "Professional interior and exterior painting services in the Greater Boston area. D&D General Contracting offers high-quality finishes for residential and commercial properties.",
  keywords: "interior painting Boston, exterior painting Boston, house painter, commercial painting, residential painting, painting contractor, D&D General Contracting",
};

const PaintingPage = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#f8f9fa' }}>
      <header className="text-center py-5">
        <h1 className="display-4">Interior & Exterior Painting</h1>
        <p className="lead">A fresh coat of paint can redefine your space. Let our experts handle it.</p>
      </header>

      <main className="container">
        <section className="py-5">
          <div className="row">
            <div className="col-md-6 mb-4">
              <FillImage
                src="/exterior_painting_boston_massachusetts.png"
                alt="Exterior of a house being professionally painted in Boston"
                className="rounded shadow"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2>A Finish That Lasts</h2>
              <p>
                Whether you're looking to refresh your home's interior or protect its exterior, a professional paint job makes all the difference. Our skilled painters use high-quality materials and meticulous techniques to ensure a beautiful, long-lasting finish.
              </p>
              <p>
                We handle everything from thorough preparation, including power washing and sanding, to the final coat and cleanup, ensuring a seamless and hassle-free experience.
              </p>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center order-md-2">
              <h2>Color Your World</h2>
              <p>
                The right color can transform a room from bland to beautiful. We offer color consultation services to help you choose the perfect palette that reflects your style and enhances your space. From bold accent walls to calming neutral tones, we bring your vision to life with precision and care.
              </p>
            </div>
            <div className="col-md-6 mb-4 order-md-1">
              <FillImage
                src="/work-truck-painting-boston_general_contracting.png"
                alt="D&D General Contracting work truck with painting equipment"
                className="rounded shadow"
              />
            </div>
          </div>
        </section>

        <section className="py-5 bg-light rounded shadow">
          <h2 className="text-center mb-4">Our Painting Process</h2>
          <div className="row text-center">
            <div className="col-md-3">
              <div className="p-3">
                <i className="fas fa-search fa-3x text-primary mb-3"></i>
                <h5>1. Consultation</h5>
                <p>We discuss your needs, assess the space, and provide a detailed estimate.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3">
                <i className="fas fa-paint-roller fa-3x text-primary mb-3"></i>
                <h5>2. Preparation</h5>
                <p>We protect your furniture, fix imperfections, and prepare surfaces for painting.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3">
                <i className="fas fa-check-circle fa-3x text-primary mb-3"></i>
                <h5>3. Painting</h5>
                <p>Our expert painters apply even coats for a flawless, durable finish.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3">
                <i className="fas fa-broom fa-3x text-primary mb-3"></i>
                <h5>4. Cleanup</h5>
                <p>We conduct a thorough cleanup and a final walk-through to ensure your satisfaction.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaintingPage;
