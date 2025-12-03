import { motion } from 'framer-motion';
import { Zap, ChevronRight, Github } from 'lucide-react';
import { fadeInUp, scaleIn } from '../animations/variants';

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

export default CTASection;
