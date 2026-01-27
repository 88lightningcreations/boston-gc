'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import ImageComparison from './ImageComparison';

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

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  useEffect(() => {
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
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            style={{ height: '100%' }}
          >
            {image.type === 'single' ? (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
                className="d-block w-100"
              />
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
