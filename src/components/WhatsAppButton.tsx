import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink, SITE_CONFIG } from '../data/siteData';
import { Button } from './Button';

interface WhatsAppButtonProps {
  message?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'large';
  className?: string;
  label?: string;
}

export function WhatsAppButton({
  message,
  variant = 'primary',
  size = 'default',
  className = '',
  label = 'Falar no WhatsApp',
}: WhatsAppButtonProps) {
  return (
    <Button
      href={getWhatsAppLink(message)}
      variant={variant}
      size={size}
      className={className}
      ariaLabel={`${label} - ${SITE_CONFIG.phone}`}
    >
      <MessageCircle className="h-5 w-5" />
      {label}
    </Button>
  );
}
