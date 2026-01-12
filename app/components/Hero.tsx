
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero-section position-relative w-100 d-flex align-items-center justify-content-center">
      <Image
        src="/logo_boston_painting_general_contracting-new.png"
        alt="Boston General Contracting Logo"
        width={500}
        height={500}
        priority
        className="img-fluid"
      />
    </section>
  );
};

export default Hero;
