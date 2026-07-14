import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CONTACT, getWhatsAppLink, SITE_CONFIG } from '../data/siteData';
import { Section, SectionHeader } from './Section';
import { Button } from './Button';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    city: '',
    phone: '',
    email: '',
    interestType: '',
    message: '',
  });

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const message = `Olá, meu nome é ${formData.name || '—'}.\n` +
      `Tenho interesse no Projeto ALF Está Offline.\n` +
      `Instituição: ${formData.institution || '—'}\n` +
      `Cidade/Estado: ${formData.city || '—'}\n` +
      `Telefone: ${formData.phone || '—'}\n` +
      `E-mail: ${formData.email || '—'}\n` +
      `Tipo de interesse: ${formData.interestType || '—'}\n` +
      `Mensagem: ${formData.message || '—'}`;

    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <Section id="contato" variant="black">
      <SectionHeader title={CONTACT.title} subtitle={CONTACT.lead} />

      <motion.form
        initial={{ opacity: 0.95, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="mx-auto max-w-3xl space-y-6 rounded-2xl border border-alf-white/10 bg-alf-graphite/40 p-6 md:p-10"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-alf-gray">{CONTACT.form.name}</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-lg border border-alf-white/10 bg-alf-black px-4 py-3 text-alf-white placeholder-alf-gray/40 focus:border-alf-red focus:outline-none focus:ring-1 focus:ring-alf-red"
              placeholder="Seu nome"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-alf-gray">{CONTACT.form.institution}</span>
            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-alf-white/10 bg-alf-black px-4 py-3 text-alf-white placeholder-alf-gray/40 focus:border-alf-red focus:outline-none focus:ring-1 focus:ring-alf-red"
              placeholder="Nome da instituição"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-alf-gray">{CONTACT.form.city}</span>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-alf-white/10 bg-alf-black px-4 py-3 text-alf-white placeholder-alf-gray/40 focus:border-alf-red focus:outline-none focus:ring-1 focus:ring-alf-red"
              placeholder="Cidade/Estado"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-alf-gray">{CONTACT.form.phone}</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-lg border border-alf-white/10 bg-alf-black px-4 py-3 text-alf-white placeholder-alf-gray/40 focus:border-alf-red focus:outline-none focus:ring-1 focus:ring-alf-red"
              placeholder="(35) 9 0000-0000"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-medium text-alf-gray">{CONTACT.form.email}</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-alf-white/10 bg-alf-black px-4 py-3 text-alf-white placeholder-alf-gray/40 focus:border-alf-red focus:outline-none focus:ring-1 focus:ring-alf-red"
            placeholder="seu@email.com"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-alf-gray">{CONTACT.form.interestType}</span>
          <select
            name="interestType"
            value={formData.interestType}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-alf-white/10 bg-alf-black px-4 py-3 text-alf-white focus:border-alf-red focus:outline-none focus:ring-1 focus:ring-alf-red"
          >
            <option value="" disabled>Selecione uma opção</option>
            {CONTACT.form.interestOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-alf-gray">{CONTACT.form.message}</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-2 w-full rounded-lg border border-alf-white/10 bg-alf-black px-4 py-3 text-alf-white placeholder-alf-gray/40 focus:border-alf-red focus:outline-none focus:ring-1 focus:ring-alf-red"
            placeholder="Como podemos ajudar?"
          />
        </label>

        <Button type="submit" variant="primary" size="large" className="w-full">
          {CONTACT.form.submit}
        </Button>

        <p className="text-center text-sm text-alf-gray/60">
          Ao enviar, você será redirecionado para o WhatsApp{' '}
          <strong className="text-alf-white">{SITE_CONFIG.phone}</strong>.
        </p>
      </motion.form>
    </Section>
  );
}
