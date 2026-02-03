'use client';

import Image from 'next/image';

interface FillImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}

const FillImage: React.FC<FillImageProps> = ({ src, alt, className, sizes }) => {
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3' }} className={className}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default FillImage;
