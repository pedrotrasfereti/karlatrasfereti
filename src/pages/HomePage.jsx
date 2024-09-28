import { VStack } from '@chakra-ui/react';
import About from '../components/About.jsx';
import Hero from '../components/Hero.jsx';
import Skills from '../components/Skills.jsx';
import Services from '../components/Services.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

function HomePage() {
  return (
    <VStack as="main" spacing={0}>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </VStack>
  );
}

export default HomePage;
