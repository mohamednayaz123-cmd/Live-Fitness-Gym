import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const phoneNumber = "919738817224";
  const message = "Hi Live Fitness Gym! I would like to book a free trial and know more about the membership plans.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
    >
      <MessageCircle size={32} />
      <span className="absolute flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping z-[-1]"></span>
    </a>
  );
}
