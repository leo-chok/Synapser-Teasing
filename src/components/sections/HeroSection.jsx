import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from '../animations/variants';
import NeuralDemo from './NeuralDemo';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left space-y-6"
          >

            {/* Main Title */}
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-white">Synapser : </span>
              <span className="text-gradient">Reconnecter l'esprit.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Plateforme <span className="text-cyan-400 font-semibold">Open-source</span> de 
              <span className="text-cyan-400 font-semibold"> Neurofeedback</span> & 
              <span className="text-cyan-400 font-semibold"> VR</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="#vote"
                className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-base md:text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Voter pour le projet
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="https://discord.gg/56R2t4wM"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 md:px-8 md:py-4 border-2 border-cyan-500/50 rounded-full text-cyan-400 font-semibold text-base md:text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
              >
                Rejoindre l'équipe
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Neural Demo */}
          <div className="hidden lg:block">
            <NeuralDemo />
          </div>
        </div>

        {/* Mobile Neural Demo */}
        <div className="lg:hidden mt-12">
          <NeuralDemo />
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
