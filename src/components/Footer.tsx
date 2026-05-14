import { Instagram, Facebook, Twitter, Dumbbell } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-bg pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
               <h1 className="text-3xl font-black tracking-tighter leading-none text-white">
                 LIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange">FITNESS</span>
               </h1>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Transform Your Body. Build Your Confidence. Best Gym in Koramangala with premium equipment and professional trainers.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-brand-red hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-brand-red hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-brand-red hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-neutral-400 hover:text-brand-red text-sm transition-colors">About Us</a></li>
              <li><a href="#features" className="text-neutral-400 hover:text-brand-red text-sm transition-colors">Facilities</a></li>
              <li><a href="#memberships" className="text-neutral-400 hover:text-brand-red text-sm transition-colors">Memberships</a></li>
              <li><a href="#gallery" className="text-neutral-400 hover:text-brand-red text-sm transition-colors">Gallery</a></li>
              <li><a href="#trainers" className="text-neutral-400 hover:text-brand-red text-sm transition-colors">Our Trainers</a></li>
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h4 className="text-white font-bold mb-6">Specialities</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-neutral-400 text-sm"><Dumbbell size={14} className="text-brand-red"/> Weight Training</li>
              <li className="flex items-center gap-2 text-neutral-400 text-sm"><Dumbbell size={14} className="text-brand-red"/> Powerlifting</li>
              <li className="flex items-center gap-2 text-neutral-400 text-sm"><Dumbbell size={14} className="text-brand-red"/> CrossFit</li>
              <li className="flex items-center gap-2 text-neutral-400 text-sm"><Dumbbell size={14} className="text-brand-red"/> Nutrition Plans</li>
              <li className="flex items-center gap-2 text-neutral-400 text-sm"><Dumbbell size={14} className="text-brand-red"/> Steam Bath Recovery</li>
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Business Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-neutral-400 text-sm">
                <span>Mon - Sat</span>
                <span>5:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-neutral-400 text-sm">
                <span>Sunday</span>
                <span>6:00 AM - 12:00 PM</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10 text-center">
              <span className="block text-brand-red font-bold text-lg">4.9 ⭐</span>
              <span className="text-neutral-400 text-xs text-center block mt-1">Based on 996+ Google Reviews</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Live Fitness Gym. All rights reserved.</p>
          <div className="flex gap-4">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
