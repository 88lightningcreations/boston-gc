import Faq from './components/Faq';
import Cta from './components/Cta';
import Hero from './components/Hero';
import Services from './components/Services';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <Faq />
      <Cta />
    </div>
  );
}
