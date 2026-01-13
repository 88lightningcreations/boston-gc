'use client';
import Image from 'next/image';
import { useEffect } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  useEffect(() => {
    // Dynamically import the Bootstrap JS bundle
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div
      id="imageCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ maxWidth: '1000px', margin: '50px auto' }}
    >
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#imageCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div
        className="carousel-inner"
        style={{ height: '500px', borderRadius: '15px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            style={{ height: '100%' }}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'contain' }}
              className="d-block w-100"
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
