import React from 'react';
import Image from 'next/image';
import FillImage from '@/app/components/FillImage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Sunrooms and Home Additions in Boston, MA | D&D General Contracting",
    description: "Expand your living space with a custom sunroom or home addition from D&D General Contracting in Boston. We handle design, planning, and construction.",
    keywords: "home additions Boston, sunroom contractor, room additions, second-story additions, garage conversions, general contractor Boston, D&D General Contracting",
};

const SunroomsAdditionsPage = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#f8f9fa' }}>
      <header className="text-center py-5">
        <h1 className="display-4">Sunrooms & Home Additions</h1>
        <p className="lead">Expand your living space and add value to your home.</p>
      </header>

      <main className="container">
        <section className="py-5">
          <div className="row">
            <div className="col-md-6 mb-4">
              <FillImage
                src="/sun-room-entry-general-contractor-boston.jpeg"
                alt="Entrance to a newly built sunroom addition in a Boston home"
                className="rounded shadow"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2>Seamlessly Integrated Home Additions</h2>
              <p>
                Need more room to grow? A home addition is a fantastic way to increase your living space without the hassle of moving. Whether you\'re dreaming of a spacious new family room, a second-story addition, or a multi-season sunroom, we can make it a reality.
              </p>
              <p>
                Our team at D&D General Contracting handles the entire process, from initial design and permitting to construction and finishing touches. We work closely with you to ensure your new space seamlessly blends with your home\'s existing architecture and style.
              </p>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center order-md-2">
              <h2>Bright & Beautiful Sunrooms</h2>
              <p>
                Enjoy the beauty of the outdoors from the comfort of your home with a custom-built sunroom. Perfect for relaxing, entertaining, or as a vibrant playroom, a sunroom adds versatile living space and floods your home with natural light.
              </p>
              <p>
                We offer a range of options, from three-season rooms to fully insulated four-season additions, all built with high-quality materials for year-round enjoyment.
              </p>
            </div>
            <div className="col-md-6 mb-4 order-md-1">
              <FillImage
                src="/sun-room-walls-general-contractor-boston.jpeg"
                alt="Interior of a sunroom under construction, showing walls and windows"
                className="rounded shadow"
              />
            </div>
          </div>
        </section>

        <section className="py-5 bg-light rounded shadow">
          <h2 className="text-center mb-4">Types of Additions We Build</h2>
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Room Additions</h5>
              <p>Add a new bedroom, bathroom, or family room.</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Second-Story Additions</h5>
              <p>Double your living space by adding a full second floor.</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Garage Conversions</h5>
              <p>Transform your garage into a functional living area.</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Bump-Outs</h5>
              <p>Expand a room by a few feet to create more space.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SunroomsAdditionsPage;
