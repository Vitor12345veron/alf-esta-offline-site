import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { getWhatsAppLink, SITE_CONFIG } from '../data/siteData';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={getWhatsAppLink()}
      initial={{ opacity: 0.95, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-alf-red text-white shadow-lg shadow-alf-red/30 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-alf-red focus:ring-offset-2 focus:ring-offset-alf-black"
      data-testid="floating-whatsapp"
      aria-label={`Falar no WhatsApp - ${SITE_CONFIG.phone}`}
    >
      <MessageCircle className="h-7 w-7" />
    </motion.a>
  );
}
