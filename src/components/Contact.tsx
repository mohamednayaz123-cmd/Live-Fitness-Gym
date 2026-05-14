import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-card relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-red font-medium tracking-widest uppercase mb-3">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase">
            Start Your <span className="text-gradient">Journey</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-xl">
              <h4 className="text-2xl font-bold text-white mb-6">Contact Information</h4>
              
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-brand-red shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold mb-1">Our Location</h5>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      2nd Floor, No.110/A, Bhuvaneshwari, Sri Rama Temple Road, Koramangala 8th Block, Adugodi, Bengaluru, Karnataka 560095
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-brand-red shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold mb-1">Phone Number</h5>
                    <p className="text-neutral-400 text-sm">+91 97388 17224</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-brand-red shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold mb-1">Operating Hours</h5>
                    <p className="text-neutral-400 text-sm">Open Daily: 5:00 AM – 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 sm:h-80 w-full rounded-2xl overflow-hidden glass p-2 border border-white/10">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.492476595679!2d77.60538740523091!3d12.9351221764121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed808c281%3A0xa64aa8e9fa07f8!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716180000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '0.75rem' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="glass p-8 sm:p-10 rounded-xl flex flex-col gap-6">
              <h4 className="text-2xl font-bold text-white mb-2">Book a Free Trial</h4>
              <p className="text-neutral-400 text-sm mb-4">Fill out the form below and we'll get back to you immediately.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-neutral-300">First Name</label>
                  <input type="text" id="firstName" className="bg-brand-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="John" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-neutral-300">Last Name</label>
                  <input type="text" id="lastName" className="bg-brand-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-neutral-300">Phone Number</label>
                <input type="tel" id="phone" className="bg-brand-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" placeholder="+91 98765 43210" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="goal" className="text-sm font-medium text-neutral-300">Fitness Goal</label>
                <select id="goal" className="bg-brand-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors appearance-none">
                  <option value="">Select your goal</option>
                  <option value="weight_loss">Weight Loss</option>
                  <option value="muscle_gain">Muscle Gain</option>
                  <option value="strength">General Strength</option>
                  <option value="crossfit">CrossFit / HIIT</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-300">Message (Optional)</label>
                <textarea id="message" rows={4} className="bg-brand-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors resize-none" placeholder="Any specific requirements..."></textarea>
              </div>

              <button type="button" className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg py-4 rounded-xl mt-2 flex items-center justify-center gap-2 transition-all">
                Submit Inquiry <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
