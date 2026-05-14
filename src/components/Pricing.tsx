import { motion } from 'motion/react';
import { Check } from 'lucide-react';

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
              
              <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 ${
                plan.popular
                ? 'bg-gradient-to-r from-brand-red to-brand-orange text-white hover:shadow-[0_0_20px_rgba(255,51,51,0.5)]'
                : 'bg-neutral-800 text-white hover:bg-neutral-700 hover:text-white'
              }`}>
                Join Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
