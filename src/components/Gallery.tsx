import { motion } from 'motion/react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop',
    title: 'Weight Training',
    colSpan: 'md:col-span-2 md:row-span-2'
  },
  {
    url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
    title: 'Cardio Area',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1661884238153-f72befbbef66?q=80&w=2071&auto=format&fit=crop',
    title: 'Modern Equipment',
  },
  {
    url: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=2042&auto=format&fit=crop',
    title: 'Steam Bath Facility',
  },
  {
    url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop',
    title: 'Expert Trainers',
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-brand-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-brand-red font-medium tracking-widest uppercase mb-3">Facility Gallery</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase">
              Inside <span className="text-gradient">Live Fitness</span>
            </h3>
          </div>
          <p className="text-neutral-400 max-w-sm md:text-right">
            Spacious workout area, premium Jerai equipment, and a motivating atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative rounded-2xl overflow-hidden bg-brand-card border border-white/5 ${img.colSpan || 'md:col-span-1'}`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="absolute bottom-6 left-6">
                    <h4 className="text-white font-bold text-lg">{img.title}</h4>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
