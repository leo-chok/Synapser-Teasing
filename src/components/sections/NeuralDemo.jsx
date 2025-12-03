import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, TrendingUp } from 'lucide-react';

const NeuralDemo = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [sessionCount, setSessionCount] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    let time = 0;
    let convergenceProgress = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update convergence progress (loops every ~10 seconds)
      time += 0.016;
      convergenceProgress = (Math.sin(time * 0.3) + 1) / 2; // 0 to 1 oscillation
      
      // Update React state for UI
      setProgress(Math.round(convergenceProgress * 100));
      setSessionCount(Math.floor(convergenceProgress * 11) + 1);

      // Draw grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.lineWidth = 1;
      
      // Vertical grid lines
      for (let x = 0; x <= width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      // Horizontal grid lines
      for (let y = 0; y <= height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Center line (target)
      const centerY = height / 2;
      
      // Draw target zone (optimal brain activity)
      const targetZoneHeight = 20;
      const gradient = ctx.createLinearGradient(0, centerY - targetZoneHeight, 0, centerY + targetZoneHeight);
      gradient.addColorStop(0, 'rgba(34, 211, 238, 0)');
      gradient.addColorStop(0.5, 'rgba(34, 211, 238, 0.15)');
      gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, centerY - targetZoneHeight, width, targetZoneHeight * 2);

      // Draw target line (optimal frequency)
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.6)';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Generate wave points
      const points1 = []; // Patient's actual brain activity (starts erratic)
      const points2 = []; // Reference/target pattern
      
      const segments = 100;
      const baseAmplitude = 40;
      const frequency = 0.05;
      
      for (let i = 0; i <= segments; i++) {
        const x = (i / segments) * width;
        const phase = time * 2 + i * frequency;
        
        // Target wave (stable, gentle oscillation)
        const targetY = centerY + Math.sin(phase) * 8;
        points2.push({ x, y: targetY });
        
        // Patient wave - starts very erratic, converges toward target
        const chaos = (1 - convergenceProgress);
        const erraticComponent = 
          Math.sin(phase * 3.7) * 25 * chaos +
          Math.sin(phase * 2.3 + 1) * 20 * chaos +
          Math.sin(phase * 5.1 + 2) * 15 * chaos +
          (Math.random() - 0.5) * 10 * chaos;
        
        const stableComponent = Math.sin(phase) * 8;
        const patientY = centerY + erraticComponent + stableComponent * convergenceProgress;
        points1.push({ x, y: patientY });
      }

      // Draw patient wave (cyan - main color)
      ctx.beginPath();
      ctx.moveTo(points1[0].x, points1[0].y);
      for (let i = 1; i < points1.length; i++) {
        const xc = (points1[i].x + points1[i - 1].x) / 2;
        const yc = (points1[i].y + points1[i - 1].y) / 2;
        ctx.quadraticCurveTo(points1[i - 1].x, points1[i - 1].y, xc, yc);
      }
      
      // Gradient stroke for patient wave
      const waveGradient = ctx.createLinearGradient(0, 0, width, 0);
      waveGradient.addColorStop(0, 'rgba(6, 182, 212, 0.8)');
      waveGradient.addColorStop(0.5, 'rgba(34, 211, 238, 1)');
      waveGradient.addColorStop(1, 'rgba(6, 182, 212, 0.8)');
      ctx.strokeStyle = waveGradient;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Glow effect for patient wave
      ctx.shadowColor = 'rgba(6, 182, 212, 0.5)';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw reference wave (white/gray - secondary)
      ctx.beginPath();
      ctx.moveTo(points2[0].x, points2[0].y);
      for (let i = 1; i < points2.length; i++) {
        const xc = (points2[i].x + points2[i - 1].x) / 2;
        const yc = (points2[i].y + points2[i - 1].y) / 2;
        ctx.quadraticCurveTo(points2[i - 1].x, points2[i - 1].y, xc, yc);
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw convergence indicator dots at the end
      const lastPatient = points1[points1.length - 1];
      const lastTarget = points2[points2.length - 1];
      
      // Patient dot
      ctx.beginPath();
      ctx.arc(lastPatient.x - 5, lastPatient.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#22d3ee';
      ctx.fill();
      ctx.shadowColor = 'rgba(34, 211, 238, 0.8)';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Target dot
      ctx.beginPath();
      ctx.arc(lastTarget.x - 5, lastTarget.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.fill();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Main container with glassmorphism */}
      <div className="glass-card rounded-2xl p-4 md:p-6 glow-cyan-subtle">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Neurofeedback Live</h4>
              <p className="text-gray-500 text-xs">Session {sessionCount}/12</p>
            </div>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-emerald-500/20 rounded-full">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-xs font-medium">En direct</span>
          </div>
        </div>

        {/* Canvas container */}
        <div className="relative bg-deep-blue-900/50 rounded-xl overflow-hidden mb-4">
          <canvas
            ref={canvasRef}
            width={400}
            height={180}
            className="w-full h-auto"
          />
          
          {/* Labels */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-0.5 bg-cyan-400 rounded" />
              <span className="text-[10px] text-gray-400">Activité patient</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-0.5 bg-white/40 rounded" />
              <span className="text-[10px] text-gray-400">Cible optimale</span>
            </div>
          </div>

          {/* Frequency labels */}
          <div className="absolute right-2 top-2 text-[10px] text-cyan-400/60">
            Alpha 8-12Hz
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/5 rounded-lg p-2 text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Activity className="w-3 h-3 text-cyan-400" />
              <span className="text-[10px] text-gray-400">Convergence</span>
            </div>
            <span className="text-lg font-bold text-white">{progress}%</span>
          </div>
          <div className="bg-white/5 rounded-lg p-2 text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Brain className="w-3 h-3 text-purple-400" />
              <span className="text-[10px] text-gray-400">Focus</span>
            </div>
            <span className="text-lg font-bold text-white">{Math.min(99, 65 + Math.round(progress * 0.34))}%</span>
          </div>
          <div className="bg-white/5 rounded-lg p-2 text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <TrendingUp className="w-3 h-3 text-emerald-400" />
              <span className="text-[10px] text-gray-400">Progrès</span>
            </div>
            <span className="text-lg font-bold text-emerald-400">+{Math.round(progress * 0.4)}%</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4">
          <div className="flex justify-between text-[10px] text-gray-400 mb-1">
            <span>Réhabilitation neuronale</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-3xl blur-2xl -z-10" />
    </motion.div>
  );
};

export default NeuralDemo;
