import { useState, useEffect } from 'react';
import { Menu, X, WifiOff } from 'lucide-react';
import { NAV_LINKS } from '../data/siteData';
import { WhatsAppButton } from './WhatsAppButton';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-alf-black/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-2 text-alf-white"
          aria-label="ALF Está Offline - Início"
        >
          <WifiOff className="h-6 w-6 text-alf-red" aria-hidden="true" />
          <span className="font-display text-xl font-bold uppercase tracking-wider">
            ALF Está Offline
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-alf-gray transition-colors hover:text-alf-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton size="default" variant="primary" />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-alf-white lg:hidden"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {isOpen && (
        <div data-testid="mobile-menu" className="border-t border-alf-white/10 bg-alf-black lg:hidden">
          <nav className="flex flex-col gap-2 px-6 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="py-2 text-lg font-medium text-alf-gray transition-colors hover:text-alf-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4">
              <WhatsAppButton size="large" variant="primary" className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
