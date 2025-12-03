import { motion } from 'framer-motion';
import {
  Brain,
  Bluetooth,
  Activity,
  Eye,
  BarChart3,
  Server,
  FileText,
  Cpu,
  Radio,
  Waves,
  MonitorPlay,
  Database,
  Glasses,
  FlaskConical,
  Smartphone,
  Cloud,
  Users,
  Target,
  Sparkles,
  Zap
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations/variants';

const ArchitectureSection = () => {
  const architectureData = [
    {
      title: "R&D SCIENTIFIQUE",
      icon: FlaskConical,
      color: "from-violet-500 to-purple-600",
      items: [
        { icon: Target, label: "Protocoles thérapeutiques" },
        { icon: Brain, label: "Bandes Alpha/Delta/Theta" },
        { icon: FileText, label: "Specs Algorithme Feedback" }
      ]
    },
    {
      title: "HARDWARE BRIDGE",
      icon: Cpu,
      color: "from-purple-500 to-indigo-600",
      items: [
        { icon: Bluetooth, label: "Driver BLE (EEG)" },
        { icon: Waves, label: "FFT & Signal Processing" },
        { icon: Sparkles, label: "Détection artefacts" }
      ]
    },
    {
      title: "CORE APP",
      icon: Smartphone,
      color: "from-cyan-500 to-blue-600",
      items: [
        { icon: Activity, label: "Interface Patient (React Native)" },
        { icon: MonitorPlay, label: "Feedback visuel 2D Canvas" },
        { icon: Radio, label: "Feedback sonore adaptatif" }
      ]
    },
    {
      title: "BACKEND API",
      icon: Cloud,
      color: "from-orange-500 to-red-600",
      items: [
        { icon: Server, label: "API RESTful (Node.js)" },
        { icon: Zap, label: "WebSocket Server (<50ms)" },
        { icon: Database, label: "PostgreSQL Time-Series" }
      ]
    },
    {
      title: "MODULE VR",
      icon: Glasses,
      color: "from-emerald-500 to-teal-600",
      items: [
        { icon: Eye, label: "Scène 3D Unity/Unreal" },
        { icon: Radio, label: "Client WebSocket C#" },
        { icon: Activity, label: "72/90 FPS optimisés" }
      ]
    },
    {
      title: "DASHBOARD",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-600",
      items: [
        { icon: Activity, label: "Visualisation (D3.js)" },
        { icon: Users, label: "Gestion de cohorte" },
        { icon: Target, label: "Heatmaps fréquences" }
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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

export default ArchitectureSection;
