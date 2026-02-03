'use client';
import { useEffect, useRef } from 'react';
import ImageComparison from './ImageComparison';
import FillImage from './FillImage';
import Carousel from 'bootstrap/js/dist/carousel';

interface SingleImage {
  type: 'single';
  src: string;
  alt: string;
}

interface ComparisonImage {
  type: 'comparison';
  before: string;
  after: string;
  alt: string;
}

type CarouselImage = SingleImage | ComparisonImage;

interface CarouselProps {
  images: CarouselImage[];
}

const CarouselComponent: React.FC<CarouselProps> = ({ images }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInstanceRef = useRef<Carousel | null>(null);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    // Initialize the Bootstrap carousel instance using the direct import
    const carouselInstance = new Carousel(carouselElement, {
      interval: 5000,
      ride: 'carousel'
    });
    carouselInstanceRef.current = carouselInstance;

    // Start the carousel rotation
    carouselInstance.cycle();

    // Cleanup function to dispose of the carousel instance
    return () => {
      if (carouselInstanceRef.current) {
        carouselInstanceRef.current.dispose();
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div
      ref={carouselRef}
      id="imageCarousel"
      className="carousel slide"
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
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            style={{ height: '100%' }}
          >
            {image.type === 'single' ? (
              <FillImage src={image.src} alt={image.alt} />
            ) : (
              <ImageComparison
                before={image.before}
                after={image.after}
                alt={image.alt}
              />
            )}
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
