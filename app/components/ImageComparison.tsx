'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './ImageComparison.module.css';
import FillImage from './FillImage';

interface ImageComparisonProps {
  before: string;
  after: string;
  alt: string;
}

const ImageComparison: React.FC<ImageComparisonProps> = ({ before, after, alt }) => {
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const startPct = useRef(50);

  // Set the initial position of the slider to 50%
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--position', '50%');
    }
  }, []);

  // This function is called when a drag starts
  const handleMouseDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    e.stopPropagation();
    setIsResizing(true);
    document.body.classList.add('grabbing-cursor');

    // Record the starting X position and the slider's starting percentage
    startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const currentPosition = containerRef.current.style.getPropertyValue('--position');
    startPct.current = parseFloat(currentPosition);
  }, []);

  // This function is called whenever the mouse moves during a drag
  const handleResize = useCallback((e: MouseEvent | TouchEvent) => {
    if (!containerRef.current || !isResizing) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startX.current;
    const rect = containerRef.current.getBoundingClientRect();

    // Calculate the movement as a percentage of the container's width
    const deltaPct = (deltaX / rect.width) * 100;
    
    // Calculate the new position and clamp it between 0 and 100
    const newPct = Math.max(0, Math.min(100, startPct.current + deltaPct));

    containerRef.current.style.setProperty('--position', `${newPct}%`);
  }, [isResizing]);

  // This function is called when a drag ends
  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
    document.body.classList.remove('grabbing-cursor');
  }, []);

  // Add and remove the global event listeners for dragging
  useEffect(() => {
    window.addEventListener('mousemove', handleResize);
    window.addEventListener('touchmove', handleResize);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleResize);
      window.removeEventListener('touchmove', handleResize);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [handleResize, handleMouseUp]);

  return (
    <div
      ref={containerRef}
      className={styles.imageComparison}
      // We only need to initiate the drag from the slider itself
    >
      <FillImage src={after} alt={alt} className={styles.afterImage} />
      <div className={styles.beforeImageWrapper}>
        <FillImage src={before} alt={alt} />
      </div>
      <div 
        className={styles.slider}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className={styles.sliderIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5 5-5m2 10l5-5-5-5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;
