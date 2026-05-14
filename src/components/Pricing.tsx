import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, MessageCircle } from 'lucide-react';

const plans = [
  {
    name: "Monthly",
    price: "₹2,000",
    period: "/month",
    features: ["Access to all equipment", "Free locker use", "Locker Facility", "Steam Bath (1x/week)", "Basic Diet Plan"],
    popular: false
  },
  {
    name: "Quarterly",
    price: "₹5,000",
    period: "/3 months",
    features: ["Access to all equipment", "Free locker use", "Steam Bath (Unlimited)", "Customized Diet Plan", "1 PT Session", "Priority Support"],
    popular: true
  },
  {
    name: "Annual",
    price: "₹15,000",
    period: "/year",
    features: ["Access to all equipment", "Premium Locker", "Steam Bath (Unlimited)", "Advanced Nutrition Plan", "5 PT Sessions", "Freeze Option (1 month)"],
    popular: false
  }
];

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <section id="memberships" className="py-24 bg-brand-card relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-red font-medium tracking-widest uppercase mb-3">Memberships</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase">
            Choose Your <span className="text-gradient">Plan</span>
          </h3>
          <p className="mt-4 text-neutral-400">Simple pricing, no hidden fees. All plans include 18% GST.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-xl p-8 border ${
                plan.popular 
                ? 'bg-gradient-to-b from-brand-red/10 to-transparent border-brand-red/20 md:-translate-y-4' 
                : 'bg-brand-bg border-white/5 mt-0'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-red to-brand-orange text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-neutral-500 font-medium">{plan.period}</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-brand-red/20 text-brand-red' : 'bg-neutral-800 text-neutral-400'}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-neutral-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 ${
                  plan.popular
                  ? 'bg-gradient-to-r from-brand-red to-brand-orange text-white hover:shadow-[0_0_20px_rgba(255,51,51,0.5)] hover:-translate-y-1'
                  : 'bg-neutral-800 text-white hover:bg-neutral-700 hover:text-white hover:-translate-y-1'
                }`}
              >
                Join Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Payment Page Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] bg-[#1a1a1a] overflow-y-auto overflow-x-hidden">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              className="relative min-h-screen w-full flex flex-col md:flex-row"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="fixed top-6 right-6 z-[110] w-12 h-12 bg-black/50 hover:bg-[#FACC15] backdrop-blur-sm border border-white/10 hover:text-black text-white rounded-full flex items-center justify-center transition-all"
              >
                <X size={24} />
              </button>

              {/* Background Image / Right Side */}
              <div className="order-1 md:order-2 w-full md:w-[60%] h-[40vh] md:h-full relative md:fixed md:right-0 md:top-0">
                <div 
                  className="hidden md:block absolute inset-0 z-10 bg-[#FACC15]" 
                  style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
                ></div>
                <div 
                  className="hidden md:block absolute inset-0 z-20" 
                  style={{ clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 3% 100%)' }}
                >
                    <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover" alt="Gym Motivation" />
                </div>

                {/* Mobile Image */}
                <div className="block md:hidden absolute inset-0 z-10">
                    <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover object-top" alt="Gym Motivation" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/50 to-[#1a1a1a]"></div>
                </div>
                
                {/* 30% Discount Badge */}
                <div 
                  className="absolute top-12 right-0 z-30 bg-[#FACC15] text-[#111] font-black uppercase py-4 pl-12 pr-6 text-xl md:text-3xl tracking-widest leading-tight text-center"
                  style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 15% 100%, 0 50%)' }}
                >
                  30%<br/>DISCOUNT
                </div>
              </div>

              {/* Content / Left Side */}
              <div className="order-2 md:order-1 w-full md:w-[50%] h-auto md:min-h-screen relative px-6 py-10 md:p-16 lg:p-24 flex flex-col justify-center z-30 bg-[#1a1a1a] md:bg-transparent">
                <div className="max-w-md relative z-10 mx-auto md:mx-0 text-center md:text-left pt-4 md:pt-0">
                  <h2 className="text-3xl md:text-5xl font-black italic tracking-widest text-white mb-2 uppercase drop-shadow-md">
                    Shape Your
                  </h2>
                  <h2 className="text-6xl md:text-[6rem] font-black uppercase text-[#FACC15] leading-none mb-1 tracking-tight drop-shadow-lg">
                    Perfect
                  </h2>
                  <h2 className="text-6xl md:text-[6rem] font-black uppercase text-white leading-none mb-12 md:mb-16 tracking-tight drop-shadow-lg">
                    Body
                  </h2>
                  
                  <p className="text-xl md:text-3xl italic text-white font-medium mb-12 max-w-[400px] leading-snug tracking-wider mx-auto md:mx-0">
                    ARE YOU READY<br/>TO START A NEW<br/>LIFE
                  </p>

                  <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-8">
                     {/* JOIN NOW Brush & QR Group */}
                     <div className="flex flex-col items-center">
                        {/* JOIN NOW Brush */}
                        <div className="relative inline-block mb-8">
                          <div className="absolute inset-0 bg-[#FACC15] rounded-xl transform -skew-x-[15deg] scale-110 md:scale-125 shadow-xl"></div>
                          <span className="relative z-10 text-3xl md:text-4xl font-black text-[#111] px-8 py-2 block uppercase tracking-widest leading-none text-center">
                            JOIN<br/>NOW
                          </span>
                        </div>
                        
                        {/* QR Code Container */}
                        <div className="w-56 bg-white p-3 md:p-4 rounded-xl shadow-[0_0_30px_rgba(250,204,21,0.2)] relative z-10 border-4 border-[#FACC15]">
                          <img src="/images/phonepe-qr.png" alt="PhonePe QR" className="w-full h-auto object-contain rounded-lg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=dummy@ybl'; }} />
                        </div>

                        <a
                          href="https://wa.me/919738817224?text=Hi, I have completed the payment for my gym membership. Here is the screenshot."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 w-full lg:w-56 bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold uppercase text-xs tracking-wider transition-all shadow-lg hover:-translate-y-1"
                        >
                          <MessageCircle size={18} />
                          <span className="text-center leading-tight">Payment Done?<br/>WhatsApp Us</span>
                        </a>
                     </div>
                  </div>
                </div>
                
                {/* Background subtle elements */}
                <div className="absolute inset-0 pointer-events-none hidden md:block overflow-hidden">
                  {/* Subtle hexagon or line pattern */}
                  <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                  <div className="absolute w-[800px] h-[800px] bg-[#FACC15]/5 rounded-full blur-[100px] -top-1/4 -left-1/4"></div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
