import { Github } from 'lucide-react';

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

export default Footer;
