import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'large';
  onClick?: () => void;
  type?: 'button' | 'submit';
  ariaLabel?: string;
  className?: string;
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-alf-red focus:ring-offset-2 focus:ring-offset-alf-black';

const variants = {
  primary:
    'bg-alf-red text-white hover:bg-alf-red-hover hover:shadow-[0_0_24px_rgba(215,25,32,0.35)]',
  secondary:
    'bg-alf-white text-alf-black hover:bg-alf-gray hover:shadow-lg',
  outline:
    'border-2 border-alf-white/30 text-alf-white hover:border-alf-red hover:text-alf-white hover:bg-alf-red/10',
} as const;

const sizes = {
  default: 'px-6 py-3 text-base',
  large: 'px-8 py-4 text-lg md:text-xl',
} as const;

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  onClick,
  type = 'button',
  ariaLabel,
  className = '',
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
