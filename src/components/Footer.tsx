import { AtSign, Phone } from 'lucide-react';
import { FOOTER, SITE_CONFIG } from '../data/siteData';

export function Footer() {
  return (
    <footer className="relative border-t border-alf-white/10 bg-alf-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-alf-white">
              {FOOTER.title}
            </h3>
            <p className="mt-2 text-alf-gray/80">{FOOTER.tagline}</p>
            <div className="mt-6 flex flex-col gap-2 text-alf-gray/80">
              <a
                href={`https://wa.me/${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-alf-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {FOOTER.phone}
              </a>
              <a
                href={`https://instagram.com/${SITE_CONFIG.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-alf-white"
              >
                <AtSign className="h-4 w-4" aria-hidden="true" />
                {SITE_CONFIG.instagram}
              </a>
              <a
                href={`https://${SITE_CONFIG.siteRef}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-alf-white"
              >
                {SITE_CONFIG.siteRef}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold uppercase tracking-wide text-alf-white">
              Links rápidos
            </h4>
            <ul className="mt-4 space-y-2">
              {FOOTER.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-alf-gray/80 transition-colors hover:text-alf-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold uppercase tracking-wide text-alf-white">
              Contato
            </h4>
            <p className="mt-4 text-alf-gray/80">
              Quer levar o projeto para sua escola, secretaria ou instituição?
            </p>
            <a
              href={`#contato`}
              className="mt-4 inline-block rounded-lg bg-alf-red px-5 py-2.5 font-semibold text-white transition-colors hover:bg-alf-red-hover"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-alf-white/10 pt-8 text-center text-sm text-alf-gray/60">
          {FOOTER.copyright}
        </div>
      </div>
    </footer>
  );
}
