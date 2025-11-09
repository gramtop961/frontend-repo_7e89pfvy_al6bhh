import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import BrandStory from "./components/BrandStory";
import ProductsCarousel from "./components/ProductsCarousel";
import Testimonials from "./components/Testimonials";
import GiftingGuide from "./components/GiftingGuide";
import InstagramShowcase from "./components/InstagramShowcase";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Categories />
      <BrandStory />
      <ProductsCarousel />
      <Testimonials />
      <GiftingGuide />
      <InstagramShowcase />
      <Footer />
    </div>
  );
}

export default App;
