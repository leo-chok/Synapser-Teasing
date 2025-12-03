import { motion } from 'framer-motion';
import { Bluetooth, Brain, Glasses, BarChart3 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations/variants';

const FeaturesSection = () => {
  const features = [
    {
      icon: Bluetooth,
      title: "Acquisition & Traitement du Signal",
      description: "Driver BLE pour casques EEG (Muse, OpenBCI), parsing des paquets bruts, FFT temps-fréquence et détection d'artefacts (clignements, mâchoire).",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Brain,
      title: "Boucle Neurofeedback",
      description: "Analyse des bandes Alpha, Delta et Theta pour le traitement des acouphènes. Seuils de déclenchement adaptatifs et feedback visuel/sonore en temps réel.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Glasses,
      title: "Immersion VR Thérapeutique",
      description: "Environnement 3D Low Poly optimisé (72/90 FPS). Mapping EEG → variables environnementales (ex: Alpha → Intensité soleil). Latence WebSocket < 50ms.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: BarChart3,
      title: "Dashboard Praticien",
      description: "Visualisation des courbes de progression (Recharts/D3.js), heatmaps des fréquences cérébrales et gestion de cohortes patients.",
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
