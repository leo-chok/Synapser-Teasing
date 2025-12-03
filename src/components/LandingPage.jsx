import { motion } from 'framer-motion';
import {
  Brain,
  Bluetooth,
  Activity,
  Eye,
  BarChart3,
  Server,
  GitBranch,
  FileText,
  Cpu,
  Radio,
  Waves,
  MonitorPlay,
  Database,
  Shield,
  Github,
  Menu,
  X,
  ChevronRight,
  Zap,
  HeartPulse,
  Glasses
} from 'lucide-react';
import { useState } from 'react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Pitch', href: '#pitch' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Fonctionnalités', href: '#features' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/Synapser_logo.png" 
              alt="Synapser Logo" 
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <span className="text-xl md:text-2xl font-bold text-gradient">Synapser</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#vote"
              className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-medium text-sm hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Voter
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-white/10"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#vote"
              className="block w-full text-center px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-medium"
              onClick={() => setIsOpen(false)}
            >
              Voter
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* Logo Animation */}
          <motion.div 
            variants={scaleIn}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl animate-glow" />
              <img 
                src="/Synapser_logo.png" 
                alt="Synapser" 
                className="relative h-28 w-28 md:h-36 md:w-36 object-contain animate-float"
              />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="text-white">Synapser : </span>
            <span className="text-gradient">Reconnecter l'esprit.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Plateforme <span className="text-cyan-400 font-semibold">Open-source</span> de 
            <span className="text-cyan-400 font-semibold"> Neurofeedback</span> & 
            <span className="text-cyan-400 font-semibold"> VR</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <a
              href="#vote"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Voter pour le projet
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#join"
              className="px-8 py-4 border-2 border-cyan-500/50 rounded-full text-cyan-400 font-semibold text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
            >
              Rejoindre l'équipe
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            variants={fadeIn}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Pitch Section
const PitchSection = () => {
  return (
    <section id="pitch" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-6">
              Notre Vision
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-white mb-8"
          >
            Le <span className="text-gradient">Pitch</span>
          </motion.h2>

          <motion.div 
            variants={fadeInUp}
            className="relative max-w-4xl mx-auto"
          >
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-500/50" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-500/50" />
            
            <div className="glass-card rounded-2xl p-8 md:p-12 glow-cyan-subtle">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                <span className="text-cyan-400 font-semibold">Synapser</span> est une plateforme 
                <span className="text-white font-medium"> open-source de réhabilitation neuronale par neurofeedback</span>, 
                ciblant initialement le traitement des <span className="text-cyan-400">acouphènes</span>. 
                Via un casque <span className="text-white font-medium">EEG Bluetooth</span>, notre écosystème 
                (Application Web/Mobile et module immersif <span className="text-cyan-400 font-semibold">VR</span>) 
                génère des exercices thérapeutiques en temps réel. La solution inclut un 
                <span className="text-white font-medium"> dashboard d'analyse de données</span> permettant aux 
                chercheurs d'optimiser les protocoles de soins.
              </p>
            </div>
          </motion.div>

          {/* Stats or Key Points */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            {[
              { icon: Brain, label: "Neurofeedback", desc: "Rééducation cognitive" },
              { icon: Glasses, label: "Immersion VR", desc: "Environnement thérapeutique" },
              { icon: HeartPulse, label: "Open Source", desc: "Recherche collaborative" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="glass-card rounded-xl p-6 hover:glow-cyan-subtle transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{item.label}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Architecture Section
const ArchitectureSection = () => {
  const architectureData = [
    {
      title: "HARDWARE",
      icon: Cpu,
      color: "from-purple-500 to-indigo-600",
      items: [
        { icon: Bluetooth, label: "EEG Driver (BLE)" },
        { icon: Waves, label: "Signal Normalization" }
      ]
    },
    {
      title: "CORE APP",
      icon: MonitorPlay,
      color: "from-cyan-500 to-blue-600",
      items: [
        { icon: Activity, label: "Patient Interface (React Native)" },
        { icon: Brain, label: "Neurofeedback Engine" },
        { icon: BarChart3, label: "Research Dashboard" }
      ]
    },
    {
      title: "IMMERSIVE (VR)",
      icon: Eye,
      color: "from-emerald-500 to-teal-600",
      items: [
        { icon: Glasses, label: "3D Environment (Unity/Unreal)" },
        { icon: Radio, label: "Live Data Stream" }
      ]
    },
    {
      title: "BACKEND",
      icon: Server,
      color: "from-orange-500 to-red-600",
      items: [
        { icon: Shield, label: "Secure API (Node.js)" },
        { icon: Database, label: "Time-Series DB" }
      ]
    },
    {
      title: "PROJECT",
      icon: GitBranch,
      color: "from-pink-500 to-rose-600",
      items: [
        { icon: Zap, label: "CI/CD Pipeline" },
        { icon: FileText, label: "Documentation" }
      ]
    }
  ];

  return (
    <section id="architecture" className="relative py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-6">
              Technique
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Architecture <span className="text-gradient">Technique</span>
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Une architecture modulaire pensée pour la scalabilité et la recherche
          </motion.p>
        </motion.div>

        {/* Architecture Tree */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {architectureData.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover:glow-cyan-subtle transition-all duration-500 hover:-translate-y-2">
                {/* Header */}
                <div className={`w-14 h-14 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <section.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-white font-bold text-lg mb-4">{section.title}</h3>
                
                {/* Items */}
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Connection line (hidden on mobile) */}
                {index < architectureData.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Central Connection Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center mt-12"
        >
          <div className="glass-card rounded-full px-6 py-3 flex items-center gap-3">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-gray-400 text-sm">Interconnexion temps réel</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: Bluetooth,
      title: "Acquisition & Traitement",
      description: "Captation stable via Bluetooth, filtrage des bruits parasites pour une qualité de signal optimale.",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Brain,
      title: "Boucle Neurofeedback",
      description: "Transformation de l'activité neuronale en visuels pour l'autorégulation et la neuroplasticité.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Glasses,
      title: "Immersion VR",
      description: "Environnement 3D réactif via WebSockets pour maximiser la concentration et l'engagement.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: BarChart3,
      title: "Analyse Clinique",
      description: "Dashboard pour chercheurs avec vue longitudinale et optimisation des protocoles de soins.",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-6">
              Fonctionnalités
            </span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Comment ça <span className="text-gradient">marche</span> ?
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Une approche complète de la réhabilitation neuronale
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-8 h-full hover:glow-cyan-subtle transition-all duration-500 hover:-translate-y-2">
                {/* Number indicator */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-white/5 group-hover:text-cyan-500/10 transition-colors">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <feature.icon className="w-8 h-8 text-white" />
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity`} />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">En savoir plus</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section id="vote" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="relative"
        >
          <div className="glass-card rounded-3xl p-8 md:p-16 text-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <motion.div 
                variants={scaleIn}
                className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-cyan-500/30"
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Soutenez <span className="text-gradient">l'innovation</span>
              </h2>

              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                Votez pour Synapser et participez à la révolution de la santé mentale par la technologie.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://gandalf.epitech.eu/my/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <span>Voter maintenant</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://github.com/leo-chok/Synapser-Teasing"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="join"
                  className="px-10 py-4 border-2 border-cyan-500/50 rounded-full text-cyan-400 font-semibold text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center gap-2"
                >
                  <Github size={20} />
                  <span>Contribuer</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Credits */}
          <div className="flex items-center gap-4">
            <img 
              src="/Synapser_logo.png" 
              alt="Synapser" 
              className="h-10 w-10 object-contain opacity-80"
            />
            <div>
              <span className="text-white font-semibold">Synapser</span>
              <p className="text-gray-500 text-sm">Projet ESP - Master</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/leo-chok/Synapser-Teasing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © 2025 Synapser. Open Source.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div className="relative">
      {/* Neural Background */}
      <div className="neural-bg" />
      
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
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
