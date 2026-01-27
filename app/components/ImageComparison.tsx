'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface ImageComparisonProps {
  before: string;
  after: string;
  alt: string;
}

const ImageComparison: React.FC<ImageComparisonProps> = ({ before, after, alt }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const imageContainer = useRef<HTMLDivElement>(null);

  const handleResize = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isResizing || !imageContainer.current) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const rect = imageContainer.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;

    setSliderPosition(percent);
  };

  const handleResizeEnd = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleResize(e as any);
    const handleTouchMove = (e: TouchEvent) => handleResize(e as any);

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('mouseup', handleResizeEnd);
      window.addEventListener('touchend', handleResizeEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handleResizeEnd);
      window.removeEventListener('touchend', handleResizeEnd);
    };
  }, [isResizing, handleResize]);


  return (
    <div
      ref={imageContainer}
      className="image-comparison"
      onMouseDown={() => setIsResizing(true)}
      onTouchStart={() => setIsResizing(true)}
    >
      <Image
        src={after}
        alt={alt}
        width={800}
        height={600}
        className="after-image"
      />
      <div
        className="before-image"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <Image
          src={before}
          alt={alt}
          width={800}
          height={600}
        />
      </div>
      <div
        className="slider"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="slider-line"></div>
        <div className="slider-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
        <div className="slider-line"></div>
      </div>
    </div>
  );
};

export default ImageComparison;
