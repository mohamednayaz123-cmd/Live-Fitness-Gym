import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    text: "Not every gym gives you the kind of energy that makes you want to show up daily. Proper guidance, constant motivation, and real results.",
    author: "Customer Review",
    rating: 5,
  },
  {
    text: "Multiple machines for each activity, top-class trainers, premium equipment. Highly recommended.",
    author: "Bablu Barbhuiya",
    rating: 5,
  },
  {
    text: "Focused and motivating crowd — not overly packed or chaotic. The trainers are always there to help.",
    author: "Member Feedback",
    rating: 5,
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-brand-bg relative border-t border-white/5">
      {/* Decorative bg */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-red/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-red font-medium tracking-widest uppercase mb-3">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase">
            Stories of <span className="text-gradient">Transformation</span>
          </h3>
          <p className="mt-4 text-neutral-400">Join 996+ members who rate us 4.9⭐ on Google</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-brand-bg p-8 rounded-xl border border-white/5 relative hover:border-brand-red/50 transition-colors"
            >
              <Quote size={40} className="text-neutral-800 absolute top-6 right-6" />
              
              <div className="flex text-brand-orange mb-6">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-neutral-300 italic mb-8 relative z-10">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-neutral-400">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-wide">{review.author}</h4>
                  <p className="text-neutral-500 text-xs">Gym Member</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
