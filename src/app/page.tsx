import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='font-sans min-h-screen'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
