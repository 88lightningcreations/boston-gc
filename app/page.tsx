import Faq from './components/Faq';
import Cta from './components/Cta';
import Hero from './components/Hero';
import Services from './components/Services';
import Carousel from './components/Carousel';
import About from './components/About';

export default function HomePage() {
  const images = [
    {
      type: 'comparison' as const,
      before: '/work-truck-painting-boston_general_contracting.png',
      after: '/exterior_painting_boston_massachusetts.png',
      alt: 'Residential painting and Exterior House Painting in Boston, Massachusetts'
    },
    {
      type: 'comparison' as const,
      before: '/top-stairs-before-general-contractor-boston.jpeg',
      after: '/top-stairs-after-general-contractor-boston.jpeg',
      alt: 'Staircase remodel before and after'
    },
    {
      type: 'single' as const,
      src: '/basement-flooring-boston-general-contracting.webp',
      alt: 'Basement flooring'
    },
    {
      type: 'comparison' as const,
      before: '/basement_stairs-general-contracting-boston.png',
      after: '/basement-stairs-reno-boston-general-contracting.webp',
      alt: 'Staircase remodel before and after'
    },
    {
      type: 'single' as const,
      src: '/basement-reno-nook-boston-general-contractor.webp',
      alt: 'Basement nook'
    }, 
    {
      type: 'comparison' as const,
      before: '/sun-room-entry-general-contractor-boston.jpeg',
      after: '/sun-room-walls-general-contractor-boston.jpeg',
      alt: 'Sun room and Bedroom renovation general contracting Boston Massachusettes'
    },
    {
      type: 'comparison' as const,
      before: '/closet-before-general-contractor-boston.jpeg',
      after: '/half-bath-general-contractor-boston.jpeg',
      alt: 'Closet Renovation and Conversion to Half Bathroom Remodeling Boston Massachusettes General Contractor'
    },
    {
      type: 'single' as const,
      src: '/bathroom-reno-boston-general-contracting.webp',
      alt: 'Bathroom Remodel General Contractor Boston Massachusettes'
    },
    {
      type: 'single' as const,
      src: '/bedroom-remodel-side-by-side-boston_massachusetts.png',
      alt: 'Bedroom Remodel Basement Remodel General Contractor Boston Massachusetts'
    },
    {
      type: 'comparison' as const,
      before: '/kitchen-reno-before-general-contractor-boston.jpeg',
      after: '/kitchen-reno-after-general-contractor-boston.jpeg',
      alt: 'Complete Kitchen Renovation Cabinets Paint Flooring Island in Boston Massachusettes'
    },
    {
      type: 'comparison' as const,
      before: '/deck-before-general-contractor-boston.jpeg',
      after: '/deck-after-general-contractor-boston.jpeg',
      alt: 'residential deck construction boston general contracter'
    },
    {
      type: 'single' as const,
      src: '/balcony-flooring-after-general-contractor-boston.jpeg',
      alt: 'Balcony Renovation General Contractor Boston Massachusettes'
    },
    {
      type: 'comparison' as const,
      before: '/vinyl-siding-before-general-contractor-boston.jpeg',
      after: '/house-wrap-siding-general-contractor-boston.jpeg',
      alt: 'Tyvek House Wrap Professional Siding construction boston general contracter'
    },
  ];

  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Faq />
      <Carousel images={images} />
      <Cta />
    </div>
  );
}
