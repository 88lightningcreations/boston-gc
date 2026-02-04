import React from 'react';
import ImageComparison from '@/app/components/ImageComparison';
import FillImage from '@/app/components/FillImage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Staircase and Railing Contractor in Boston, MA | D&D General Contracting",
    description: "Custom staircase design, installation, and repair in Boston. We build and install high-quality wood, metal, and composite railings and stair systems.",
    keywords: "staircase contractor Boston, railing installation, stair builder, custom staircases, wood railings, metal railings, stair repair Boston, D&D General Contracting",
};

const StaircasesRailingsPage = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#f8f9fa' }}>
      <header className="text-center py-5">
        <h1 className="display-4">Staircases & Railings</h1>
        <p className="lead">Elevate your home&apos;s design with custom-built staircases and railings.</p>
      </header>

      <main className="container">
        <section className="py-5">
          <h2 className="text-center mb-4">From Functional to Feature</h2>
          <p className="text-center mx-auto" style={{ maxWidth: '800px' }}>
            A staircase is more than just a way to get from one floor to another—it&apos;s a central architectural feature of your home. We design and build beautiful, sturdy staircases and railing systems that enhance your home&apos;s safety and style.
          </p>
        </section>

        <section className="py-5">
          <h2 className="text-center mb-4">Staircase Remodel: Before & After</h2>
          <ImageComparison
            before="/top-stairs-before-general-contractor-boston.jpeg"
            after="/top-stairs-after-general-contractor-boston.jpeg"
            alt="Before and after of a staircase remodeling project in Boston."
          />
        </section>

        <section className="py-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <FillImage
                src="/basement_stairs-general-contracting-boston.png"
                alt="Newly constructed basement stairs by a general contractor in Boston"
                className="rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h3>Custom Designs for Every Style</h3>
              <p>
                We work with a variety of materials to create the perfect look for your home:
              </p>
              <ul>
                <li><strong>Wood:</strong> Classic and warm, with options like oak, maple, and cherry.</li>
                <li><strong>Metal:</strong> Modern and sleek, featuring iron, steel, or aluminum balusters.</li>
                <li><strong>Glass:</strong> Creates an open, airy feel with transparent panels.</li>
                <li><strong>Cable Railings:</strong> A minimalist option for unobstructed views.</li>
              </ul>
              <p>
                Our team ensures every installation is code-compliant, safe, and built to last.
              </p>
            </div>
          </div>
        </section>

        <section className="py-5 bg-light rounded shadow">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <FillImage
                src="/basement-stairs-reno-boston-general-contracting.webp"
                alt="Renovated basement stairs with new railings in a Boston home"
                className="rounded shadow-lg"
              />
            </div>
            <div className="col-md-6 order-md-1">
              <h3>Railing Repair and Replacement</h3>
              <p>
                Loose railings or damaged stairs can be a serious safety hazard. We provide expert repair and replacement services to restore the integrity and appearance of your existing staircase.
              </p>
              <p>
                From replacing a few balusters to a complete railing system overhaul, we ensure your stairs are safe, sturdy, and beautiful.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StaircasesRailingsPage;
