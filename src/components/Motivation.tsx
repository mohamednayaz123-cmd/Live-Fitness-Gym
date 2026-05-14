import { motion } from 'motion/react';

export default function Motivation() {
  return (
    <section className="relative py-32 bg-brand-card overflow-hidden flex items-center justify-center min-h-[60vh]">
      {/* Parallax-like Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
          alt="Workout Motivation"
          className="w-full h-full object-cover object-center opacity-30 grayscale sepia-[.2] hue-rotate-[-50deg] saturate-[200%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-card via-transparent to-brand-card"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-transparent tracking-tighter mb-6 style-stroke">
            No Shortcuts.
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tighter mb-10 drop-shadow-[0_0_30px_rgba(239,68,68,0.4)]">
            Only Results.
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto font-medium">
            Your fitness journey starts today. Push harder than yesterday if you want a different tomorrow.
          </p>
          
          <div className="mt-10">
             <a href="#contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-neutral-200 transition-colors uppercase tracking-widest">
               Commit Now
             </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .style-stroke {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.2);
          color: transparent;
        }
      `}</style>
    </section>
  );
}
