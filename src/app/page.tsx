import Features from "../components/Features";
import Hero from "../components/Hero";
import Demo from "../components/Demo";
import Pricing from "../components/Pricing";
import PinShowcase from "@/components/PinShowcase";
import BeforeAfter from "@/components/BeforeAfter";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Hero />
      <PinShowcase />
      <Features />
      <BeforeAfter />
      <Demo />
      <Pricing />
    </main>
  );
}
