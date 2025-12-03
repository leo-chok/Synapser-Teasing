import { motion } from 'framer-motion';
import { Brain, Glasses, FlaskConical } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../animations/variants';

const PitchSection = () => {
  const keyPoints = [
    { icon: FlaskConical, label: "R&D Scientifique", desc: "Protocoles thérapeutiques validés" },
    { icon: Brain, label: "Neurofeedback", desc: "Boucle de rétroaction EEG" },
    { icon: Glasses, label: "Immersion VR", desc: "Environnement 3D réactif" }
  ];

  return (
    <section id="presentation" className="relative py-24 md:py-32">
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
            <span className="text-gradient">Présentation</span>
          </motion.h2>

          {/* YouTube Video */}
          <motion.div 
            variants={fadeInUp}
            className="relative max-w-4xl mx-auto mb-12"
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden glow-cyan-subtle">
              <iframe
                src="https://www.youtube.com/embed/iZueQg5KT5M"
                title="Synapser Présentation Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>

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
            {keyPoints.map((item, index) => (
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

export default PitchSection;
