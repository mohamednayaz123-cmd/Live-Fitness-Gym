import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const trainers = [
  {
    name: "Vikram Singh",
    role: "Head Coach / Bodybuilding",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Rahul Sharma",
    role: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Priya Patel",
    role: "CrossFit & Cardio",
    image: "https://images.unsplash.com/photo-1609899537878-3b3df829ebdd?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Arjun Reddy",
    role: "Nutritionist & Rehab",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-brand-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-red font-medium tracking-widest uppercase mb-3">Our Team</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
            Meet Our <span className="text-gradient">Experts</span>
          </h3>
          <p className="mt-4 text-neutral-400">10 Professional Trainers highly qualified to help you reach your goals.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-brand-card border border-white/5"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale-[50%]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-xl font-bold text-white mb-1">{trainer.name}</h4>
                <p className="text-brand-red font-medium text-sm mb-4">{trainer.role}</p>
                
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-red hover:text-white transition-colors">
                    <Instagram size={14} />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-red hover:text-white transition-colors">
                    <Twitter size={14} />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-red hover:text-white transition-colors">
                    <Facebook size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
