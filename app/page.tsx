import Faq from './components/Faq';
import Cta from './components/Cta';
import Hero from './components/Hero';
import Services from './components/Services';
import Carousel from './components/Carousel';

export default function HomePage() {
  const images = [
    '/basement-flooring-boston-general-contracting.webp',
    '/basement-reno-nook-boston-general-contractor.webp',
    '/basement-stairs-reno-boston-general-contracting.webp',
    '/bathroom-reno-boston-general-contracting.webp',
    '/bedroom_remodel_boston_massachusetts-new.png',
    '/boston_general_contracting_painting_truck-new.png',
    '/dans_demo_stairs-new.png',
    '/exterior_painting_boston_massachusetts-new.png',
  ];

  return (
    <div>
      <Hero />
      <Services />
      <Faq />
      <Carousel images={images} />
      <Cta />
    </div>
  );
}
