import {
  NeuralBackground,
  Navigation,
  HeroSection,
  PitchSection,
  ArchitectureSection,
  FeaturesSection,
  CTASection,
  Footer
} from './sections';

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div className="relative">
      {/* Neural Network Animated Background */}
      <NeuralBackground />
      
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <div className="neural-line w-full max-w-4xl mx-auto" />
        <PitchSection />
        <div className="neural-line w-full max-w-4xl mx-auto" />
        <ArchitectureSection />
        <div className="neural-line w-full max-w-4xl mx-auto" />
        <FeaturesSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
