import { motion } from 'motion/react';
import { Dumbbell, Droplets, Lock, MapPin, Users, Flame, Heart, HeartHandshake } from 'lucide-react';

const features = [
  { icon: Users, title: '10 Pro Trainers', desc: 'Expert guidance to hit your targets safely.' },
  { icon: Dumbbell, title: 'Jerai Equipment', desc: 'Top-tier premium machines for biomechanical perfection.' },
  { icon: Droplets, title: 'Steam Bath', desc: 'Relax and recover post-workout.' },
  { icon: Lock, title: 'Locker Facility', desc: 'Safe and secure storage for your belongings.' },
  { icon: MapPin, title: 'Spacious Area', desc: 'Massive workout floor, no overcrowding.' },
  { icon: Flame, title: 'Personalized Guidance', desc: 'Custom workout and nutrition plans.' },
  { icon: HeartHandshake, title: 'Friendly Community', desc: 'LGBTQ+ friendly, welcoming, and motivating.' },
  { icon: Heart, title: 'Multiple Machines', desc: 'Never wait in line for your favorite exercise.' },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-brand-bg relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-medium tracking-widest uppercase mb-3"
          >
            Why Choose Us
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white uppercase"
          >
            Everything you need <br />to <span className="text-gradient">succeed</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-xl flex flex-col gap-3 group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded bg-brand-red/10 flex items-center justify-center text-brand-red mb-2 group-hover:scale-110 transition-all duration-300">
                <feature.icon size={24} />
              </div>
              
              <h4 className="text-sm font-bold text-white uppercase tracking-wide">{feature.title}</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
