import Features from "../components/Features";
import Hero from "../components/Hero";
import Demo from "../components/Demo";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      <Hero />
      <Features />
      <Demo />
      <Pricing />
      <Footer />
    </main>
  );
}
