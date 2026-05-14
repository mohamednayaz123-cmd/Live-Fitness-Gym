import { motion } from 'motion/react';
import { Target, Dumbbell, Users, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-red/20 to-brand-orange/20 blur-2xl rounded-[3rem]"></div>
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" 
              alt="Gym Interior"
              className="relative rounded-2xl shadow-2xl border border-neutral-800 object-cover aspect-square md:aspect-[4/3] w-full"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-4 md:-right-10 glass p-6 rounded-2xl w-48 animate-[bounce_4s_infinite]">
              <div className="text-brand-red mb-2">
                <Target size={32} />
              </div>
              <div className="text-3xl font-heading font-bold text-white mb-1">996+</div>
              <div className="text-sm text-neutral-400 font-medium">Happy Members<br/>with 4.9⭐ Rating</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-red font-medium tracking-widest uppercase mb-3">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 uppercase leading-tight">
              More than a gym, <br/>we are a <span className="text-gradient">lifestyle</span>.
            </h3>
            
            <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
              Live Fitness Gym is one of the top-rated gyms in Koramangala. We provide a motivating workout environment designed for real transformation, whether you're a beginner or a seasoned bodybuilder.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 mt-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-brand-red shrink-0">
                  <Dumbbell size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Premium Equipment</h4>
                  <p className="text-sm text-neutral-500">Fully equipped with world-class Jerai machines for every muscle group.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-brand-orange shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">10 Pro Trainers</h4>
                  <p className="text-sm text-neutral-500">Certified professionals offering personalized guidance and diet plans.</p>
                </div>
              </div>
            </div>
            
            <a href="#features" className="inline-flex items-center gap-2 text-white font-medium hover:text-brand-red transition-colors group">
              Explore Our Facilities
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
