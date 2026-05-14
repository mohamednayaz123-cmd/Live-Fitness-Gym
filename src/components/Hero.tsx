import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-neutral-950/80 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-block px-3 py-1 rounded bg-brand-red/20 border border-brand-red/40 text-brand-red text-[10px] font-bold uppercase tracking-widest"
        >
          Best Gym in Koramangala
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-9xl font-black leading-[0.85] tracking-tight uppercase mb-6"
        >
          Transform <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">Your Body</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-neutral-400 text-sm max-w-md mb-10 leading-relaxed italic"
        >
          "Live Fitness Gym is a premium training facility featuring Jerai equipment, steam baths, and 10 world-class professional trainers."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-brand-red text-white font-bold rounded-full text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,49,49,0.4)] transition-all transform hover:-translate-y-1"
          >
            Start Journey <ArrowRight size={16} />
          </a>
          <a
            href="#memberships"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3 border border-white/20 text-white font-bold rounded-full text-xs uppercase tracking-widest hover:bg-white/5 transition-all transform hover:-translate-y-1"
          >
            Membership Plans
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-neutral-500 text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-brand-red to-transparent"></div>
      </div>
    </section>
  );
}
