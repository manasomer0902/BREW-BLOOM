
import { Routes, Route } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Home Page Components
import Hero from './components/Hero';
import WelcomeSection from './components/WelcomeSection';
import SignatureDishes from './components/SignatureDishes';
import MenuCategories from './components/MenuCategories';
import Testimonials from './components/Testimonials';
import GalleryPreview from './components/GalleryPreview';
import ReservationCTA from './components/ReservationCTA';
import LocationSection from './components/LocationSection';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';

// Website Pages
import Menu from './pages/Menu';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Home Page
function Home() {
  return (
    <>
      <SEO
        title="BREW & BLOOM | Premium Restaurant & Café"
        description="Discover BREW & BLOOM. Enjoy delicious food, freshly brewed coffee and beautiful dining experiences."
      />


      <Hero />
      <WelcomeSection />
      <SignatureDishes />
      <MenuCategories />
      <Testimonials />
      <GalleryPreview />
      <ReservationCTA />
      <LocationSection />
    </>
  );
}

// Main App
function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
